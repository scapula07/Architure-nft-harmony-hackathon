import "./checkbox.css"

const CheckBox = ({ name, handleChecked, value, id, title }) => {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                onChange={handleChecked}
                checked={value}
                {...{ name, id }}
            />
            <label htmlFor={id} className="text-[#9C9D9F] text-base leading-[18px] ">{title}</label>
        </div>
    )
}

export default CheckBox