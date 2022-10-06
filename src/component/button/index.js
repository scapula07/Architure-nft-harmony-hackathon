import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const Button = ({ title, className, handleClick, href }) => {
    return href ? (
        <Link
            to={href}
            className={twMerge(`flex items-center justify-center text-[#1B1C1E] capitalize text-sm leading-4 rounded-[4px] bg-gradient-to-r from-[#87F3FD] to-[#66A8FF] ${className}`)}
        >
            {title}
        </Link>
    ) :
        (
            <button
                onClick={handleClick}
                className={twMerge(`flex items-center justify-center w-full text-[#1B1C1E] font-medium capitalize text-sm leading-4 rounded-[4px] bg-gradient-to-r from-[#87F3FD] to-[#66A8FF] ${className}`)}
            >
                {title}
            </button>
        )
}

export default Button