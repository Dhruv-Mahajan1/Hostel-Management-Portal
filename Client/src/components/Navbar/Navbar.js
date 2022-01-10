import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar,setNavbar]=useState(false)
  const changeBackground=()=>{
    console.log(window.scrollY)
   if(window.scrollY>=50){
     setNavbar(true)
   }else{
     setNavbar(false)
   }

  }
  window.addEventListener('scroll',changeBackground)
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          LOGO
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/Students'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Students
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Photo Gallery
            
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;