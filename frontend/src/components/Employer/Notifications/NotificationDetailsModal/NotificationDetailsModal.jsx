import "./NotificationDetailsModal.css";

import { FaTimes } from "react-icons/fa";

function NotificationDetailsModal({

    open,

    notification,

    onClose

}) {

    if (!open || !notification) return null;

    return (

        <div className="notification-details-overlay">

            <div className="notification-details-modal">

                <div className="notification-details-header">

                    <h2>

                        Notification Details

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        <FaTimes />

                    </button>

                </div>

                <div className="notification-details-body">

                    <div className="detail-item">

                        <label>

                            Title

                        </label>

                        <p>

                            {notification.title}

                        </p>

                    </div>

                    <div className="detail-item">

                        <label>

                            Message

                        </label>

                        <p>

                            {notification.message}

                        </p>

                    </div>

                    <div className="detail-grid">

                        <div className="detail-item">

                            <label>

                                Type

                            </label>

                            <p>

                                {notification.type}

                            </p>

                        </div>

                        <div className="detail-item">

                            <label>

                                Audience

                            </label>

                            <p>

                                {notification.audience}

                            </p>

                        </div>

                        <div className="detail-item">

                            <label>

                                Status

                            </label>

                            <span
                                className={`status ${notification.status}`}
                            >
                                {notification.status}
                            </span>

                        </div>

                        <div className="detail-item">

                            <label>

                                Sent At

                            </label>

                            <p>

                                {notification.createdAt}

                            </p>

                        </div>

                    </div>

                </div>

                <div className="notification-details-footer">

                    <button

                        onClick={onClose}

                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

}

export default NotificationDetailsModal;