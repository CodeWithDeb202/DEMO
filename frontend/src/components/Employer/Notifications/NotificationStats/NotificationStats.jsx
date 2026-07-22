import "./NotificationStats.css";

import {
    FaBell,
    FaPaperPlane,
    FaClock,
    FaEnvelope
} from "react-icons/fa";

function NotificationStats({

    stats = {}

}) {

    const cards = [

        {
            title: "Total Notifications",
            value: stats.total || 0,
            icon: <FaBell />,
            color: "#2563eb"
        },

        {
            title: "Sent Today",
            value: stats.sentToday || 0,
            icon: <FaPaperPlane />,
            color: "#16a34a"
        },

        {
            title: "Scheduled",
            value: stats.scheduled || 0,
            icon: <FaClock />,
            color: "#f59e0b"
        },

        {
            title: "Unread",
            value: stats.unread || 0,
            icon: <FaEnvelope />,
            color: "#dc2626"
        }

    ];

    return (

        <div className="notification-stats">

            {

                cards.map((card, index) => (

                    <div

                        key={index}

                        className="notification-stat-card"

                    >

                        <div

                            className="notification-stat-icon"

                            style={{

                                background: card.color

                            }}

                        >

                            {card.icon}

                        </div>

                        <div className="notification-stat-info">

                            <h4>

                                {card.title}

                            </h4>

                            <h2>

                                {card.value}

                            </h2>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default NotificationStats;