/**
 * ============================================================
 * File Name : Footer.jsx
 *
 * Purpose:
 * Animated futuristic website footer
 *
 * ============================================================
 */


import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";


import logoImg from "../../assets/logo/logo.png"


function Footer(){


    return (

        <footer id="footer">


            <div id="footer-container">


                {/* Brand Section */}
                <div id="footer-brand">


                    <h2>
                        Tech <span>Monster</span>
                    </h2>


                    <p>
                        Building future developers through
                        real-world projects, mentorship
                        and internship programs.
                    </p>


                    <div id="social">


                        <a>
                            <FaGithub/>
                        </a>


                        <a>
                            <FaLinkedin/>
                        </a>


                        <a>
                            <FaTwitter/>
                        </a>


                        <a>
                            <FaInstagram/>
                        </a>


                    </div>


                </div>




                {/* Links */}
                <div id="footer-links">


                    <h3>
                        Platform
                    </h3>


                    <a>
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#contact">
                        Contact
                    </a>
                </div>

                {/* Newsletter */}

                <div id="footer-news">


                    <h3>
                        Join Us
                    </h3>


                    <p>
                        Get internship updates
                    </p>

                    <div id="footer-signup">
                        <Link to={'/signup'}>Sign Up</Link>
                    </div>



                </div>


                <div id="logo" style={{marginLeft: "5rem"}}>
                    <img src={logoImg} alt="" />
                </div>

            </div>




            <div id="footer-bottom">


                <p>
                    © 2026 Tech Monster.
                    All Rights Reserved.
                </p>


                <p>
                    Code. Secure. Solve.
                </p>


            </div>



        </footer>

    )
}



export default Footer;