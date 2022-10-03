const withLabel = (WrappedComponent) => {
    return function LabelProvider({ title, id, ...props }) {
        return (
            <div>
                <label className="label" htmlFor={id}>{title}</label>
                <WrappedComponent  {...props} />
            </div>
        )
    }
}

export default withLabel