import React from 'react'
import './Hero.css';
// import Ghausia from '../../Assets/Ghausia_1.png';
import '@splinetool/viewer';
//import pdf from '../Hero/Ghausia_cv.pdf';
//import pdff from '../Hero/Ghausia_cv(1).pdf';
const Hero = () => {
  return (
    <div className="hero" id="Hero">
        <div className="hero-left">
        <h2>Hello, It's Me</h2>
        <h1>Ghausia Afzal</h1>
        <h2>And I'm a <span>Network Architecture Analyst</span></h2>
        <p>I,m a Networking Analyst with extensive experience for over 4 years.<br/>Expertise is to create records in both Ultra DNS and Infobox, L2/L3 <br/>Troubleshooting and many more.......</p>
        <div className="refrels">
            <a href="https://m.facebook.com/profile.php?id=100012100906873"><i className='bx bxl-meta'></i></a>
            <a href="https://www.instagram.com/ghausiaafzal?igsh=MTRrMnpyNG5vMnk0YQ=="><i className='bx bxl-instagram' ></i></a>
            <a href="https://www.linkedin.com/in/ghausia-afzal-5b0728234/"><i className='bx bxl-linkedin' ></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1-jdqsbXGGS8HVPmVYuWtQHsgOocp5-r0/view?usp=drivesdk" className="btn-box">More About Me</a>
        </div>
        <div className="hero-right">
            <spline-viewer
          class="robot"
          url="https://prod.spline.design/9nDuBRwxuWA7FBZw/scene.splinecode"
          style={{ width: '100%', height: '1100px' }}
        ></spline-viewer>
        </div>
    </div>
  )
}

export default Hero;