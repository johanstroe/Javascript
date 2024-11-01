import React from 'react'
import logo1 from './../../../assets/images/ipsum1.svg'
import logo2 from './../../../assets/images/ipsum2.svg'
import logo3 from './../../../assets/images/ipsum3.svg'
import logo4 from './../../../assets/images/ipsum4.svg'
import logo5 from './../../../assets/images/ipsum5.svg'
import logo6 from './../../../assets/images/ipsum6.svg'

const Logos = () => {

  return (
    <div className="cardstyles">

      <div className="card">
      
        <img className="lightmode" src={logo1} alt="Logo1" />

      </div>

      <div className="card">

        <img className="lightmode" src={logo2} alt="Logo2" />
       
      </div>

      <div className="card">

        <img className="lightmode" src={logo3} alt="Logo3" />
      
      </div>

      <div className="card">

        <img className="lightmode" src={logo4} alt="Logo4" />
        
      </div>

      <div className="card">

        <img className="lightmode" src={logo5} alt="Logo5" />
        
      </div>

      <div className="card">

        <img className="lightmode" src={logo6} alt="Logo6" />
        
      </div>
    </div>
  )
}

export default Logos