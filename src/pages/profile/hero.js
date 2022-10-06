import toast from 'react-hot-toast';

// images
import HeroImg from 'assests/profile/hero.svg'
import EditIcon from 'assests/profile/edit.svg'
import MenuIcon from 'assests/profile/menu-icon.svg'
import MessengerIcon from 'assests/profile/messenger-icon.svg'
import DiscordIcon from 'assests/profile/discord-icon.svg'
import TwitterIcon from 'assests/profile/twitter-icon.svg'

const Hero = () => {
    const walletAddress = "12345678909874rt567hcdertyun90lnnuy"

    function start_and_end(str) {
        if (str.length > 10) {
            return str.substr(0, 8) + '...' + str.substr(str.length - 4, str.length);
        }
        return str;
    }

    return (
        <div >
            <div className='relative'>
                <img src={HeroImg} alt="" />
                <div className='layout-container'>
                    <img src={EditIcon} alt="" className='w-[50px] md:w-[100px] lg:w-[136px] cursor-pointer absolute top-[65%]' />

                </div>
            </div>
            <div className='layout-container pt-10 md:pt-20 xl:pt-[107px] md:grid grid-cols-2 md:items-center xl:items-start gap-x-10 lg:gap-x-20'>
                <div className="mb-10 md:mb-0">
                    <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl xl:text-[64px] xl:leading-[74px] mb-1 md:mb-4 xl:mb-[18px]'>Bobochicago</h1>
                    <div className='bg-[#FFFFFF14] mb-[24px] w-[136px] h-[34px] flex justify-center items-center rounded-[24px] cursor-pointer' onClick={() => {
                        navigator.clipboard.writeText(walletAddress);
                        toast.success("Copy to Clipboard!")
                    }}>
                        <p className='text-white text-base leading-[18px]'>{start_and_end(walletAddress)}</p>
                    </div>
                    <p className='text-white mb-4 text-base leading-[18px]'>I am a New Zealand artist based in Wanaka.</p>
                    <p className='text-white mb-4 xl:mb-8 text-base leading-[18px]'>I love to capture the essence of a place and evoke feelings of nostalgia, romanticism and idealism.</p>

                </div>
                <div className="flex md:justify-end items-center h-full">
                    <div className='flex'>
                        <img src={MenuIcon} alt="" className='mr-2 cursor-pointer' />
                        <img src={MessengerIcon} alt="" className='mr-2 cursor-pointer' />
                        <img src={DiscordIcon} alt="" className='mr-2 cursor-pointer' />
                        <img src={TwitterIcon} alt="" className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero