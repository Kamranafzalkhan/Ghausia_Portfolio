import React from 'react'
import './Hero.css';
import Ghausia from '../../Assets/Ghausia_1.png';
import pdf from '../Hero/Ghausia_cv.pdf';
const Hero = () => {
  return (
    <div className="hero" id="Hero">
        <div className="hero-left">
        <h2>Hello, It's Me</h2>
        <h1>Ghausia Afzal</h1>
        <h2>And I'm a <span>Networking Analyst</span></h2>
        <p>I,m a Networking Analyst with extensive experience for over 3 years.<br/>Expertise is to create records in both Ultra DNS and Infobox, L2/L3 <br/>Troubleshooting and many more.......</p>
        <div className="refrels">
            <a href="https://m.facebook.com/profile.php?id=100012100906873"><i className='bx bxl-meta'></i></a>
            <a href="https://www.instagram.com/ghausiaafzal?igsh=MTRrMnpyNG5vMnk0YQ=="><i className='bx bxl-instagram' ></i></a>
            <a href="https://www.linkedin.com/in/ghausia-afzal-5b0728234/"><i className='bx bxl-linkedin' ></i></a>
        </div>
        <a href={pdf} className="btn-box">More About Me</a>
        </div>
        <div className="hero-right">
            <img src={Ghausia} alt="ghausia" />
        </div>
    </div>
  )
}

export default Hero;