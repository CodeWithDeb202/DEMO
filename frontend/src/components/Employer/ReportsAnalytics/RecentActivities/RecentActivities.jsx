import "./RecentActivities.css";

import {
    FaUserPlus,
    FaUserCheck,
    FaCalendarCheck,
    FaFileSignature,
    FaCertificate,
    FaClock
} from "react-icons/fa";

function RecentActivities({

    activities = []

}) {

    const getIcon = (type) => {

        switch (type) {

            case "application":

                return <FaUserPlus />;

            case "interview":

                return <FaCalendarCheck />;

            case "offer":

                return <FaFileSignature />;

            case "certificate":

                return <FaCertificate />;

            case "hire":

                return <FaUserCheck />;

            default:

                return <FaClock />;

        }

    };

    return (

        <div className="recent-activities">

            <div className="recent-activities-header">

                <h2>

                    Recent Activities

                </h2>

                <p>

                    Latest recruitment updates

                </p>

            </div>

            <div className="recent-activities-list">

                {

                    activities.map((activity,index)=>(

                        <div

                            key={activity.id || index}

                            className="activity-card"

                        >

                            <div className="activity-icon">

                                {getIcon(activity.type)}

                            </div>

                            <div className="activity-content">

                                <h4>

                                    {activity.title}

                                </h4>

                                <p>

                                    {activity.description}

                                </p>

                            </div>

                            <div className="activity-time">

                                {activity.time}

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default RecentActivities;