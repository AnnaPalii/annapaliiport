import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Anna Palii
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
             
            <li className='nav-item'>
            <AnchorLink href='#aboutme' className='nav-links' onClick={closeMobileMenu}>About Me</AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </AnchorLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
