import React from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import Home from '@/pages/home'
import Aboutus from '@/pages/aboutus'
import Services from '@/pages/services'
import Review from '@/pages/review'

const page = () => {
  return (
    <div className='min-w-[575px]'>

      <Nav/>
      <Home/>
      <Aboutus/>
      <Services/>
      <Review/>
      <Footer/>

    </div>
  )
}

export default page
