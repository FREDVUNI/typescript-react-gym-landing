import HText from '@/shared/HText'
import { ClassType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Class from './Class'
import { ourclasses } from '@/shared/Classes'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Classes = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={ () =>setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount:0.5 }}
                transition = {{ duration:0.5 }}
                variants={{
                    hidden:{opacity: 0, x: -50},
                    visible:{opacity: 1, x: 0},
                }}
            >
                <div className='md:w-3/5'>
                <HText>OUR CLASSES</HText>
                <p className='py-5 text-lg'>
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {ourclasses && ourclasses.map((item:ClassType) =>(
                        <Class key={item.id} name={item.name} description={item.description} image={item.image}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Classes