import React from 'react'
import './Terminal.scss'
import { Resizable } from 're-resizable'
import {BsThreeDots} from 'react-icons/bs'
import { FiChevronUp} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
const Terminal = () => {
  return (
    <div className='terminal__container'>
        <Resizable
  defaultSize={{
    height:200,
  }}
  style={{ borderTop:'2px solid #ffff' , padding: '10px' }}
  enable={{ top: true}}

>
  <div className="terminal__header">
    
   
        <div className="left">
            <p>PROBLEMS</p>
            <p>OUTPUT</p>
            <p>DEBUG CONSOLE</p>
            <p>TERMINAL</p>
        </div>
        <div className="right">
        <BsThreeDots size={20}/>
        <FiChevronUp size={20}/>
        <RxCross2 size={20}/>
        </div>
   
  </div>
  <div className="terminal__body">
    <div className='left'>
      <textarea name="" id="" cols="30" rows="10">
      PS C:\Users\micha\Desktop\vs-code-portfolio
      </textarea>
    </div >
    <div className="right">
      
    </div>
    </div>
</Resizable>
    </div>
  )
}

export default Terminal