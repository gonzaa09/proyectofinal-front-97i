import React from 'react'
import NavBar from '../Components/Common/NavBar'
import HeroSection from '../Components/Home/HeroSection'
import SectionInfo from '../Components/Home/SectionInfo'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection />
    <div>
    <SectionInfo />
    </div>
    </>
  )
}

export default Home