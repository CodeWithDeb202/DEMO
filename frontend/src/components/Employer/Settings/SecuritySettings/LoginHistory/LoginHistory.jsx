import "./LoginHistory.css";

import {

    FaCheckCircle,

    FaTimesCircle,

    FaDesktop,

    FaMobileAlt,

    FaLaptop

} from "react-icons/fa";

function LoginHistory() {

    const history = [

        {

            id: 1,

            device: "Windows PC",

            icon: <FaDesktop />,

            browser: "Chrome 139",

            location: "Bhubaneswar, India",

            ip: "192.168.1.24",

            time: "Today • 09:45 AM",

            status: "Success"

        },

        {

            id: 2,

            device: "Android Phone",

            icon: <FaMobileAlt />,

            browser: "Chrome Mobile",

            location: "Balasore, India",

            ip: "172.26.20.18",

            time: "Yesterday • 08:10 PM",

            status: "Success"

        },

        {

            id: 3,

            device: "MacBook",

            icon: <FaLaptop />,

            browser: "Safari",

            location: "Mumbai, India",

            ip: "102.45.16.32",

            time: "18 Jul • 01:15 PM",

            status: "Failed"

        }

    ];

    return (

        <div className="login-history">

            <div className="login-history-header">

                <div>

                    <h2>

                        Login History

                    </h2>

                    <p>

                        Review recent login activity for your employer account.

                    </p>

                </div>

                <button>

                    Export History

                </button>

            </div>

            <div className="history-list">

                {

                    history.map((item) => (

                        <div

                            key={item.id}

                            className="history-card"

                        >

                            <div className="history-left">

                                <div className="history-icon">

                                    {item.icon}

                                </div>

                                <div>

                                    <h3>

                                        {item.device}

                                    </h3>

                                    <p>

                                        {item.browser}

                                    </p>

                                    <small>

                                        {item.location}

                                    </small>

                                    <small>

                                        IP : {item.ip}

                                    </small>

                                </div>

                            </div>

                            <div className="history-right">

                                <span>

                                    {item.time}

                                </span>

                                <div

                                    className={`history-status ${item.status.toLowerCase()}`}

                                >

                                    {

                                        item.status === "Success"

                                            ? <FaCheckCircle />

                                            : <FaTimesCircle />

                                    }

                                    {item.status}

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default LoginHistory;