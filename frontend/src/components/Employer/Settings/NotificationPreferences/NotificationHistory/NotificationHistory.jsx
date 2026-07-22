import "./NotificationHistory.css";

import {

    FaBell,

    FaEnvelope,

    FaMobileAlt,

    FaDesktop,

    FaCheckCircle,

    FaTimesCircle

} from "react-icons/fa";

function NotificationHistory() {

    const history = [

        {

            id: 1,

            icon: <FaEnvelope />,

            title: "Interview Reminder",

            description: "Interview reminder email sent to HR.",

            type: "Email",

            status: "Delivered",

            time: "Today • 09:20 AM"

        },

        {

            id: 2,

            icon: <FaBell />,

            title: "New Application",

            description: "Push notification delivered successfully.",

            type: "Push",

            status: "Delivered",

            time: "Today • 08:15 AM"

        },

        {

            id: 3,

            icon: <FaMobileAlt />,

            title: "Security OTP",

            description: "OTP SMS delivered to registered mobile.",

            type: "SMS",

            status: "Delivered",

            time: "Yesterday • 07:42 PM"

        },

        {

            id: 4,

            icon: <FaDesktop />,

            title: "Offer Accepted",

            description: "In-App notification generated.",

            type: "In-App",

            status: "Delivered",

            time: "Yesterday • 05:12 PM"

        },

        {

            id: 5,

            icon: <FaEnvelope />,

            title: "Monthly Report",

            description: "Analytics report email failed.",

            type: "Email",

            status: "Failed",

            time: "18 Jul • 11:05 AM"

        }

    ];

    return (

        <div className="notification-history">

            <div className="history-header">

                <div>

                    <h2>

                        Notification History

                    </h2>

                    <p>

                        View all notifications sent from your employer dashboard.

                    </p>

                </div>

                <button>

                    Export History

                </button>

            </div>

            <div className="history-table">

                {

                    history.map((item) => (

                        <div

                            key={item.id}

                            className="history-row"

                        >

                            <div className="history-left">

                                <div className="history-icon">

                                    {item.icon}

                                </div>

                                <div>

                                    <h4>

                                        {item.title}

                                    </h4>

                                    <p>

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                            <div className="history-meta">

                                <span className="history-type">

                                    {item.type}

                                </span>

                                <span

                                    className={`history-status ${item.status.toLowerCase()}`}

                                >

                                    {

                                        item.status === "Delivered"

                                            ? <FaCheckCircle />

                                            : <FaTimesCircle />

                                    }

                                    {item.status}

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

    );

}

export default NotificationHistory;