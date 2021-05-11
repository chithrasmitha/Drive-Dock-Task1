
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";
import img1 from '../assets/images/bike.jpg';
import {Link} from 'react-router-dom';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width:1500, itemsToShow: 5},
];

function Home() {
  const navStyle={
    color:'white'
  }
  return (
    <div>
      <div className="image">
        <ul className="belownav">
          <li >Best Deal</li>
          <li><h2>15% - 20% Off</h2></li>
          <li><p>This is going to be very limited offer</p></li>
        
        <li><h2>Buy Now</h2></li>
      
        </ul>
        <ul>
        <img  src={img1} alt="" />
        </ul>
      </div>



      <h4>Shop by Category:</h4>
    <>
      <div className="home">
        <Carousel breakPoints={breakPoints}>
          <Item>Lubricants</Item>
          <Item>Carburators</Item>
          <Item>Batteries</Item>
          <Item>Self-Motor</Item>
          <Item>Motor-Components</Item>
          <Item>Control Cables</Item>
        </Carousel>
      </div>

    </>
    <h4>Size-Chart & Part-No:</h4>
    <>
      
      <div className="home">
        <Carousel breakPoints={breakPoints}>
          <Item>Bearing-Size</Item>
          <Item>Tyre Size</Item>
          <Item>Chain Size</Item>
          <Item>Wiring Kit</Item>
          <Item>Spark Plug</Item>
          <Item>Size chart</Item>
        </Carousel>
      </div>

    </>
    <h4>Fancy-Items for Bike:</h4>
    <>
      
      <div className="home">
        <Carousel breakPoints={breakPoints}>
          <Item>LED Bulbs</Item>
          <Item>Grip Covers</Item>
          <Item>Horns</Item>
          <Item>Side-Bags</Item>
          <Item>Side-Signals</Item>
          <Item>Seat-Cover</Item>
        </Carousel>
      </div>

    </>
    <h3 >Chat with us and know specifications instantly</h3>
    <h3 >WhatsApp</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);

export default Home;

