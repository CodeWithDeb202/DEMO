import "./ActivityTimeline.css";
import {
    FaPlusCircle,
    FaGlobe,
    FaEdit,
    FaUserPlus,
    FaCalendarCheck,
    FaFileSignature,
    FaLock
} from "react-icons/fa";

const ActivityTimeline = ({ activities = [] }) => {

    const getIcon = (type) => {

        switch (type) {

            case "created":
                return <FaPlusCircle />;

            case "published":
                return <FaGlobe />;

            case "updated":
                return <FaEdit />;

            case "application":
                return <FaUserPlus />;

            case "interview":
                return <FaCalendarCheck />;

            case "offer":
                return <FaFileSignature />;

            case "closed":
                return <FaLock />;

            default:
                return <FaPlusCircle />;

        }

    };

    return (

        <div className="activity-timeline">

            <h3>Activity Timeline</h3>

            {activities.length === 0 && (

                <div className="empty-activity">

                    No activity available.

                </div>

            )}

            {activities.map((activity, index) => (

                <div
                    key={index}
                    className="timeline-item"
                >

                    <div className="timeline-icon">

                        {getIcon(activity.type)}

                    </div>

                    <div className="timeline-content">

                        <h4>

                            {activity.title}

                        </h4>

                        <p>

                            {activity.description}

                        </p>

                        <span>

                            {new Date(
                                activity.createdAt
                            ).toLocaleString()}

                        </span>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ActivityTimeline;