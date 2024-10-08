"use client"

import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import LoginComp from "@/components/organisms/Login";
import Signup from "@/components/organisms/Signup";
import { useEffect, useState } from "react";

const Login = () => {
    const [login, setLogin] = useState(true);
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center gap-4">
                <Button text="Logg inn" className={`w-40 ${login ? `bg-[#1e54c9]` : ``}`} onClick={() => setLogin(true)}/>
                <Button text="Registrer deg" className={`w-40 ${!login ? `bg-[#1e54c9]` : ``}`} onClick={() => setLogin(false)}/>
            </div>
            {login ? <LoginComp /> : <Signup />}
        </div>
    )
}

export default Login;