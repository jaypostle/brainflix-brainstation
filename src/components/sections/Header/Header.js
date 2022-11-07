import React from 'react';
import BrainflixLogo from '../../../assets/logo/BrainFlix-logo.svg'
import SearchIcon from '../../../assets/icons/search.svg'
import UploadIcon from '../../../assets/icons/upload.svg'

import Avatar from '../../atoms/Avatar/Avatar';
import "./Header.scss";

function Header() {
  return (
    <header className='header'>
      <img src={BrainflixLogo} alt="Brainflix Logo" className="header__logo" />
      <div className="header-nav">
        <div className='header-nav__search'>
          {/* <img src={SearchIcon} alt="search icon" /> */}
          <input className="header-nav__input" placeholder='Search'>

          </input>
          <img className="header-nav__search-icon" src={SearchIcon} alt="search icon" />

        </div>
        <a className='primary-btn header-nav__button' href="/">
          <img src={UploadIcon} alt="upload icon" />
          Upload
          <img className="hide-me" src={UploadIcon} alt="upload icon" />
        </a>
        <div className="header-nav__avatar">
         <Avatar />
        </div>
      </div>
    </header>
  )
}

export default Header