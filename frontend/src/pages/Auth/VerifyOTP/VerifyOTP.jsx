import "./VerifyOTP.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../../layouts/AuthLayout";

import OTPInput from "../../../components/common/Form/OTPInput";
import Button from "../../../components/common/Form/Button";

import { verifyOtp, resendOtp } from "../../../services/api/authService";

function VerifyOTP() {

    const navigate = useNavigate();

    const location = useLocation();

    const email = location.state?.email;

    const purpose = location.state?.purpose;

    const [otp, setOtp] = useState("");

    const [timer, setTimer] = useState(60);

    const [loading, setLoading] = useState(false);

    const [resending, setResending] = useState(false);

    const [error, setError] = useState("");

    /* -------------------------------- */

    useEffect(() => {

        if (!email) {

            navigate("/forgot-password", {

                replace: true

            });

        }

    }, [email, navigate]);

    /* -------------------------------- */

    useEffect(() => {

        if (timer === 0) return;

        const interval = setInterval(() => {

            setTimer((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(interval);

    }, [timer]);

    /* -------------------------------- */

    const handleVerify = async () => {

        if (otp.length !== 6) {

            return setError("Please enter a valid OTP.");

        }

        try {

            setLoading(true);

            setError("");

            await verifyOtp({

                email,

                otp,

                purpose

            });

            navigate("/reset-password", {

                state: {

                    email

                }

            });

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Invalid OTP."

            );

        }

        finally {

            setLoading(false);

        }

    };

    /* ------------------------ */
    
    useEffect(() => {

        if (otp.length === 6) {

            handleVerify();

        }

    }, [otp]);

    /* -------------------------------- */

    const handleResend = async () => {

        try {

            setResending(true);

            await resendOtp({

                email,

                purpose

            });

            setTimer(60);

        }

        finally {

            setResending(false);

        }

    };

    return (

        <AuthLayout

            title="Verify OTP"

            subtitle="Enter the OTP sent to your email."

        >

            <motion.div

                className="verify-container"

                initial={{

                    opacity: 0,

                    y: 30

                }}

                animate={{

                    opacity: 1,

                    y: 0

                }}

            >

                <OTPInput

                    length={6}

                    value={otp}

                    onChange={setOtp}

                />

                {

                    error &&

                    <p className="otp-error">

                        {error}

                    </p>

                }

                <Button

                    fullWidth

                    onClick={handleVerify}

                    disabled={loading}

                >

                    {

                        loading

                            ?

                            "Verifying..."

                            :

                            "Verify OTP"

                    }

                </Button>

                <div className="otp-footer">

                    {

                        timer > 0

                            ?

                            <p>

                                Resend OTP in

                                <span>

                                    {timer}s

                                </span>

                            </p>

                            :

                            <button

                                onClick={handleResend}

                                disabled={resending}

                            >

                                {

                                    resending

                                        ?

                                        "Sending..."

                                        :

                                        "Resend OTP"

                                }

                            </button>

                    }

                </div>

                <Link

                    to="/login"

                    className="back-login"

                >

                    Back to Login

                </Link>

            </motion.div>

        </AuthLayout>

    );

}

export default VerifyOTP;