import React from 'react'
import './About.scss'
import TextTitle from './../../components/TextTitle';
import { TypeAnimation } from 'react-type-animation';
const textTitle = 'My, Myself & I'.split("")
 
const About = () => {
  return (
    <div className='about'>
     
      <div className='about__left'>
        <div className='text__title' >
            {textTitle.map(( char, index) => {
              return (
                <React.Fragment key={index}>
                  <TextTitle textcolor={'#08fdd8'} >
                    { char === " " ? "\u00A0" : char}
                    
                  </TextTitle>
                 
                </React.Fragment>
              );
            })}
          </div>
          <div className='about__title'>
            <p>I'm a Front-End Developer located in Azerbaijan. I enjoy designing user experiences and creating creative solutions.</p>
            <p>I'm a detail-oriented, problem-solving, hard-working student. My hobbies include playing chess and exploring new places.</p>
            <p>I'm interested in frontend technologies and aim to work on innovative projects with positive people. Working with such people motivates me and I strive to continuously improve myself.</p>
          </div>
      </div >
      <div className="about__right">
        
      </div>
    </div>
  )
}

export default About