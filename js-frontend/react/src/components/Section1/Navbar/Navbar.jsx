import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import silicon from '../../../assets/images/silicon.svg';
import signinlogo from '../../../assets/images/signupicon.svg';
import DarkModeSwitch from './DarkModeSwitch'
import DarkModeContext from './../../../DarkModeContext'

  const Navbar = () => {

    const {isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  
  return (

    <nav className="navbar">
      <div className="flexbox">
        <NavLink className="navtitles" to="/"><img className="silicon" src={silicon} /><span className="silicontext">Silicon</span></NavLink>
        <NavLink className="navtitles" id="Features" to="/"><span className="contact">Features</span></NavLink>
        <NavLink className="navtitles" to ="/Contact"><span className="contact">Contact</span></NavLink>
      <DarkModeSwitch isDarkMode ={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <button className="signinup"><img src={signinlogo} alt="sign up icon"/><a href="#">Sign in / up</a></button>
      </div>
    </nav>
   
  );
}
  

export default Navbar;
