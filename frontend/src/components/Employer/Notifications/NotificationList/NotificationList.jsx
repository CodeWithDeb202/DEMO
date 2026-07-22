import "./NotificationList.css";

import NotificationCard from "../NotificationCard";

function NotificationList({

    notifications = [],

    onView,

    onEdit,

    onDelete,

    onSchedule

}) {

    if (!notifications.length) {

        return (

            <div className="notification-empty">

                <h3>

                    No Notifications Found

                </h3>

                <p>

                    There are no notifications available.

                </p>

            </div>

        );

    }

    return (

        <div className="notification-list">

            {

                notifications.map((notification) => (

                    <NotificationCard

                        key={notification.id}

                        notification={notification}

                        onView={onView}

                        onEdit={onEdit}

                        onDelete={onDelete}

                        onSchedule={onSchedule}

                    />

                ))

            }

        </div>

    );

}

export default NotificationList;