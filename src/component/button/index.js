import { twMerge } from "tailwind-merge"

const Button = ({ title, className, handleClick, href }) => {
    return href ? (
        <a
            href={href}
            className={twMerge(`flex items-center justify-center text-white capitalize text-sm leading-4 rounded-[28px] bg-p2 ${className}`)}
        >
            {title}
        </a>
    ) :
        (
            <button
                onClick={handleClick}
                className={twMerge(`flex items-center justify-center text-white capitalize text-sm leading-4 rounded-[28px] bg-p2 ${className}`)}
            >
                {title}
            </button>
        )
}

export default Button