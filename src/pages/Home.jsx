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
        initial={{ x: -200}}
        animate={{ x: 0}}
        transition={{ duration: 0.5, type:'spring', stiffness: 50, }}
        >Sahib Huseynov</motion.h1>
        <TypeAnimation
    sequence={['Frontend Web Developer.', ]}
    speed={35} 
    wrapper="h3"
  />
  <div className='home__btn__group'>
    <Link to='/projects'><button className='btn2'><span>View Work</span></button></Link>
   <Link to='/contact'> <button className='btn'>Contact Me</button></Link>
  </div>
      </div>
      

    </div>
  )
}

export default Home