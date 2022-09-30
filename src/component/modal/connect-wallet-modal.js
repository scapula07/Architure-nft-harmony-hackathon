import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useContractContext } from "context/contract-context"
import Button from "component/button"
import { XMarkIcon } from "@heroicons/react/24/solid"
import MetaMask from "assests/modal/metamask.svg"

const ConnectWalletModal = ({ setShowConnectWalletModal, showConnectWalletModal }) => {

    const { connectWallet } = useContractContext()
    const handleClose = () => setShowConnectWalletModal(false)

    const handleConnectWallet = () => {
        handleClose()
        connectWallet()
    }

    return (
        <Transition
            appear
            show={showConnectWalletModal}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="fixed inset-0 z-[999999]"
                onClose={handleClose}
            >
                <div className="min-h-screen text-center">
                    <Dialog.Overlay className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-75 z-[999999]" />
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-[#17191D] max-w-lg px-6 py-6 rounded-lg">
                        <Dialog.Title as="div" className="flex items-center">
                            <h1 className="flex-1 capitalize text-xl leading-6 text-white font-bold md:text-2xl md:leading-[29px] text-center">Connect Wallet</h1>
                            <XMarkIcon onClick={handleClose} className="h-8 w-8 text-[#9C9D9F] cursor-pointer" />

                        </Dialog.Title>
                        <section className="my-6">
                            {/* <img src={Coinbase} alt="" className="h-8 w-8" /> */}
                            <p className="font-bold text-base leading-[18px] text-center text-[#475467]">Link your wallet and account to continue</p>
                            <div className="bg-[#1E2024] py-[31px] pl-3 mt-8">
                                <div className="flex items-center space-x-3">
                                    <img src={MetaMask} alt="" />
                                    <div className="">
                                        <h1 className="capitalize text-sm leading-4 font-medium text-[#F5F5F5] mb-1">metaMask</h1>
                                        <p className="text-xs leading-[14px] text-[#9C9D9F]">The popular crypto wallet is secure and flexible</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex items-center justify-end">
                                <Button onClick={handleConnectWallet} title="connect" className="w-[90px] h-8 mt-5" />
                            </div>
                        </section>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ConnectWalletModal
