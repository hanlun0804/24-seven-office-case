import { db } from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * Funksjon håndterer POST request for å hente tilgjengelige rom innenfor en spesifisert datoperiode.
 * @param req - request objektet
 * @returns NextResponse objekt med tilgjengelige rom eller en feilmelding.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { startDate, endDate } = body;

    if (!startDate || !endDate) {
      return NextResponse.json(
        { message: "Trenger start og slutt datoer" },
        { status: 400 } // Bad Request
      );
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const availableRooms = await db.room.findMany({
      where: {
        bookings: {
          none: {
            OR: [
              {
                startDate: {
                  lte: end,
                },
                endDate: {
                  gte: start,
                },
              },
            ],
          },
        },
      },
    });

    return NextResponse.json(availableRooms, { status: 200 });
  } catch (error) {
    console.error("Feil oppstod ved romsøking:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
