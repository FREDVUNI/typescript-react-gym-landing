import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import HeroText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediaScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* main header */}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* heading */}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                            <img src={HeroText} alt="homePage" />
                        </div>
                    </div>
                    <p className='mt-8'>
                        Unrivaled Gym. Unparalled Training Fitness Classes Studios to Get the Body Shapes that you dream of ... Get Your Dream Body Now
                    </p>
                </div>
                <div className='mt-8 flex items-center gap-8'>
                    {/* actions */}
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className='text-sm font-bold text-primary-500 hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            {/* image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt="homePage" />
            </div>
        </div>
        {/* sponsors */}
        {isAboveMediaScreens &&(
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorFortune} alt="fortune1" />
                        <img src={SponsorRedBull} alt="redBull" />
                        <img src={SponsorForbes} alt="forbes" />
                        <img src={SponsorFortune} alt="fortune" />
                        <img src={SponsorRedBull} alt="redBull1" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home