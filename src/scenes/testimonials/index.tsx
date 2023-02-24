import { SelectedPage, testimonialType } from '@/shared/types'
import {motion} from 'framer-motion'
import HText from '@/shared/HText'
import Testimonial from './Testimonial'
import { testimonials } from '@/shared/Testimonials'

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Testimonials = ({setSelectedPage}: Props) => {
  return (
    <section id='testimonials' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            className=''
        >
            <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount:0.5 }}
                transition = {{ duration:0.5 }}
                variants={{
                    hidden:{opacity: 0, x: -50},
                    visible:{opacity: 1, x: 0},
                }}
                className='md:my-5 md:w-4/5'>
                <HText>TESTIMONIALS</HText>
                <p className='my-5 text-lg'>
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                </p>
            </motion.div>
            <div className='mt-16 items-center text-center justify-between gap-20 md:mt-28 md:flex'>
                <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                    {testimonials && testimonials.map((item:testimonialType) =>(
                        <Testimonial 
                            key={item.id} 
                            title={item.title}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Testimonials