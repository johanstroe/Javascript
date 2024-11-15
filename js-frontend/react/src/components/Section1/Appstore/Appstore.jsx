import React, { useContext } from 'react';
import DarkModeContext from '../../../DarkModeContext';
import apple from './../../../assets/images/apple-store.svg';
import google from './../../../assets/images/google-play.svg';
import darkapple from './../../../assets/images/appstore-dark.svg';
import darkgoogle from './../../../assets/images/google-play-dark.svg';

const Appstore = () => {
    const { isDarkMode } = useContext(DarkModeContext);


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

export default Appstore;
