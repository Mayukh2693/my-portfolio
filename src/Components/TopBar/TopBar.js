import React, { useState } from 'react';
import './topbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
      <>
      <div className='topbar' id='Home'>
        <div className='topbar-placeholder'>
          <div className='row'>
            <div className='col-12 col-lg-4 topbar-left'> 
              <span>
                <h1>full-stack QA</h1>
              </span>
              <div className='hamburger-menu' onClick={() => setShowMenu(!showMenu)}>
                  <GiHamburgerMenu />
              </div>
            </div>
            <div className={`col-12 col-lg-8 ${showMenu ? 'topbar-right-small' : 'topbar-right'}`} >
              <span>
                <ul className='d-flex'>
                  <li><a href='#Home'>Home</a></li>
                  <li><a href='#Work'>Work</a></li>
                  <li><a href='#Testimonials'>Testimonials</a></li>
                  <li><a href='#Contact'>Contact</a></li>
                </ul>
              </span> 
              

            </div>

          </div>
        </div>
      </div>
      </>
  )
};

export default TopBar;
