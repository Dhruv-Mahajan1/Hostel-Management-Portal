import React from 'react';
import "./Home.css";
import AboutUs from '../../components/About Us/AboutUs';
import Carousel from '../../components/Carousel/Carousel';

import Navbar, {  } from "../../components/Navbar/Navbar";
const Home = () => {
    return (

        <div className="home-container">
            <Navbar/>
            <div className="typewriter heading">
                <h1>Welcome to  <span style={{color: 'red'}}>B1</span> hostel..!!</h1>
            </div>
            <AboutUs />
            <Carousel />
        </div>
    )
}

export default Home;