import React from 'react'
import './Home.scss'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className='home'>
      <div className="home__title">
        <motion.h1
        initial={{ x: -100}}
        animate={{ x: 0}}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        >Sahib Huseynov</motion.h1>
        
      </div>
      
<TypeAnimation
    sequence={['Frontend Web Developer.', ]}
    speed={55} 
    wrapper="h3"

    
    
  />
    </div>
  )
}

export default Home