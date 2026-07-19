import "./NotificationsWidget.css";

import {

    FaUserPlus,

    FaBuilding,

    FaBriefcase,

    FaFileAlt,

    FaExclamationTriangle,

    FaCheckCircle,

    FaTrash,

    FaEnvelopeOpen,

    FaEnvelope

} from "react-icons/fa";

const iconMap = {

    user: <FaUserPlus />,

    company: <FaBuilding />,

    internship: <FaBriefcase />,

    application: <FaFileAlt />,

    warning: <FaExclamationTriangle />,

    success: <FaCheckCircle />

};

const NotificationsWidget = ({

    notifications = [],

    onMarkRead,

    onDelete

}) => {

    return (

        <section className="notifications-widget">

            <div className="section-header">

                <h2>

                    Notifications

                </h2>

                <span className="notification-count">

                    {

                        notifications.length

                    }

                </span>

            </div>

            {

                notifications.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Notifications

                        </h3>

                        <p>

                            Everything is up to date.

                        </p>

                    </div>

                )

                :

                (

                    <div className="notification-list">

                        {

                            notifications

                            .slice(0,8)

                            .map((notification)=>(

                                <div

                                    key={notification._id}

                                    className={`notification-card ${notification.read ? "read" : "unread"}`}

                                >

                                    <div

                                        className={`notification-icon ${notification.type}`}

                                    >

                                        {

                                            iconMap[notification.type] ||

                                            <FaFileAlt />

                                        }

                                    </div>

                                    <div className="notification-content">

                                        <div className="notification-top">

                                            <h4>

                                                {

                                                    notification.title

                                                }

                                            </h4>

                                            <span

                                                className={`priority ${notification.priority?.toLowerCase()}`}

                                            >

                                                {

                                                    notification.priority

                                                }

                                            </span>

                                        </div>

                                        <p>

                                            {

                                                notification.message

                                            }

                                        </p>

                                        <small>

                                            {

                                                notification.createdAt

                                            }

                                        </small>

                                    </div>

                                    <div className="notification-actions">

                                        <button

                                            onClick={()=>

                                                onMarkRead(

                                                    notification._id

                                                )

                                            }

                                            className="mark-btn"

                                        >

                                            {

                                                notification.read

                                                ?

                                                <FaEnvelopeOpen />

                                                :

                                                <FaEnvelope />

                                            }

                                        </button>

                                        <button

                                            onClick={()=>

                                                onDelete(

                                                    notification._id

                                                )

                                            }

                                            className="delete-btn"

                                        >

                                            <FaTrash />

                                        </button>

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