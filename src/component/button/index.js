import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const Button = ({ title, className, handleClick, href }) => {
    return href ? (
        <Link
            to={href}
            className={twMerge(`flex items-center justify-center text-white capitalize text-sm leading-4 rounded-[28px] bg-p2 ${className}`)}
        >
            {title}
        </Link>
    ) :
        (
            <button
                onClick={handleClick}
                className={twMerge(`flex items-center justify-center w-full text-white font-medium capitalize text-sm leading-4 rounded-[28px] bg-p2 ${className}`)}
            >
                {title}
            </button>
        )
}

export default Button