import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo" />
            <div className="navbarmenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navbarmenuicon">Home</Link>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="navbarmenuicon">Skills</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={50} duration={500} className="navbarmenuicon">Works</Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-20} duration={1000} className="navbarmenuicon">Education</Link>
            </div>
            <button className="contact" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: "smooth" })
            }}>
                <img src={contact} alt="" className="contactimg" />CONTACT
            </button>
        </div >
    )
}

export default Navbar;