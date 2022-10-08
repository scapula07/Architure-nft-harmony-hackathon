import withLabel from 'HOC/withLabel'

const TextInput = ({ id, placeholder, handleTextChange, value, type = "text", ...props }) => {
    return (
        <input
            onChange={handleTextChange}
            {...{ placeholder, id, type, value, ...props }}
            className="w-full rounded-[5px] bg-[#24262B] text-sm leading-4 placeholder:text-[#62646C] text-[#62646C] px-3 py-4 focus:outline-none"
        />
    )
}

export default withLabel(TextInput)