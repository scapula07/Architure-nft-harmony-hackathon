import Button from "component/button"
import { poolHeading, poolList } from "utils/data"

import SearchIcon from 'assests/misc/search.png'
import { useState } from "react"
import PoolDetailModal from "component/modal/pool-details-modal"

const StakeTableData = () => {
    const [searchText, setSearchText] = useState("")
    const [poolData, setPoolData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (data) => {
        setPoolData(data)
        setShowModal(true)
    }

    const handleTextChange = e => setSearchText(e.target.value)

    return (
        <>
            {
                showModal ? <PoolDetailModal {...{ showModal, setShowModal, poolData }} /> : null
            }
            <div className="layout-container text-white mt-[64px] mb-20 ">
                {/* search pools */}
                <div className="flex items-center mb-12 bg-[#151515] px-3 py-4 w-[389px] rounded-lg border border-[#475467]">
                    <input type="text" placeholder="Search Pools" className="text-sm leading-4 focus:outline-none w-full pr-2  bg-transparent" onChange={handleTextChange} />
                    <img src={SearchIcon} alt="" />
                </div>

                {/* table */}
                <div className="overflow-x-auto">
                    <div className="md:w-[1280px] lg:w-full">
                        {/* table heading */}
                        <div className="grid grid-cols-3 md:grid-cols-6 py-[19px] bg-[#2A2B31] pl-3 md:pl-6">
                            {
                                poolHeading.map((item, index) => (
                                    <div key={index} className={`uppercase text-sm leading-[18px] font-medium ${item.toLowerCase() === 'ends' || item.toLowerCase() === 'total stake' || item.toLowerCase() === 'earnings' ? 'hidden md:block' : 'block'}`}>{item}</div>
                                ))
                            }
                        </div>

                        {/* table body */}
                        <div className="h-[400px] overflow-y-scroll">
                            {
                                poolList?.filter(item => item?.poolName?.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => (
                                    <div key={index} className="grid grid-cols-3 md:grid-cols-6 pl-3 md:pl-6 py-3 items-center">
                                        <div className="font-medium text-[15px] leading-5 capitalize">{item.poolName}</div>
                                        <div className="text-base leading-5 hidden md:block">{item.totalStake} ONE</div>
                                        <div className="hidden md:block">
                                            <p className="mb-[5px] font-medium text-base leading-5">{item.earnings}</p>
                                            <p className="text-[13px] leading-[15px] text-lightdark">{item.earningDollars} USD</p>
                                        </div>
                                        <div className="text-base leading-5">{item.apr}%</div>
                                        <div className="hidden md:block">
                                            <p className="mb-[5px] font-medium text-base leading-5">{item.end}</p>
                                            <p className="text-[13px] leading-[15px] text-lightdark">{item.endDate}</p>
                                        </div>
                                        <div className="">
                                            <Button title='view details' handleClick={() => handleShowModal(item)} className="bg-transparent text-xs h-[30px] md:rounded-[20px] border border-[#7491BB] md:h-[38px] w-[90px] md:w-[138px] hover:bg-p2" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StakeTableData