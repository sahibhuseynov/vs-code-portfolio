import React from 'react'
import './Window.scss'
import BottomBar from '../../components/Window/BottomBar/BottomBar'
import Windows from '../../assets/windows/windows-screen-image.webp'

const Window = () => {
  return (
    <div className='window__screen'>
        <img src={Windows} alt="" />
        <BottomBar />
    </div>
  )
}

export default Window