import "./NotificationsWidget.css";

import { Link } from "react-router-dom";

import {

    FaBell,
    FaCheckCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaTimesCircle

} from "react-icons/fa";

const iconMap = {

    success: <FaCheckCircle />,

    warning: <FaExclamationTriangle />,

    info: <FaInfoCircle />,

    error: <FaTimesCircle />

};

const NotificationsWidget = ({ notifications = [] }) => {

    const unreadCount = notifications.filter(

        item => !item.isRead

    ).length;

    return (

        <section className="notifications-widget">

            <div className="section-top">

                <div>

                    <h2>

                        Notifications

                    </h2>

                    <span>

                        {unreadCount} Unread

                    </span>

                </div>

                <Link

                    to="/notifications"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                notifications.length === 0 ? (

                    <div className="empty-state">

                        <FaBell />

                        <h3>

                            No Notifications

                        </h3>

                        <p>

                            You're all caught up.

                        </p>

                    </div>

                ) : (

                    <div className="notification-list">

                        {

                            notifications

                            .slice(0,5)

                            .map((item)=>(

                                <div

                                    key={item._id}

                                    className={`notification-card ${!item.isRead ? "unread" : ""}`}

                                >

                                    <div

                                        className={`notification-icon ${item.type}`}

                                    >

                                        {

                                            iconMap[item.type]

                                            ||

                                            <FaBell />

                                        }

                                    </div>

                                    <div className="notification-content">

                                        <h4>

                                            {

                                                item.title

                                            }

                                        </h4>

                                        <p>

                                            {

                                                item.message

                                            }

                                        </p>

                                        <small>

                                            {

                                                new Date(item.createdAt)

                                                .toLocaleString()

                                            }

                                        </small>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

};

export default NotificationsWidget;