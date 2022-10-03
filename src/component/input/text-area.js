import withLabel from "HOC/withLabel"

const TextArea = ({ id, name, value, handleTextChange, placeholder }) => {
    return (
        <textarea
            onChange={handleTextChange}
            {...{ id, name, placeholder, value }}
            className="bg-[#24262B] focus:outline-none rounded-[5px] w-full placeholder:text-[#62646C] text-[#62646C] px-3 py-4 h-40"
        />
    )
}

export default withLabel(TextArea)