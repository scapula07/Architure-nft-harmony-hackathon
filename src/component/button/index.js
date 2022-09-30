import { twMerge } from "tailwind-merge"

const Button = ({ title, className, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={twMerge(`flex items-center justify-center text-white capitalize text-sm leading-4 rounded-[28px] bg-p2 ${className}`)}
        >
            {title}
        </button>
    )
}

export default Button