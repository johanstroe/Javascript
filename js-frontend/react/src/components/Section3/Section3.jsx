import React from 'react'
import phones from './../../assets/images/iphone12desktop.svg'

const Section3 = () => {
  return (
    <section className="section3">

    <div className="howdoesitwork">
      <h1>How Does It Work?</h1>
    </div>

    <div className="image-container">
      <img src={phones} alt=""/>
    </div>

    <div className="textpage3">
      <h4 className="transactionhistory"> Latest transaction history</h4>
      <p className="textundertransaction">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis
        tristique quisque hac in consectetur condimentum. </p>
    </div>
  </section>
  )
}

export default Section3