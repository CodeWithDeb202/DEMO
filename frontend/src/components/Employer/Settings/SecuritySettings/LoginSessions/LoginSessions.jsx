import "./LoginSessions.css";

import {

    FaDesktop,

    FaMobileAlt,

    FaTabletAlt,

    FaSignOutAlt

} from "react-icons/fa";

function LoginSessions() {

    const sessions = [

        {

            id: 1,

            device: "Windows PC",

            icon: <FaDesktop />,

            browser: "Chrome 139",

            location: "Bhubaneswar, India",

            ip: "192.168.1.25",

            lastActive: "Active Now",

            current: true

        },

        {

            id: 2,

            device: "Android Phone",

            icon: <FaMobileAlt />,

            browser: "Chrome Mobile",

            location: "Balasore, India",

            ip: "172.25.45.12",

            lastActive: "2 Hours Ago",

            current: false

        },

        {

            id: 3,

            device: "iPad",

            icon: <FaTabletAlt />,

            browser: "Safari",

            location: "Cuttack, India",

            ip: "103.65.41.21",

            lastActive: "Yesterday",

            current: false

        }

    ];

    return (

        <div className="login-sessions">

            <div className="login-sessions-header">

                <div>

                    <h2>

                        Active Login Sessions

                    </h2>

                    <p>

                        Manage all devices currently logged into your employer account.

                    </p>

                </div>

                <button>

                    Logout All Devices

                </button>

            </div>

            <div className="sessions-list">

                {

                    sessions.map((session) => (

                        <div

                            key={session.id}

                            className="session-card"

                        >

                            <div className="session-left">

                                <div className="session-icon">

                                    {session.icon}

                                </div>

                                <div>

                                    <h3>

                                        {session.device}

                                        {

                                            session.current &&

                                            <span>

                                                Current

                                            </span>

                                        }

                                    </h3>

                                    <p>

                                        {session.browser}

                                    </p>

                                    <small>

                                        {session.location}

                                    </small>

                                    <small>

                                        IP : {session.ip}

                                    </small>

                                </div>

                            </div>

                            <div className="session-right">

                                <span>

                                    {

                                        session.lastActive

                                    }

                                </span>

                                {

                                    !session.current &&

                                    <button>

                                        <FaSignOutAlt />

                                        Logout

                                    </button>

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default LoginSessions;