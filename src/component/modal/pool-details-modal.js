import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Button from 'component/button'

const PoolDetailModal = ({ showModal, setShowModal, poolData }) => {

    const handleClose = () => setShowModal(false)

    const data = (title, value) => (
        <div className="grid grid-cols-2">
            <div>{title}</div>
            <div>{value}</div>
        </div>
    )

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
                    <div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-[#17191D] max-w-[694px] px-6 py-6 rounded-lg">
                        <Dialog.Title as="div" className="flex items-center">
                            <h1 className="flex-1 capitalize text-xl leading-6 text-white font-bold md:text-2xl md:leading-[29px]">pool details</h1>
                            <XMarkIcon onClick={handleClose} className="h-8 w-8 text-[#9C9D9F] cursor-pointer" />

                        </Dialog.Title>
                        <section className="my-6">
                            <div className="text-white space-y-[11px]">
                                {data('APR:', `${poolData.apr}%`)}
                                {data('Ends in:', `${poolData.end} (${poolData.endDate})`)}
                                {data('Min. stake per user:', "$100")}
                                {data('Number of stakers:', "10")}
                                {data('Max. number of stakers:', "15")}
                            </div>

                            <div className="flex justify-between bg-[#1B1B1D] rounded-[5px] border border-[#3D3D3E] py-[29px] px-3 mt-6 mb-8">
                                <div>
                                    <p className='text-lightdark text-sm leading-4'>Pool Reward</p>
                                    <p className='mt-2 mb-1 font-bold text-white text-xl leading-[23px]'>0</p>
                                    <p className='text-lightdark text-sm leading-4 font-medium'>0 USD</p>
                                </div>
                                <Button title="Harvest Rewards" className="w-[186px] h-[46px] rounded"/>
                            </div>

                            <Button title="Join Pool" className="mx-auto rounded w-[129px] h-12 font-medium" />
                        </section>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default PoolDetailModal