import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    icon:JSX.Element,
    title:string,
    description:string,
    setSelectedPage: ( value: SelectedPage) => void
}

const childVariant ={
    hidden:{ opacity: 0, scale: 0.9 },
    visible:{opacity:1, scale: 1}
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{ once:true, amount:0.5 }}
        transition = {{ duration:0.5 }}
        variants={childVariant}
        className="mt-5 rounded-md border-0px-5 py-8">
        <div className="mb-4 flex justify-left">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink 
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p className='text-sm font-bold'>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit