import { newCollections } from "utils/data"
import HarmonySymbolIcon from "assests/misc/harmony.svg"
import FavoriteIcon from "assests/landingPage/new-collections/favorite.png"

const NewCollection = () => {
    return (
        <section className="layout-container mt-20">
            <h1 className="section-heading">New Collections</h1>

            <div className="mt-5 lg:mt-[33px] space-y-10 md:space-y-0 md:gap-5 lg:gap-6 md:grid grid-cols-2 lg:grid-cols-3">
                {
                    newCollections.map((item, index) => (
                        <div key={index} className="bg-[#2D2D2D] rounded-lg px-3 pb-6 pt-3">
                            <div className="relative">
                                <img src={item.image} className="w-full" alt="" />
                                <img src={FavoriteIcon} alt="" className="absolute right-5 top-5" />
                            </div>
                            <div className="mt-10 flex justify-between items-center">
                                <div>
                                    <h1 className="text-white font-medium capitalize md:text-xl md:leading-[23px] mb-2">{item.nftName}</h1>
                                    <p className="text-[#95979F] text-sm md:ext-base md:leading-[18px]">{item.owner}</p>
                                </div>
                                <div>
                                    <h1 className="text-[#95979F] capitalize text-sm md:text-base md:leading-[18px]">Price</h1>
                                    <div className="flex items-center space-x-2">
                                        <img src={HarmonySymbolIcon} className="h-3 w-3" alt="" />
                                        <p className="text-white">{item.price} ONE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewCollection