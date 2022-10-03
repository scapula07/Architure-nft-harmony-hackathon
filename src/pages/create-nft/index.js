import ListNftModal from "component/modal/list-nft-modal";
import { useState } from "react";
import CreateNftForm from "./create-nft-form"

const CreateNft = () => {
    const [showListNftModal, setShowListNftModal] = useState(false);
    return (
        <>
            {
                showListNftModal ? <ListNftModal {...{ showListNftModal, setShowListNftModal }} /> : null
            }
            <section className="layout-container pt-10 mb-20 max-w-[960px] md:pt-20 md:mb-[195px]">
                <h1 className="capitalize font-bold text-white text-xl">List an NFT</h1>
                <CreateNftForm setShowListNftModal={setShowListNftModal} />
            </section>
        </>
    )
}

export default CreateNft