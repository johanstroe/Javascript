import React from 'react';

const DarkModeSwitch = ({ isDarkMode, toggleDarkMode }) => {


  return (
    <div className="flexbox darkModeSwitch">
      <li className="toggle">
        <span className="slider-text">Dark Mode</span>
        <label className="switch">
          <input type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider round"></span>
        </label>
      </li>
    </div>
  );
};


export default DarkModeSwitch;