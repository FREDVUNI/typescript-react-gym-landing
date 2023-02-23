import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid'
import { BenefitType } from './types'

export const benefits:Array<BenefitType> = [
    {
        id:1,
        icon:<HomeModernIcon className='h-6 w-6'/>,
        title:'State Of Art Facilities',
        description:'We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease.'
    },
    {
        id:2,
        icon:<UserGroupIcon className='h-6 w-6'/>,
        title:'100\'s Of Diverse Classes ',
        description:'We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease.'
    },
    {
        id:3,
        icon:<AcademicCapIcon className='h-6 w-6'/>,
        title:'Expert & Pro Trainers',
        description:'We provide world class fitness equipment, trainers and classes get you to the ultimate fitness goals with ease.'
    }

]