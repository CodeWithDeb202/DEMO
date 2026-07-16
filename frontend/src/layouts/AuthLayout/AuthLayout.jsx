import "./AuthLayout.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.png";
import authImage from "../../assets/auth/auth-image.png";

function AuthLayout({
    title,
    subtitle,
    children
    
}) {

    return (

        <div className="auth-layout">

            {/* LEFT SIDE */}

            <motion.div

                className="auth-left"

                initial={{ opacity: 0, x: -80 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: .8 }}

            >

                <div className="overlay"></div>

                <div className="auth-left-content">

                    <Link

                        to="/"

                        className="logo"

                    >

                        <img

                            src={logo}

                            alt="Tech Monster"

                        />

                        <h2>

                            Tech Monster

                        </h2>

                    </Link>

                    <img

                        src={authImage}

                        className="auth-image"

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

                className="auth-right"

                initial={{ opacity: 0, x: 80 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: .8 }}

            >

                <div className="auth-card">

                    <div className="auth-header">

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