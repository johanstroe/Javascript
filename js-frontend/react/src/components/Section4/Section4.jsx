import React from 'react'
import picture1 from './../../assets/images/imagewithemojis.svg'
import picture2 from './../../assets/images/contacts.svg'
import picture3 from './../../assets/images/cardicon.svg'
import picture4 from './../../assets/images/walleticon.svg'

const Section4 = () => {
  return (
    <section className="section4">

    <div className="section4grid">

      <div className="checkboxarticle">
        <ul>
          <h2 className="makeyourmoneytitle"> Make your money transfer simple and clear</h2>

          <li className="moneytextspan">
            <i className="fa-sharp fa-check checkbox"></i><span> Banking transactions are free for you</span>
          </li>

          <li className="moneytextspan">
            <i className="fa-sharp fa-check checkbox"></i><span> No monthly cash commission</span>
          </li>

          <li className="moneytextspan">
            <i className="fa-sharp fa-check checkbox"></i><span> Manage payments and transactions online</span>
          </li>

          <a id="learnmore" href="#">Learn more<i className="fa-solid fa-arrow-right"></i></a>

        </ul>
      </div>

      <div className="container3">
        <img src={picture1} alt="picture of september forecast with emojis to send money to" />
      </div>

      <div className="contactsvisa">
        <img id="img1" src={picture2} alt=""/>
      </div>

      <div className="paymentsinternational">
        <h2 id="h1text"> Recieve payments from international bank details</h2>
        <div className="cardandwallet">
          <div>
            <img src={picture3} alt=""/>
            <p className="textundericons">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>
          <div>
            <img src={picture4} alt=""/>

            <p className="textundericons">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>
        </div>
        <a id="learnmore" href="#">Learn more<i className="fa-solid fa-arrow-right"></i></a>

      </div>
    </div>
  </section>
  )
}

export default Section4