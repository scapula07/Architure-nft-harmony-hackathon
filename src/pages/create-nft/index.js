
import withTransactionModal from "HOC/withTransactionModal"
import CreateNftForm from "./create-nft-form"

const CreateNft = ({ setShowModal }) => {
    return (

        <section className="layout-container pt-10 mb-20 max-w-[960px] md:pt-20 md:mb-[195px]">
            <h1 className="capitalize font-bold text-white text-xl">List an NFT</h1>
            <CreateNftForm {...{ setShowModal }} />
        </section>

    )
}

export default withTransactionModal(CreateNft)
