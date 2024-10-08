"use client"

import { FC, useEffect, useState } from "react"
import Logo from "../atoms/Logo"
import Login from "../molecules/Login"
import Link from "next/link"
import { useRouter } from "next/navigation"

type NavbarProps = {    
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const router = useRouter();

    return (
        <div className={`p-6 flex justify-between items-center ${className}`}>
            <Link href="/"><Logo /></Link>
            <div className="flex gap-6 items-center text-xl font-semibold">
                <Link href="/rooms" className="hover:underline">Se rom</Link>
                <Link href="/booking" className="hover:underline">Book rom</Link>
                {!isLoggedIn ? 
                    (<Login />) : 
                    (<Link href="/dashboard" className="hover:underline">Dashboard</Link>)
                }
            </div>
        </div>
    )
}

export default Navbar