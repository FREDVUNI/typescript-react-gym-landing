export enum SelectedPage {
    "Home"="home",
    "Benefits"="benefits",
    "OurClasses"="ourclasses",
    "ContactUs"="contactus",
    "Testimonials"="testimonials",
  }

export interface BenefitType{
    id:number,
    title:string,
    icon: JSX.Element,
    description:string,
}  

export interface ClassType{
    id:number,
    name:string,
    description?:string,
    image:string
}

export interface testimonialType{
    id:number,
    name:string,
    image:string,
    title?:string
    description:string,
}