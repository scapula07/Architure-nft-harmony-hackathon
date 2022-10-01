import Button from 'component/button'

// images
import HeroImg from 'assests/landingPage/hero.svg'

const Hero = () => {
    return (
        <div className='layout-container pt-5 xl:pt-[107px] md:grid grid-cols-2 md:items-center xl:items-start gap-x-10 lg:gap-x-20'>
            <div className="mb-10 md:mb-0">
                <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl xl:text-[64px] xl:leading-[74px] mb-1 md:mb-4 xl:mb-[18px]'>Collecting unique  architectural designs</h1>
                <p className='text-b3 mb-4 xl:mb-8 xl:text-xl xl:leading-[23px]'>Browse and build your collection of the world's most cutting-edge architectural designs</p>
                <Button
                    title="Discover collections"
                    className="w-[150px] xl:w-[217px] font-medium xl:text-base xl:leading-[18px] rounded-none h-10"
                />
            </div>
            <div className="flex justify-end">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero