import React from 'react'
import './About.css';
import Ghausia from '../../Assets/Ghausia_1.png';
const About = () => {
  return (
    <div className="about-wrapper" id="About">
        <div className="about-left">
            <img src={Ghausia} alt="ghausia" />
        </div>
        <div className="about-right">
            <h1>
              About <span>me</span>
            </h1>
            <h2>
              Networking Analyst
            </h2>
            <p>I am a skilled Networking Analyst with over 3 years of exprience in the industry. My passion lies in <br/>creating capturing networking architecture and implementing them through networking tools. I take <br/> pride in staying up-to-date with current networking trends.Throught my career, I have devloped a <br/>deep understanding of networking concepts. When a starting a new project I thoroughly research <br/>and analyze the given problem statement and the client specific requirements. </p>
        </div>
    </div>
  )
}

export default About;