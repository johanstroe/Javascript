import React, { useContext } from 'react'
import Appstore from './Appstore/Appstore'
import Navbar from './Navbar/Navbar'
import twophones from './../../assets/images/telefoner.svg'
import discovermoreimg from './../../assets/images/discovermore.svg'
import DarkModeContext from './../../DarkModeContext'

const Section1 = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  console.log("isDarkMode in Section1:", isDarkMode);
  return (


    <section className="section1">

      <Navbar />
      <div className="container1">
        <div className="titletext">
          <h1 className="managemoney"> Manage All Your Money in One App</h1>
          <p className="weoffer"> We offer you a new generation of the mobile banking.</p>
          <p className="weoffer"> Save, spend & manage money in your pocket</p>
        </div>
        <div className="content">
          <Appstore />
          <a className="discoverstyling" href=""><img className="discovery" src={discovermoreimg} alt="a small arrow to press discover more" />Discover more

          </a>
        </div>

        <div className="herophone">
          <img className="twophones" src={twophones} alt="Two phones displaying personal economy" />
        </div>
      </div>
    </section>
  )
}
export default Section1
