import "./ScheduledNotifications.css";

import {
    FaCalendarAlt,
    FaClock,
    FaPaperPlane
} from "react-icons/fa";

function ScheduledNotifications({

    notifications = [],

    onSendNow,

    onEdit,

    onDelete

}) {

    return (

        <div className="scheduled-notifications">

            <div className="scheduled-header">

                <h2>

                    Scheduled Notifications

                </h2>

            </div>

            {

                notifications.length === 0 ? (

                    <div className="scheduled-empty">

                        No Scheduled Notifications

                    </div>

                ) : (

                    <div className="scheduled-list">

                        {

                            notifications.map((item) => (

                                <div

                                    key={item.id}

                                    className="scheduled-card"

                                >

                                    <div className="scheduled-content">

                                        <h3>

                                            {item.title}

                                        </h3>

                                        <p>

                                            {item.message}

                                        </p>

                                        <div className="scheduled-meta">

                                            <span>

                                                <FaCalendarAlt />

                                                {item.date}

                                            </span>

                                            <span>

                                                <FaClock />

                                                {item.time}

                                            </span>

                                        </div>

                                    </div>

                                    <div className="scheduled-actions">

                                        <button

                                            className="send"

                                            onClick={() =>

                                                onSendNow(item)

                                            }

                                        >

                                            <FaPaperPlane />

                                            Send Now

                                        </button>

                                        <button

                                            className="edit"

                                            onClick={() =>

                                                onEdit(item)

                                            }

                                        >

                                            Edit

                                        </button>

                                        <button

                                            className="delete"

                                            onClick={() =>

                                                onDelete(item)

                                            }

                                        >

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default ScheduledNotifications;