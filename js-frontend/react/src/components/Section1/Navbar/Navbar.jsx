import React from 'react'
import './Navbar.css'
import silicon from '../../../assets/images/silicon.svg';
import signinlogo from '../../../assets/images/signupicon.svg';
import DarkModeSwitch from './DarkModeSwitch'

  const Navbar= () => {
  
    
  return (
    <nav className="navbar">
      <div className="flexbox">
        <a className="navtitles" href="#"><img className="silicon" src={silicon} alt="logo icon Silicon"/><span className="silicontext">Silicon</span> </a>
        <a className="navtitles" id="Features" href="#"><span className="abo">Features</span></a>
        <a className="navtitles" href="contacts.html"><span className="abo">Contact</span></a>
      <DarkModeSwitch/>
      <button className="signinup"><img src={signinlogo} alt="sign up icon"/><a href="#">Sign in / up</a></button>
      </div>
    </nav>
   
  );
}
  

export default Navbar;
