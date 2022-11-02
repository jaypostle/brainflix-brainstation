import React from 'react';
import BrainflixLogo from '../../../assets/logo/BrainFlix-logo.svg'
import SearchIcon from '../../../assets/icons/search.svg'
import Avatar from '../../atoms/Avatar/Avatar';

function Header() {
  return (
    <header className='header'>
      <img src={BrainflixLogo} alt="Brainflix Logo" className="header__logo" />
      <div className="header__nav">
        <div className='header__nav-search'>
          <img src={SearchIcon} alt="search icon" />
          <input></input>
        </div>
        <a className='primary-btn nav__button' href="/">Upload</a>
        <Avatar />
      </div>
    </header>
  )
}

export default Header