import React from 'react';
import BrainflixLogo from '../../../assets/logo/BrainFlix-logo.svg'
import SearchIcon from '../../../assets/icons/search.svg'
import UploadIcon from '../../../assets/icons/upload.svg'

import Avatar from '../../atoms/Avatar/Avatar';
import "./Header.scss";

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={BrainflixLogo} alt="Brainflix Logo" className="header__logo" />
      </Link>
      <div className="header-nav">
        <div className='header-nav__search'>
          {/* <img src={SearchIcon} alt="search icon" /> */}
          <input className="header-nav__input" placeholder='Search'>

          </input>
          <img className="header-nav__search-icon" src={SearchIcon} alt="search icon" />

        </div>
        <Link to='/upload' className='primary-btn header-nav__button'>
          {/* <a className='primary-btn header-nav__button' href="/"> */}
            <img src={UploadIcon} alt="upload icon" />
            Upload
            <img className="hide-me" src={UploadIcon} alt="upload icon" />
          {/* </a> */}
        </Link>
        <div className="header-nav__avatar">
         <Avatar />
        </div>
      </div>
    </header>
  )
}

export default Header