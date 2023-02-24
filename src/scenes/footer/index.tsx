import React from 'react'
import Logo from '@/assets/Logo.png'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='py-12 bg-white drop-shadow'>
        <div className="justify-content mx-auto gap-16 w-5/6 md:flex">
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                </p>
                <p>&copy; EvoGym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/7 md:mt-0'>
                <h4 className="font-bold mb-5">Links</h4>
                <p className="my-3">
                    <AnchorLink
                        onClick={() => setSelectedPage(SelectedPage.Home)}
                        href={`#${SelectedPage.Home}`}
                    >
                        Home
                    </AnchorLink>
                </p>
                <p className="my-3">
                    <AnchorLink
                        onClick={() => setSelectedPage(SelectedPage.Benefits)}
                        href={`#${SelectedPage.Benefits}`}
                    >
                        Benefits
                    </AnchorLink>
                </p>
                <p className="my-3">
                    <AnchorLink
                        onClick={() => setSelectedPage(SelectedPage.OurClasses)}
                        href={`#${SelectedPage.OurClasses}`}
                    >
                        Our Classes
                    </AnchorLink>
                </p>
                <p className="my-3">
                    <AnchorLink
                        onClick={() => setSelectedPage(SelectedPage.Tsetimonials)}
                        href={`#${SelectedPage.Tsetimonials}`}
                    >
                        Testimonials
                    </AnchorLink>
                </p>
                <p className="my-3">
                    <AnchorLink
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        Contact Us
                    </AnchorLink>
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Massa orci senectus Massa orci senectus Massa orci senectus Massa orci senectus</p>
                <p className="my-5">(333)465-688-898</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer