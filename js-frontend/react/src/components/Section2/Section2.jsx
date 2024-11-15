import React from 'react'
import Logos from './Logos/Logos'
import phonevisa from './../../assets/images/phonevisa.svg'
import cardicon from './../../assets/images/cardicon.svg'
import shieldicon from './../../assets/images/shieldicon.svg'
import economyicon from './../../assets/images/economyicon.svg'
import supporticon from './../../assets/images/supporticon.svg'
import walleticon from './../../assets/images/walleticon.svg'
import smileyicon from './../../assets/images/smileyicon.svg'

const Section2 = () => {
  return (
    <section className="section2">
      <Logos />

      <div className="container2">
        <div className="heropage2">
          <img src={phonevisa} alt="Phone with a visa card on top" />
        </div>
        <div className="section2container">
          <div>
            <h1 className="appfeaturestitle">App Features</h1>
          </div>
          <p className="Apptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat Mollis egestas. Nam
            luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus. </p>

          <div className="gridcolumns">
            <div className="itemclass" id="item1">
              <img src={cardicon} alt="" />
              <h3 className="headlinetext">Easy Payments</h3>
              <p className="section2text"> Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>

            <div className="itemclass" id="item2">
              <img src={shieldicon} alt="picture with economy staple" />
              <h3 className="headlinetext">Data Security</h3>
              <p className="section2text">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. .</p>
            </div>

            <div className="itemclass" id="item3">
              <img src={economyicon} alt="picture of a wallet with cash" />
              <h3 className="headlinetext">Cost Statistics</h3>
              <p className="section2text"> Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>

            <div className="itemclass" id="item4">
              <img src={supporticon} alt="icon of chatsupport" />
              <h3 className="headlinetext">Support 24/7</h3>
              <p className="section2text"> A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris. </p>
            </div>

            <div className="itemclass" id="item5">
              <img src={walleticon} alt="icon of a supporticon" />
              <h3 className="headlinetext">Regular Cashback</h3>
              <p className="section2text"> Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.
              </p>
            </div>

            <div className="itemclass" id="item6">
              <img src={smileyicon} alt="icon of a smiling face" />
              <h3 className="headlinetext">Top Standards</h3>
              <p className="section2text">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolorarcu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2