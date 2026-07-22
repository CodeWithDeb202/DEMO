import "./NotificationStats.css";

import {

    FaEnvelope,

    FaBell,

    FaMobileAlt,

    FaCheckCircle

} from "react-icons/fa";

function NotificationStats() {

    const stats = [

        {

            id: 1,

            title: "Email Alerts",

            value: "28",

            icon: <FaEnvelope />,

            color: "#2563eb"

        },

        {

            id: 2,

            title: "Push Notifications",

            value: "16",

            icon: <FaBell />,

            color: "#7c3aed"

        },

        {

            id: 3,

            title: "SMS Alerts",

            value: "4",

            icon: <FaMobileAlt />,

            color: "#f59e0b"

        },

        {

            id: 4,

            title: "Delivered Today",

            value: "48",

            icon: <FaCheckCircle />,

            color: "#16a34a"

        }

    ];

    return (

        <div className="notification-stats">

            {

                stats.map((item) => (

                    <div

                        key={item.id}

                        className="notification-stat-card"

                    >

                        <div

                            className="notification-stat-icon"

                            style={{

                                background: `${item.color}20`,

                                color: item.color

                            }}

                        >

                            {item.icon}

                        </div>

                        <div className="notification-stat-content">

                            <h3>

                                {item.value}

                            </h3>

                            <p>

                                {item.title}

                            </p>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default NotificationStats;