import React from 'react'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import { benefits } from '@/shared/Benefits'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const container ={
    hidden:{ opacity: 0, scale: 0.9 },
    visible:{opacity:1, scale: 1}
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
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
                className='md:my-5 md:w-3/5'>
                <HText>MORE THAN JUST A GYM</HText>
                <p className='my-5 text-xl'>
                    We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                </p>
            </motion.div>

            <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                variants= {container}
                className="md:flex items-center text-left justify-between gap-8 mt-5">
                {benefits && benefits.map((benefit: BenefitType) =>(
                    <Benefit 
                        key={benefit.id} 
                        title={benefit.title}
                        icon={benefit.icon}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                <img className='mx-auto' src={BenefitsGraphic} alt="benefits-" />
                <div>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                            <motion.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once:true, amount:0.5 }}
                                transition = {{ duration:0.5 }}
                                variants={{
                                    hidden:{opacity: 0, x: 50},
                                    visible:{opacity: 1, x: 0},
                                }}
                                className='relative'>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span></HText>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once:true, amount:0.5 }}
                        transition = {{ duration:0.5 }}
                        variants={{
                            hidden:{opacity: 0, x: 50},
                            visible:{opacity: 1, x: 0},
                        }}
                    >
                        <p className='my-5'>
                            We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                            We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                        </p>
                        <p className='mb-5'>
                            We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                            We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
                        </p>
                    </motion.div>
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton
                            setSelectedPage={setSelectedPage}
                            >
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    </section>
  )
}

export default Benefits