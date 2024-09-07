import React from 'react'
import './Project.css';
import Hitachi from '../../Assets/Hitachi.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Project = () => {
  return (
    <>
    <div className="experience" id="Project" style={{paddingTop:210,paddingBottom:90,color:'white'}}>
        <center><h1><span style={{color:' rgba(49, 170, 226, 0.884)',fontSize:45}}>P</span>rojects</h1></center>
    </div>
    <VerticalTimeline style={{paddingTop:10}}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'black', color: '#fff'}}
            contentArrowStyle={{ borderRight: '25px solid purple' }}
            date={'Accenture'}
            iconStyle={{ background: 'purple', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <div className="accenture"style={{padding:80}}>
                <h1 style={{color:'purple',fontFamily:'poppins',fontSize:55}}>HCSC</h1>
                <p style={{fontSize:30}}><span style={{color:' rgba(49, 170, 226, 0.884)',fontSize:35}}>R</span>ole :</p>
                <ul
                    style={{
                        listStyle: 'none',
                        paddingLeft: 60,
                        paddingTop: 30
                    }}
                    className="hover-effect"
                    >
                    <li>Advanced Troubleshooting</li>
                    <li>Network Configuration and Management</li>
                    <li>Problem Resolution</li>
                    <li>Network Design and Implementation</li>
                    <li>Documentation and Reporting</li>
                    <li>Security and Compliance</li>
                    </ul>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'black', color: '#fff'}}
            contentArrowStyle={{ borderRight: '25px solid red' }}
            date={'HCL Technologies Limited'}
            iconStyle={{ background: 'red', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <div className="Hitachi"style={{padding:80}}>
                <img src={Hitachi} alt="Hitachi"  style={{width:150}}/>
                <p style={{fontSize:30}}><span style={{color:' rgba(49, 170, 226, 0.884)',fontSize:35}}>R</span>ole :</p>
                <ul
                    style={{
                        listStyle: 'none',
                        paddingLeft: 60,
                        paddingTop: 30
                    }}
                    className="hover-effect"
                    >
                    <li>Routine Maintenance</li>
                    <li>Initial Troubleshooting</li>
                    <li>Monitoring and Maintaining Network Equipment</li>
                    <li>Documentation</li>
                    <li>Escalation</li>
                    <li>User Support</li>
                    </ul>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             iconStyle={{ 
                background: 'rgb(16, 204, 82)', 
                color: '#fff', 
                paddingTop: 40, 
                // position: 'relative', 
                top: '20px' // Adjust this value as needed
              }}
            // icon={<StarIcon />}
        />
    </VerticalTimeline>
    </>
  )
}

export default Project