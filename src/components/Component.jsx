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
            {/* Dropdown1 */}
            <li className='dropdown__item'>
              <div className='nav__link'>
                Analytics <i className='ri-arrow-down-line dropdown__arrow'></i>
              </div>
              <ul className="dropdown__menu">
                <li><a href="#" className="dropdown__link">
                  <i class="ri-pie-chart-line"></i>Overview
                </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i class="ri-arrow-up-down-fill"></i>Transactions</a></li>
                {/* Dropdown submenu */}
                <li className='dropdown__subitem'>
                  <div className="dropdown__link">
                    <i class="ri-bar-chart-line"></i>Reports <i class="ri-add-line dropdown__add"></i>
                  </div>
                  <ul className="dropdown__submenu">
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-file-line"></i>Documents</a>
                    </li>
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-cash-line"></i>Payments</a>
                    </li>
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-refund-2-line"></i>Refunds</a>
                    </li>
                  </ul>
                </li>
                <li className='dropdown__subitem'>
                  <div className="dropdown__link">
                    <i class="ri-bar-chart-line"></i>Reports <i class="ri-add-line dropdown__add"></i>
                  </div>
                  <ul className="dropdown__submenu">
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-file-line"></i>Documents</a>
                    </li>
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-cash-line"></i>Payments</a>
                    </li>
                    <li>
                      <a href="#" className="dropdown__sublink"><i class="ri-refund-2-line"></i>Refunds</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href='#' className='nav__link'>Products</a></li>
            {/* Dropdown2 */}
            <li className='dropdown__item'>
              <div className='nav__link'>
                Users <i className='ri-arrow-down-line dropdown__arrow'></i>
              </div>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <i class="ri-user-line"></i>Profiles
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i class="ri-lock-line"></i>Accounts
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i class="ri-chat-1-line"></i>
                    Messages</a></li>
              </ul>
            </li>

            <li><a href='#' className='nav__link'>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Component;
