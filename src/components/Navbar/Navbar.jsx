import React from 'react'
import './Navbar.scss'
import VsCodeIcon from '../../assets/vscode_icon.svg'
const Navbar = () => {
  return (
    <section className='navbar'>
     <di className='nav__left'>
        <img src={VsCodeIcon} alt="vs code icon" />
        <div className='nav__items'>
        <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
     </di >
      <p className='nav__title'>Sahib Huseynov - Visual Studio Code</p>
      <div className='nav__right'>

      </div>
    </section>
  )
}

export default Navbar