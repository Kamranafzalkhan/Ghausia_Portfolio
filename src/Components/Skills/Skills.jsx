import React from 'react'
import './Skills.css';
function Skills() {
  return (
    <div className="skill-wrapper" id="Skills">
        <center><h1>My <span>Skills</span></h1></center>
        <div className="skill-section">
            <div className="skill-left">
                <h1><span>Tech</span> Skills</h1>
                <ul className="tech">
                    <li>L2/L3 Troubleshooting</li>
                    <li>Escalations and P2-P1 Ticket Handling</li>
                    <li>Network Testing</li>
                    <li>F5 Changes</li>
                    <li>Aruba Controller</li>
                    <li>APIC controller</li>
                    <li>Devices upgrade (Router , switched LB)</li>
                    <li>ServiceNow</li>
                    <li>Solarwind</li>
                    <li>RCA preparation and delivery within TAT</li>
                    <li>Handling the service fault</li>
                    <li>Infobox for DNS</li>
                    <li>Ultra DNS</li>
                    <li>MS Excel</li>
                    <li>MS Word</li>
                    <li>MS Visio</li>
                </ul>
            </div>
            <div className="skill-right">
                <h1><span>Professional</span> Skills</h1>
                <ul className="professional">
                    <li>Problem Solving</li>
                    <li>Team Work</li>
                    <li>Adaptive</li>
                    <li>Communication</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills