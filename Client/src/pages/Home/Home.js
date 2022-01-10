import React from 'react';
import "./Home.css";
import AboutUs from '../../components/About Us/AboutUs';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home">
                <div className="typewriter">
                    <h1>Welcome to  <span style={{color: 'red'}}>B1</span> hostel..!!</h1>
                </div>
            </div>
            <AboutUs />
            <Carousel />
        </div>
    )
}

export default Home;
