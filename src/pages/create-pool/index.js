import CreatePoolForm from "./create-pool-form"

const CreatePool = () => {
    return (
        <section className="layout-container pt-10 mb-20 max-w-[960px] md:pt-20 md:mb-[195px]">
            <h1 className="capitalize font-bold text-white text-xl">create pool</h1>
            <CreatePoolForm />
        </section>
    )
}

export default CreatePool