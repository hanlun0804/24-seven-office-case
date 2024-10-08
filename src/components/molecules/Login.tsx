import { FC } from "react"
import Button from "../atoms/Button"
import Link from "next/link"

type LoginProps = {
    className?: string
}

const Login: FC<LoginProps> = ({ className }) => {
    return (
        <Link href="/login">
            <Button text="Logg inn" className="w-40"/>
        </Link>
    )
}

export default Login