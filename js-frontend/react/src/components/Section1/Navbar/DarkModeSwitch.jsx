import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleDarkMode = () => {
     const newTheme = !isDarkMode;
     setIsDarkMode(newTheme)

     if (newTheme) {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark')

     }   
     
     else { document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light')
        
     }

     console.log(document.documentElement.getAttribute('theme'));
    }

    useEffect (() => {
      
        const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
            document.documentElement.setAttribute('theme', 'dark')
            setIsDarkMode(true)
            
            }

            else { document.documentElement.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false);
            console.log('Setting lightmode');
        }


    }, [])

    return (
        <div className="flexbox darkModeSwitch">
        <li className="toggle"><span className="slider-text">Dark Mode</span>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} /> 
            <span className="slider round"></span>
          </label>
        </li>
        
        </div>
    );
};


export default DarkModeSwitch;