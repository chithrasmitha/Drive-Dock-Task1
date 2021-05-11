import React from 'react';
import './Footer.css';
import img2 from '../assets/images/connect.jpg';

function Footer(){
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <div className="col">
            <h3>About:</h3>
            <nav>
            <ul className="list-unstyled">
              <li>Contact-Us</li>
              <li>About-Us</li>
              <li>Careers</li>
              <li>Flipkart-stories</li>
              <li>Press</li>
            </ul>
            </nav>
          </div>
          {/*column2*/}
          <div className="col">
            <h3>Help:</h3>
            <nav>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation and returns</li>
              <li>FAQ</li>
              <li>Report infringern</li>
            </ul>
            </nav>
          </div>
          {/*column3*/}
          <div className="col">
            <h3>Bikzparts:</h3>
            <nav>
            <ul className="list-unstyled">
              <li>Every product through our platform is whole sale price only</li>
              <li>All products are genuine and with product number</li>
            </ul>
            </nav>
          </div>
          {/*column4*/}
          <div className="col">
            <h3>Registered Office:</h3>
            <nav>
            <ul className="list-unstyled">
              <li>BikzParts,</li>
              <li>Building Alyssa,Boyonic & clove Embassy Tech village,</li>
              <li>Outer Ring Road,Devarabesanahalli village,</li>
              <li>Bengaluru,560103,</li>
              <li>Karnataka,India</li>
            </ul>
            </nav>
          </div>
          {/*column5*/}
          <div className="col">
            <h3>Connect withus:</h3>
            <nav>
            <ul className="list-unstyled">
            <li><button><img className="connect" src={img2} alt="" /></button></li>
            <li></li>
            </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">All Copyrights Reserved to BikzParts</p>
        </div>
      </div>
     
    </div>
  )
}

export default Footer;