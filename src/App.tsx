import { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import { SelectedPage } from '@/shared/types'

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
    </div>
  )
}

export default App
