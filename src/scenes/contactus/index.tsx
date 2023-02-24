import { useForm } from 'react-hook-form'
import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import React from 'react'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = 'my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500'

    const {
        register,
        trigger,
        formState:{errors}, 
    } = useForm();

    const handleSubmit = async(e:any) =>{
        const isValid = await trigger();
        if (!isValid) {
        e.preventDefault();
        } 
    }

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-20 pb-32'>
        <motion.div onViewportEnter={ () => setSelectedPage(SelectedPage.ContactUs) } 
            className='md:w-3/5'
            initial='hidden'
            whileInView='visible'
            viewport={{ once:true, amount:0.5 }}
            transition = {{ duration:0.5 }}
            variants={{
                hidden:{opacity: 0, x: -50},
                visible:{opacity: 1, x: 0},
            }}
        >
            <HText>
                <span className='text-primary-500'>JOIN NOW </span>TO GET IN SHAPE
            </HText>
            <p className='py-5 text-lg'>
                We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease. We Provide greatly true care into each and every member.
            </p>
        </motion.div>
        <div className='md:flex justify-between gap-8'>
            <motion.div className='mt-10 basis-3/5 md:mt-0'
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount:0.5 }}
                transition = {{ duration:0.5 }}
                variants={{
                    hidden:{opacity: 0, x: 50},
                    visible:{opacity: 1, x: 0},
                }}
            >
                <form target='_blank' onSubmit={handleSubmit} method='POST' action='https://formsubmit.co/4bd8feda502182879629f123549d4094'>
                    <input 
                        type="text"
                        className={inputStyles}
                        placeholder='Enter your name'
                        {...register("name",{
                            required:true,
                            maxLength:100
                        })}
                    />
                    {errors.name && (
                        <p className='mt-1 text-primary-500'>
                            {errors.name.type === 'required' && 'This field is required.'}
                            {errors.name.type === 'maxLength' && 'Maximum length is 100 characters.'}
                        </p>
                    )}
                    <input 
                        type="email"
                        className={inputStyles}
                        placeholder='Enter your email address'
                        { ...register("email",{
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email &&(
                        <p className='mt-1 text-primary-500'>
                            {errors.email.type === 'required' && 'This field is required.'}
                            {errors.email.type === 'pattern' && 'The email address is invalid.'}
                        </p>
                    )}
                    <textarea 
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder='Enter your message'
                        { ...register("message",{
                            required:true,
                            maxLength:2000,
                        })}
                    />
                    {errors.message &&(
                        <p className='mt-1 text-primary-500'>
                            {errors.message.type === 'required' && 'This field is required.'}
                            {errors.message.type === 'maxLength' && 'Maximum length is 2000 characters.'}
                        </p>
                    )}
                    <button type='submit' className='mt-5 bg-primary-500 px-20 py-3 transition duration-500 hover:text-black'>SUBMIT</button>
                </form>
            </motion.div>
            <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount:0.5 }}
                transition={{ delay:0.2, duration:0.5 }}
                variants={{
                    hidden:{ opacity:0, y:50 },
                    visible:{ opacity:1, y:0 }
                }}
                >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} alt="contact-us" />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default ContactUs