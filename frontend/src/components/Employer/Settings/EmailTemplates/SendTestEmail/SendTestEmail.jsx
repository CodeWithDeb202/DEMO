import "./SendTestEmail.css";

import { useState } from "react";

import {

    FaPaperPlane,
    FaEnvelope,
    FaCheckCircle,
    FaTimesCircle,
    FaHistory

} from "react-icons/fa";

function SendTestEmail() {

    const [email, setEmail] = useState("");

    const [template, setTemplate] = useState("Interview Invitation");

    const [status, setStatus] = useState("");

    const history = [

        {

            id: 1,

            email: "hr@company.com",

            template: "Interview Invitation",

            result: "Delivered",

            time: "Today • 09:15 AM"

        },

        {

            id: 2,

            email: "admin@company.com",

            template: "Offer Letter",

            result: "Delivered",

            time: "Yesterday • 05:30 PM"

        },

        {

            id: 3,

            email: "test@gmail.com",

            template: "Welcome Email",

            result: "Failed",

            time: "Yesterday • 11:40 AM"

        }

    ];

    const handleSend = () => {

        if (!email.trim()) {

            setStatus("Please enter a test email.");

            return;

        }

        setStatus("Test email sent successfully.");
    };

    return (

        <div className="send-test-email">

            <div className="test-header">

                <div>

                    <h2>

                        Send Test Email

                    </h2>

                    <p>

                        Test your email template before publishing.

                    </p>

                </div>

            </div>

            <div className="test-form">

                <div className="form-group">

                    <label>

                        Test Email Address

                    </label>

                    <div className="input-box">

                        <FaEnvelope />

                        <input

                            type="email"

                            placeholder="example@email.com"

                            value={email}

                            onChange={(e) =>

                                setEmail(e.target.value)

                            }

                        />

                    </div>

                </div>

                <div className="form-group">

                    <label>

                        Select Template

                    </label>

                    <select

                        value={template}

                        onChange={(e) =>

                            setTemplate(e.target.value)

                        }

                    >

                        <option>

                            Welcome Email

                        </option>

                        <option>

                            Interview Invitation

                        </option>

                        <option>

                            Offer Letter

                        </option>

                        <option>

                            Rejection Email

                        </option>

                        <option>

                            Certificate Issued

                        </option>

                    </select>

                </div>

                <button

                    className="send-btn"

                    onClick={handleSend}

                >

                    <FaPaperPlane />

                    Send Test Email

                </button>

            </div>

            {

                status &&

                <div className="status-message">

                    {status}

                </div>

            }

            <div className="history-section">

                <div className="history-title">

                    <FaHistory />

                    <h3>

                        Recent Test Emails

                    </h3>

                </div>

                <div className="history-list">

                    {

                        history.map((item)=>(

                            <div

                                key={item.id}

                                className="history-item"

                            >

                                <div>

                                    <h4>

                                        {item.email}

                                    </h4>

                                    <p>

                                        {item.template}

                                    </p>

                                </div>

                                <div className="history-right">

                                    <span

                                        className={

                                            item.result==="Delivered"

                                            ?

                                            "success"

                                            :

                                            "failed"

                                        }

                                    >

                                        {

                                            item.result==="Delivered"

                                            ?

                                            <FaCheckCircle/>

                                            :

                                            <FaTimesCircle/>

                                        }

                                        {item.result}

                                    </span>

                                    <small>

                                        {item.time}

                                    </small>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default SendTestEmail;