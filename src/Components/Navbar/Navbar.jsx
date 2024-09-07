import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
        <div className="Navbar-portfolio">
            <p>Portfolio.</p>
        </div>
        <ul className="nav-menu">
            <li>
            <a href="#Home"  onClick={()=>{setMenu("Home")}}>Home</a>
                {menu === "Home" ? <hr /> : null}
            </li>
            <li>
            <a href="#About"  onClick={()=>{setMenu("About")}}>About</a>
                {menu === "About" ? <hr /> : null}
            </li>
            <li>
            <a href="#Experience"  onClick={()=>{setMenu("Experience")}}>Experience</a>
                {menu === "Experience" ? <hr /> : null}
            </li>
            <li>
            <a href="#Services"  onClick={()=>{setMenu("Services")}}>Services</a>
                {menu === "Services" ? <hr /> : null}
            </li>
            <li>
            <a href="#Project"  onClick={()=>{setMenu("Project")}}>Project</a>
                {menu === "Project" ? <hr /> : null}
            </li>
            <li>
            <a href="#Achivement"  onClick={()=>{setMenu("Achivements")}}>Achivements</a>
                {menu === "Achivements" ? <hr /> : null}
            </li>
            <li>
            <a href="#Skills"  onClick={()=>{setMenu("Skills")}}>Skills</a>
                {menu === "Skills" ? <hr /> : null}
            </li>
            
            {/* <li>
            <a href="#Contact"  onClick={()=>{setMenu("Contact")}}>Contact</a>
                {menu === "Contact" ? <hr /> : null}
            </li> */}
        </ul>
    </div>
  )
};

export default Navbar;