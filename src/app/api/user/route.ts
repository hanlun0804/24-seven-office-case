import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash, compare } from "bcrypt";

/**
 * Funksjonen håndterer POST request for å registrere eller logge inn en bruker.
 * @param req - request objektet
 * @returns NextResponse objekt med brukerdata eller en feilmelding.
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, action } = body;
        const existingUser = await db.user.findUnique({
            where: { email: email }
        });

        if (action === "register") {
            if (existingUser) {
                return NextResponse.json(
                    { user: null, message: "Bruker med denne e-posten finnes allerede" }, 
                    { status: 409 } // Conflict Error
                ); 
            }
            const hashedPassword = await hash(password, 10);
            const newUser = await db.user.create({
                data: {
                    email,
                    password: hashedPassword
                }
            });
            const { password: userPasswork, ...rest } = newUser;
            return NextResponse.json(
                { user: rest, message: "Bruker opprettet" }, 
                { status: 201 } // Created
            ); 
        }

        if (action === "login") {
            if (!existingUser) {
                return NextResponse.json(
                    { message: "Bruker finnes ikke" },
                    { status: 404 } // Not Found
                );
            }

            const passwordMatch = await compare(password, existingUser.password);

            if (!passwordMatch) {
                return NextResponse.json(
                    { message: "Feil passord" },
                    { status: 401 } // Unauthorized
                );
            }

            const { password: userPassword, ...rest } = existingUser;
            return NextResponse.json(
                { user: rest, message: "Logget inn" },
                { status: 200 } // OK
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "En feil oppstod" },
            { status: 500 } // Internal Server Error
        )
    }
}
