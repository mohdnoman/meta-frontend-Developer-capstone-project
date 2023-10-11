import React from "react";
import logo from '../images/Logo .svg'


const Footer = () => {
    return (
        <Footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are family owned Mediterraneran restraurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br>123 Towncity, USA</br></li>
                        <li>Phone: <br>++ 0123 456 789</br></li>
                        <li>Email: <br> little@lemon.com</br></li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </Footer>
    );
};

export default Footer;