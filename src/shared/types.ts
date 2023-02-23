export enum SelectedPage {
    "Home"="home",
    "Benefits"="benefits",
    "OurClasses"="ourclasses",
    "ContactUs"="contactus",
  }

export interface BenefitType{
      id:number,
      title:string,
      icon: JSX.Element,
      description:string,
}  