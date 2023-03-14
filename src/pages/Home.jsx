import React from 'react'
import './Home.scss'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <div className="home__title">
        <motion.h1
        initial={{ x: -300}}
        animate={{ x: 0}}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        >Sahib Huseynov</motion.h1>
        <TypeAnimation
    sequence={['Frontend Web Developer.', ]}
    speed={35} 
    wrapper="h3"
  />
  <div className='home__btn__group'>
    <button className='btn2'><span>View Work</span></button>
   <Link to='/contact'> <button className='btn'>Contact Me</button></Link>
  </div>
      </div>
      

    </div>
  )
}

export default Home