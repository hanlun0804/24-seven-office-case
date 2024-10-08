import { FC } from "react"

type LogoProps = {
    className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <div className={`text-3xl font-bold ${className}`}>
            24SevenLiving
        </div>
    )
}

export default Logo