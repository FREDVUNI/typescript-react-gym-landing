import { SelectedPage } from '@/shared/types'
import React from 'react'

type Props = {
    name:string,
    description?:string,
    image:string,    
}

const Class = ({name,description,image}: Props) => {
    const OverlayStyles = `p-5 absolute z-3 flex h-[340px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 cursor-pointer`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
        <div className={OverlayStyles}>
            <p className='font-bold text-xl'>{name}</p>
            <p className='mt-5'>{description}</p>
        </div>
        <img src={image} alt="our-classes" />
    </li>
  )
}

export default Class