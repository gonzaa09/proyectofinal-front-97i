import React from 'react'
import NavBar from '../Components/Common/NavBar'
import HeroSection from '../Components/Home/HeroSection'
import SectionInfo from '../Components/Home/SectionInfo'
import Section2 from '../Components/Home/Section2'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection />
    <div className="d-block flex-column gap-5">
    <SectionInfo />
    <Section2 />
    </div>
    </>
  )
}

export default Home