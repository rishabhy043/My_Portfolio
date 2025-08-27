import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGit, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer" id="Footer">
            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/rishabhyadavgolu/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.instagram.com/rishabhyadavgolu/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/rishabhy043" target="_blank" rel="noreferrer">
                    <FaGit />
                </a>
            </div>
            <p className="footer-text">
                Copyright © 2025 Rishabh yadav. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
