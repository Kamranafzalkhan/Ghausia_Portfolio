import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Accenture from '../../Assets/Accenture.png';
import Hcl from '../../Assets/Hcl.png';

const Experience = () => {
  return (
    <>
    <div className="experience" id="Experience" style={{paddingTop:210,paddingBottom:90,color:'white'}}>
        <center><h1><span style={{color:' rgba(49, 170, 226, 0.884)',fontSize:45}}>E</span>xperience</h1></center>
    </div>
    <VerticalTimeline style={{paddingTop:10}}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work" 
            contentStyle={{ background: 'black', color: '#fff'}}
            contentArrowStyle={{ borderRight: '25px solid purple' }}
            date={<span>8<sup>th</sup> December 2023 - present</span>}
            iconStyle={{ background: 'purple', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <div className="accenture"style={{padding:80}}>
                <img src={Accenture} alt="Accenture"  style={{width:150}}/>
                <p style={{paddingTop:30,fontSize:20}}>INFRA ARCHITECTURE </p>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'black', color: '#fff'}}
            contentArrowStyle={{ borderRight: '25px solid rgb(33, 150, 243)' }}
            date={<span>22<sup>nd</sup> March 2021 - 1<sup>st</sup> december 2023</span>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <div className="Hcl"style={{padding:80}}>
                <img src={Hcl} alt="Hcl"  style={{width:150}}/>
                <p style={{paddingTop:30,fontSize:20}}>Network Analyst</p>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'black', color: '#fff'}}
            contentArrowStyle={{ borderRight: '25px solid rgb(33, 150, 243)' }}
            date={<span>21<sup>st</sup> January 2021 - 22<sup>nd</sup>January 2021</span>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <div className="Hcl"style={{padding:80}}>
                <img src={Hcl} alt="Hcl"  style={{width:150}}/>
                <p style={{paddingTop:30,fontSize:20}}>Graduate Engineer Trainee</p>
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
};

export default Experience;