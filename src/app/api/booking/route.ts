import { db } from "@/lib/db"; 
import { NextResponse } from "next/server";

/**
 * Funksjonen håndterer POST request for å booke et rom, enten ved å spesifisere et rom eller en kategori.
 * @param req - request objektet
 * @returns NextResponse objekt med bookingen eller en feilmelding.
 */
export async function POST(req: Request) {
    
    try {
        const body = await req.json();
        const { roomId, category, userId, startDate, endDate } = body;  
        const start = new Date(startDate);
        const end = new Date(endDate);

        let availableRoomId = roomId;
        
        if (!roomId && category) {
            const availableRoom = await db.room.findFirst({
                where: {
                    category: category,
                    bookings: {
                        none: {
                            OR: [
                                {
                                    startDate: {
                                        lte: end
                                    },
                                    endDate: {
                                        gte: start
                                    }
                                }
                            ]
                        }
                    }
                }
            })

            if (!availableRoom) {
                return NextResponse.json(
                    { message: "Det er ingen ledige rom i denne kategorien" },
                    { status: 404 } // Not Found
                );
            }

            availableRoomId = availableRoom.id;
        }

        const existingBooking = await db.booking.findFirst({
            where: {
                roomId: availableRoomId,
                OR: [
                    {
                        startDate: {
                            lte: end
                        },
                        endDate: {
                            gte: start
                        }
                    }
                ]
            }
        });

        if (existingBooking) {
            return NextResponse.json(
                { message: "Rommet er booket disse dagene" },
                { status: 409 } // Conflict
            );
        }

        const newBooking = await db.booking.create({
            data: {
                roomId: availableRoomId,
                userId: parseInt(userId),
                startDate: start,
                endDate: end
            }
        });

        return NextResponse.json(
            { booking: newBooking, message: "Rommet er booket" },
            { status: 201 } // Created
        );

    } catch (error) {
        console.error("Bookingfeil: ", error);
        return NextResponse.json(
            { message: "En feil oppstod under bookingen" },
            { status: 500 } // Internal Server Error
        );
    }
}