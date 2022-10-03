import Button from "component/button"

const CommunityPools = () => {
    return (
        <section className="bg-[#282828] mt-16">
            <div className="layout-container text-white py-8 md:flex items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h1 className="capitalize font-bold mb-3 md:mb-[15px] text-xl md:text-4xl md:leading-[41px] ">community pools</h1>
                    <p className="md:text-[18px] md:leading-[29px]">
                        Just stake some tokens to earn. High APR, low risk.
                    </p>
                </div>
                <Button
                    href="/create-pool"
                    title="Create Pool"
                    className="font-medium w-[100px] h-10 md:w-[153px] md:h-[52px] md:rounded-[40px] ml-auto md:ml-0"
                />
            </div>
        </section>
    )
}

export default CommunityPools