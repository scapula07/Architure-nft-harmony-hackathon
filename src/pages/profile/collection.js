import React from 'react'

import { newCollections } from "utils/data"

// images
import HarmonySymbolIcon from "assests/misc/harmony.svg"

const Collection = () => {
    return (
        <div className='layout-container mb-[136px]'>
            <div className='border-b border-[#95979F] py-[28px] px-[8px] mb-[50px]'>
                <ul className='flex justify-start'>
                    <li className='text-white text-base leading-[18px] pr-[10px] md:pr-[40px] cursor-pointer'>Created <span className='py-[4px] px-[5px] rounded-[40px] bg-[#FFFFFF14]'>10</span></li>
                    <li className='text-[#95979F] text-base leading-[18px] pr-[10px] md:pr-[40px] cursor-pointer'>Owned <span className='py-[4px] px-[5px] rounded-[40px] bg-[#FFFFFF14]'>1</span></li>
                    <li className='text-[#95979F] text-base leading-[18px] pr-[10px] md:pr-[40px] cursor-pointer'>Collections <span className='py-[4px] px-[5px] rounded-[40px] bg-[#FFFFFF14]'>2</span></li>
                </ul>
            </div>
            <div className="mt-5 lg:mt-[33px] space-y-10 md:space-y-0 md:gap-5 lg:gap-6 md:grid grid-cols-2 lg:grid-cols-3">
                {
                    newCollections.map((item, index) => (
                        <div key={index} className="bg-[#2D2D2D] rounded-lg px-3 pb-6 pt-3">
                            <div className="relative">
                                <img src={item.image} className="w-full" alt="" />
                            </div>
                            <div className="mt-10 flex justify-between items-center">
                                <div>
                                    <h1 className="text-white font-medium capitalize md:text-xl md:leading-[23px] mb-2">{item.nftName}</h1>
                                    <p className="text-[#95979F] text-sm md:text-base md:leading-[18px]">{item.owner}</p>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <img src={HarmonySymbolIcon} className="w-5" alt="" />
                                        <p className="text-white text-xl font-normal">{item.price} ONE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Collection