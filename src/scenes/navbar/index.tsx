import {Children, useState} from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Links from './Links'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props = {
    topOfPage:boolean
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void
}

const Navbar = ({selectedPage,setSelectedPage,topOfPage}: Props) => {
    const flexBewteen = "flex items-center justify-between"
    const [toggled,setToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const scrollNavBackground = topOfPage ? "" : "bg-white drop-shadow"
  return (
    <nav>
        <div className={`${scrollNavBackground} ${flexBewteen} fixed top-0 z-30 w-full py-7`}>
            <div className={`${flexBewteen} mx-auto w-5/6`}>
                <div className={`${flexBewteen} w-full gap-16`}>
                    <img src={Logo} alt="logo" />

                    {/* right */}
                    {isAboveMediumScreens ? (
                    <div className={`${flexBewteen} w-full`}>
                        <div className={`${flexBewteen} gap-8`}>
                            <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Links page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Links page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBewteen} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Become a Member
                            </ActionButton>
                        </div>
                    </div>
                    ):(
                    <button
                        className='rounded-full bg-secondary-500 p-2'
                        onClick={() => setToggled(!toggled)}
                    >
                        <Bars3Icon className='h-6 w-6 text-white'/>
                    </button>
                    )
                    }
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && toggled &&(
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-sm">
                {/* close icon */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setToggled(!toggled)}>
                        <XMarkIcon className='h-6 w-6 text-white'/>
                    </button>
                </div>
                {/* links */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Links page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Links page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )

        }
    </nav>
  )
}

export default Navbar