import React from 'react'
import Hero from './components/Hero'
import Courses from './components/Courses'

const Home = () => {
  return (
    <div>
      <Hero/>
      <section className='courses bg-[#f9f9f9] py-[40px] '>
        <Courses/>
      </section>
      
    </div>
  )
}

export default Home
