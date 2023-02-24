import { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import Classes from '@/scenes/classes'
import Testimonials from '@/scenes/testimonials'
import ContactUs from '@/scenes/contactus'
import { SelectedPage } from '@/shared/types'
import Footer from './scenes/footer'

function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [topOfPage,setTopOfPage] = useState(true)

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if(window.scrollY !== 0) setTopOfPage(false)
    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="bg-gray-20 app">
      <Navbar
        topOfPage={topOfPage}
        selectedPage={selectedPage}   
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Classes setSelectedPage={setSelectedPage}/>
      <Testimonials setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
