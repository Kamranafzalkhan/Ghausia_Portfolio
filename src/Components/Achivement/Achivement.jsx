import React from 'react';
import Aapi_certificate from '../../Assets/Aapi_certificate.jpg';
import Ace_Award from '../../Assets/Ace_Award.jpg';
import './Achivement.css';
const Achivement = () => {
  return (
    <div className="achivement-wrapper" id="Achivement">
        <center><h1><span>My</span> Achivement</h1></center>
        <div className="achivement-body">
            <p>I got the <span><a href={Ace_Award}>" The Extra Mile Award "</a></span> from Accenture</p>
            <a href={Aapi_certificate} className="btn-box">Click Me</a>
        </div>
    </div>
  )
}

export default Achivement;