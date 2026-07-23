import "./AuthLayout.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.png";
import authImage from "../../assets/auth/auth-image.jpg";

function AuthLayout({
    title,
    subtitle,
    children

}) {

    return (

        <div id="auth-layout">

            <img id="auth-layout-bg-img" src={authImage} alt="Auth image" />

            {/* LEFT SIDE */}


                <motion.div
                    id="auth-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                >
                    <div id="auth-left-content">

                        <Link
                            to="/"
                            id="logo"
                        >
                            <img
                                src={logo}
                                alt="Tech Monster"
                            />
                            <h2>
                                Tech <span> Monster </span>
                            </h2>
                        </Link>

                        <img
                            src={authImage}
                            id="auth-image"
                            alt="Authentication"
                        />

                        <h1>
                            Build Your Future With Us
                        </h1>

                        <p>
                            Join Tech Monster Pvt. Ltd. and start your internship journey with industry experts.
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}

                <motion.div
                    id="auth-right"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                >

                    <div id="auth-card">
                        <div id="auth-header">
                            <h2>
                                {title}
                            </h2>
                            <p>
                                {subtitle}
                            </p>

                        </div>

                        {children}

                    </div>

                </motion.div>
            

        </div>

    );

}

export default AuthLayout;