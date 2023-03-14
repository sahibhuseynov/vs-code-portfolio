import React from 'react'
import './Home.scss'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className='home'>
      <div className="home__title">
        <motion.h1
        initial={{ x: -200}}
        animate={{ x: 0}}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        >Sahib Huseynov</motion.h1>
        <TypeAnimation
    sequence={['Frontend Web Developer.', ]}
    speed={55} 
    wrapper="h3"
  />
  <div className='home__btn__group'>
    <button className='btn2'><span>View Work</span></button>
    <button className='btn'>Contact Me</button>
  </div>
      </div>
      

    </div>
  )
}

export default Home