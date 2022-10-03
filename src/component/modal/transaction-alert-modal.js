import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import Button from "component/button"
import { Fragment } from "react"

const TransactionAlertModal = ({setShowModal, showModal }) => {

    const handleClose = () => setShowModal(false)

    return (
        <Transition
            appear
            show={showModal}
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
                            <h1 className="flex-1 capitalize text-xl leading-6 text-white font-bold md:text-2xl md:leading-[29px] text-center">transaction alert</h1>
                            <XMarkIcon onClick={handleClose} className="h-8 w-8 text-[#9C9D9F] cursor-pointer" />

                        </Dialog.Title>
                        <section className="my-6">
                            <p className="font-bold text-sm text-center text-white">
                                You are about to send 1 transaction(s) to the blockchain,
                                Sign a message in your wallet to mint and list this item
                            </p>
                            <div className="mt-8">
                                <Button title="Proceed" className='rounded-[40px] h-12' />
                                <button onClick={handleClose} className="text-white font-medium text-base leading-[18px] cursor-pointer mx-auto block mt-8">Cancel</button>
                            </div>
                        </section>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default TransactionAlertModal