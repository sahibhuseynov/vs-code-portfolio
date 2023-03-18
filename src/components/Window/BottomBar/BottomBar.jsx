import React from 'react'
import './BottomBar.scss'
import windowsIcon2 from '../../../assets/windows/windows-logo-icon2.svg'
import windowsIcon from '../../../assets/windows/windows-10-white-icon-10.jpg'
import vsCodeIcon from '../../../assets/vscode_icon.svg'
import {BsWindows} from 'react-icons/bs'
import {VscSearch} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
const BottomBar = () => {
  return (
    <div className='bottom__bar'>
        
        <div className='bottom__bar__left'>
            <div className='windows__icon'>
                <img src={windowsIcon} alt="windows icon" />
            </div>
            <div className='search__bar'>
                <VscSearch/>
                <input type="text" placeholder='Type here to search'/>
                </div>
            <div className='icons__bar'>
                <Link to='/'>
                    <span >
                        <img src={vsCodeIcon} alt="" />
                    </span>
                </Link >
            </div>
        </div>
    </div>
  )
}

export default BottomBar