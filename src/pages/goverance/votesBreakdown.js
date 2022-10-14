import React from 'react'

import { voteBreakdownData } from "utils/data"

const VotesBreakdown = () => {
    return (
        <div className='bg-[#2D2D2D] rounded-[8px] py-8 px-[22px] mt-4 w-full'>
            <h2 className='capitalize text-[#F5F5F5] text-base leading-[18px] font-medium mb-2'>Vote breakdown</h2>
            {
                voteBreakdownData.map((item, index) => (
                    <div>
                        <p className='text-[#D9D9D9] text-sm leading-7 mb-4'>You are about to send 1 transaction(s) to the blockchain, Sign a message in your wallet to mint and list this item</p>
                        <p className='text-[#D9D9D9] text-sm leading-6'>LEADING OPTION: <span className='text-[#66A8FF] uppercase'> Wiz buildings </span> with 23,243 ONE Supporting</p>

                    </div>
                ))
            }

        </div>
    )
}

export default VotesBreakdown