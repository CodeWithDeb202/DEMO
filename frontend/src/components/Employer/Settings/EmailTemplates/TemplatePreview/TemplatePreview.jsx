import "./TemplatePreview.css";

import { useState } from "react";

import {

    FaDesktop,
    FaMobileAlt,
    FaMoon,
    FaSun,
    FaExpand,
    FaDownload

} from "react-icons/fa";

function TemplatePreview() {

    const [device, setDevice] = useState("desktop");

    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className="template-preview">

            <div className="preview-header">

                <div>

                    <h2>

                        Email Preview

                    </h2>

                    <p>

                        Preview your email before publishing.

                    </p>

                </div>

                <div className="preview-actions">

                    <button

                        className={device === "desktop" ? "active" : ""}

                        onClick={() => setDevice("desktop")}

                    >

                        <FaDesktop />

                    </button>

                    <button

                        className={device === "mobile" ? "active" : ""}

                        onClick={() => setDevice("mobile")}

                    >

                        <FaMobileAlt />

                    </button>

                    <button

                        onClick={() => setDarkMode(!darkMode)}

                    >

                        {

                            darkMode

                            ?

                            <FaSun />

                            :

                            <FaMoon />

                        }

                    </button>

                    <button>

                        <FaExpand />

                    </button>

                    <button>

                        <FaDownload />

                    </button>

                </div>

            </div>

            <div

                className={`preview-container ${device} ${darkMode ? "dark" : ""}`}

            >

                <div className="email-card">

                    <div className="email-banner">

                        <h1>

                            Tech Monster Pvt. Ltd.

                        </h1>

                    </div>

                    <div className="email-body">

                        <p>

                            Hello <strong>Debabrata</strong>,

                        </p>

                        <p>

                            Congratulations!

                        </p>

                        <p>

                            You have been shortlisted for the next interview round.

                        </p>

                        <div className="info-box">

                            <p>

                                <strong>Date :</strong> 25 July 2026

                            </p>

                            <p>

                                <strong>Time :</strong> 10:00 AM

                            </p>

                            <p>

                                <strong>Mode :</strong> Google Meet

                            </p>

                        </div>

                        <button>

                            Join Interview

                        </button>

                        <p>

                            Regards,

                            <br />

                            <strong>

                                HR Team

                            </strong>

                        </p>

                    </div>

                    <div className="email-footer">

                        © 2026 Tech Monster Pvt. Ltd.

                    </div>

                </div>

            </div>

        </div>

    );

}

export default TemplatePreview;