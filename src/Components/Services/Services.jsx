import React from 'react'
import './Services.css';
const Services = () => {
  return (
    <div className="services-wrapper" id="Services">
        <div className="services-header">
            <center><h1>My <span>Services</span></h1></center>
        </div>
        <div className="services-cards">
            <div className="management">
                <h3>Incident Management</h3>
                <p>Refers to the process used by organizations to identify, assess, <br/>and respond to unforeseen events <br/>or disruptions that can affect their operations.</p>

                <a href="https://www.servicenow.com/products/itsm/what-is-incident-management.html" className="btn-box" target="_blank" rel="noopener noreferrer">Know More</a>
                
            </div>
            <div className="management">
                <h3>Change Management 
                </h3>
                <p>Structured approach used to guide individuals, teams, or organizations through the process of implementing the changes effectively as it focuses on managing the transition</p>
                <a href="https://whatfix.com/change-management/" className="btn-box">Know More</a>
            </div>
            <div className="management">
                <h3>ASR ROUTER Upgrade 
                </h3>
                <p>Refers to the process of updating the software or hardware of an ASR which is typically used in large enterprise for high-speed data routing, aggregation, and network security.</p>
                <a href="https://learnduty.com/network-techs/asr-1000-upgrade-process-step-to-step/" className="btn-box">Know More</a>
            </div>
            <div className="management">
                <h3>ACI SWITCH upgrade</h3>
                <p> Refers to updating the software  or hardware of switches in a Cisco Application Centric Infrastructure environment. ACI is Cisco's software-defined networking solution,</p>
                <a href="https://www.cisco.com/site/in/en/products/networking/cloud-networking/application-centric-infrastructure/index.html" className="btn-box">Know More</a>
            </div>
            <div className="management">
                <h3>LBOM/DBOM Request 
                </h3>
                <p>These are documents or lists typically used in manufacturing, supply chain, and IT-related fields to outline the components, materials,or to complete a product, service, or project.</p>
                <a href="https://docs.oracle.com/cd/E19053-01/ldoms.mgr11/820-4913-10/chapter1.html" className="btn-box" target="_blank" rel="noopener noreferrer">Know More</a>

            </div>
            <div className="management">
                <h3>Dns & Ultra dns
                </h3>
                <p>DNS is the fundamental system that translates human-readable domain names into IP addresses and UltraDNS is a premium, managed DNS service offered by Neustar </p>
                <a href="https://vercara.com/ultra-dns-public" className="btn-box">Know More</a>
            </div>
            
        </div>
    </div>
  )
}

export default Services;