// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <nav>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;