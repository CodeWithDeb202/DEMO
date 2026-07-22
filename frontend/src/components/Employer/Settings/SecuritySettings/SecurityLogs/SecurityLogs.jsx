import "./SecurityLogs.css";

import {

    FaShieldAlt,

    FaLock,

    FaUserShield,

    FaKey,

    FaDownload

} from "react-icons/fa";

function SecurityLogs() {

    const logs = [

        {

            id: 1,

            icon: <FaLock />,

            title: "Password Changed",

            description: "Employer password updated successfully.",

            time: "Today • 10:45 AM",

            level: "success"

        },

        {

            id: 2,

            icon: <FaUserShield />,

            title: "2FA Enabled",

            description: "Two-Factor Authentication enabled.",

            time: "Yesterday • 06:20 PM",

            level: "info"

        },

        {

            id: 3,

            icon: <FaKey />,

            title: "API Key Generated",

            description: "New API key created for integration.",

            time: "18 Jul • 11:15 AM",

            level: "warning"

        },

        {

            id: 4,

            icon: <FaShieldAlt />,

            title: "Failed Login Attempt",

            description: "Multiple failed login attempts detected.",

            time: "17 Jul • 02:10 PM",

            level: "danger"

        }

    ];

    return (

        <div className="security-logs">

            <div className="security-logs-header">

                <div>

                    <h2>

                        Security Logs

                    </h2>

                    <p>

                        View all important security-related activities.

                    </p>

                </div>

                <button>

                    <FaDownload />

                    Export Logs

                </button>

            </div>

            <div className="logs-list">

                {

                    logs.map((log) => (

                        <div

                            key={log.id}

                            className="log-card"

                        >

                            <div

                                className={`log-icon ${log.level}`}

                            >

                                {log.icon}

                            </div>

                            <div className="log-content">

                                <h3>

                                    {log.title}

                                </h3>

                                <p>

                                    {log.description}

                                </p>

                            </div>

                            <span className="log-time">

                                {log.time}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default SecurityLogs;