import {useState} from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'

type Props = {}

const Navbar = (props: Props) => {

    const flexBewteen = "flex items-center justify-between"
  return (
    <nav>
        <div className={`${flexBewteen} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBewteen} mx-auto w-5/6`}>
                <div className={`${flexBewteen} w-full gap-16`}>
                    <img src={Logo} alt="logo" />

                    {/* right */}
                    <div className={`${flexBewteen} w-full`}>
                        <div className={`${flexBewteen} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Classes</p>
                            <p>Contact Us</p>
                        </div>
                        <div>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar