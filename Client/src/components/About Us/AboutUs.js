import React from 'react';
import "./AboutUs.css";
import hostelImg from '../../assets/hostel.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container"> 
            <div className="about-us-heading">Hello there</div> 
            <div className="about-us-block">
                <div className="about-us-image">
                    <img className="image" src={hostelImg} />
                </div>
                <div className="about-us-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                 irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                 id est laborum. Erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                 id est laborum."</div>
            </div>
            
        </div>
    )
}

export default AboutUs;
