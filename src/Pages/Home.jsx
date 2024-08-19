import React from 'react'
import NavBar from '../Components/Common/NavBar'
import HeroSection from '../Components/Home/HeroSection'

const Home = () => {
  return (
    <>
    <div className="bg-black h-100 w-100">
    <NavBar/>
    <HeroSection />
    </div>
    </>
  )
}

export default Home