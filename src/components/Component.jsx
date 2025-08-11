import React, { useState } from 'react';

const Component = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className='header'>
      <div className='nav container'>
        <div className='nav__data'>
          <a href='#' className='nav__logo'>
            <i className='ri-planet-line'>Company</i>
          </a>

          {/* Toggle Button */}
          <div className={`nav__toogle ${menuOpen ? 'show-icon' : ''}`} onClick={toggleMenu}>
            <i className='ri-menu-line nav__burger'></i>
            <i className='ri-close-line nav__close'></i>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className='nav__list'>
            <li><a href='#' className='nav__link'>Home</a></li>
            <li><a href='#' className='nav__link'>Company</a></li>

            <li className='dropdown__item'>
              <div className='nav__link'>
                Analytics <i className='ri-arrow-down-line'></i>
              </div>
            </li>

            <li><a href='#' className='nav__link'>Products</a></li>

            <li className='dropdown__item'>
              <div className='nav__link'>
                Users <i className='ri-arrow-down-line dropdown__arrow'></i>
              </div>
            </li>

            <li><a href='#' className='nav__link'>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Component;
