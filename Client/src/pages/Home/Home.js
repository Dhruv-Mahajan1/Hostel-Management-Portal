import React from 'react';
import "./Home.css";
import Navbar, {  } from "../../components/Navbar/Navbar";
const Home = () => {
    return (

        <div className="home-container">
            <Navbar/>
            <div className="typewriter heading">
                <h1>Welcome to  <span style={{color: 'red'}}>B1</span> hostel..!!</h1>
            </div>
        </div>
    )
}

export default Home;