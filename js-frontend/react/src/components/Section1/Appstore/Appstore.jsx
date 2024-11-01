import React from 'react'
import apple from './../../../assets/images/apple.svg'
import google from './../../../assets/images/google.svg'
import darkapple from './../../../assets/images/darkappstore.svg'
import darkgoogle from './../../../assets/images/darkgoogleplay.svg'

const Appstore = ({ isDarkMode }) => {
    

    return (
        
        <div className="appandgoogleplay">
 
 {isDarkMode ? (
                <>
                    <a href="#">
                        <img
                            className="appstore"
                            src={darkapple}
                            alt="button to apple store in dark mode"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="appstore"
                            src={darkgoogle}
                            alt="button to google play in dark mode"
                        />
                    </a>
                </>
            ) : (
                <>
                    <a href="#">
                        <img
                            className="appstore"
                            src={apple}
                            alt="button to apple store"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="appstore"
                            src={google}
                            alt="button to google play"
                        />
                    </a>
                </>
            )}
                
         
    </div>
        
            );
        };
            export default Appstore