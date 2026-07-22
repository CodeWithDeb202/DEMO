import "./NotificationCard.css";

import {
    FaEnvelope,
    FaBell,
    FaMobileAlt,
    FaClock,
    FaCheckCircle
} from "react-icons/fa";

import NotificationActionMenu from "../NotificationActionMenu";

function NotificationCard({

    notification,

    onView,

    onEdit,

    onDelete,

    onSchedule

}) {

    const getIcon = () => {

        switch (notification.type) {

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

    const getStatusClass = () => {

        switch (notification.status) {

            case "sent":

                return "success";

            case "scheduled":

                return "warning";

            case "draft":

                return "draft";

            default:

                return "";

        }

    };

    return (

        <div className="notification-card">

            <div className="notification-card-top">

                <div className="notification-card-icon">

                    {getIcon()}

                </div>

                <NotificationActionMenu

                    notification={notification}

                    onView={onView}

                    onEdit={onEdit}

                    onDelete={onDelete}

                    onSchedule={onSchedule}

                />

            </div>

            <div className="notification-card-body">

                <h3>

                    {notification.title}

                </h3>

                <p>

                    {notification.message}

                </p>

            </div>

            <div className="notification-card-footer">

                <span
                    className={`status ${getStatusClass()}`}
                >

                    <FaCheckCircle />

                    {notification.status}

                </span>

                <span>

                    <FaClock />

                    {notification.createdAt}

                </span>

            </div>

        </div>

    );

}

export default NotificationCard;