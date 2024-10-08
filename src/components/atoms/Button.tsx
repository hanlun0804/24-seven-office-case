import { FC } from "react"

type ButtonProps = {
    className?: string
    text: string
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ className, onClick, text }) => {
    return (
        <button className={`bg-[#3B82F6] hover:bg-[#2563EB] font-bold text-xl rounded-lg text-white p-3 ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button