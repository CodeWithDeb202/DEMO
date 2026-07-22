import "./NotificationHistory.css";

import {
    FaEnvelope,
    FaBell,
    FaMobileAlt,
    FaClock
} from "react-icons/fa";

function NotificationHistory({

    history = []

}) {

    const getIcon = (type) => {

        switch (type) {

            case "email":

                return <FaEnvelope />;

            case "push":

                return <FaBell />;

            case "sms":

                return <FaMobileAlt />;

            default:

                return <FaBell />;

        }

    };

    return (

        <div className="notification-history">

            <div className="notification-history-header">

                <h2>

                    Notification History

                </h2>

            </div>

            <div className="notification-history-list">

                {

                    history.map((item) => (

                        <div

                            key={item.id}

                            className="history-card"

                        >

                            <div className="history-icon">

                                {getIcon(item.type)}

                            </div>

                            <div className="history-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.message}

                                </p>

                                <div className="history-meta">

                                    <span>

                                        {item.type}

                                    </span>

                                    <span>

                                        {item.status}

                                    </span>

                                    <span>

                                        <FaClock />

                                        {item.sentAt}

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))

                }

                {

                    history.length === 0 && (

                        <div className="history-empty">

                            No notification history found.

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default NotificationHistory;