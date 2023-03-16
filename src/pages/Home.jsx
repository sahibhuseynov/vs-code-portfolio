import React from 'react'
import './Home.scss'
import { TypeAnimation } from 'react-type-animation';import { Link } from 'react-router-dom';
import Canvas from '../components/MuseTrail/Canvas';
import TextTitle from './../components/TextTitle';

const textTitle = 'Hi,Im Sahib,\nWeb Developer.'.split("").map((char, index) => {
  return {
    char: char === " " ? "\u00A0" : char,
    key: index,
    isComma: char === ","
  };
});

const Home = () => {
  return (
    <div className='home'>
       <div className='mouse__trail'><Canvas /></div > 
      <div className="home__title">
        
       
        
        <div className='text__title'>
            
            
        {textTitle.map(({ char, key, isComma }) => {
    return (
      <React.Fragment key={key}>
        <TextTitle>{char}</TextTitle>
        {isComma && <br />}
      </React.Fragment>
    );
  })}
            
            
        </div >
        
        <TypeAnimation
    sequence={['Front End Developer / React Expert', ]}
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