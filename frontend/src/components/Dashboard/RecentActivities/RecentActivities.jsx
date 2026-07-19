import "./RecentActivities.css";

import { Link } from "react-router-dom";

import {
    FaBriefcase,
    FaUserEdit,
    FaCertificate,
    FaCalendarCheck,
    FaFileUpload,
    FaArrowRight
} from "react-icons/fa";

const iconMap = {
    APPLY_INTERNSHIP: <FaBriefcase />,
    PROFILE_UPDATED: <FaUserEdit />,
    CERTIFICATE_ISSUED: <FaCertificate />,
    INTERVIEW_SCHEDULED: <FaCalendarCheck />,
    RESUME_UPLOADED: <FaFileUpload />
};

const RecentActivities = ({ activities = [] }) => {

    return (

        <section className="recent-activities">

            <div className="section-top">

                <h2>

                    Recent Activities

                </h2>

                <Link
                    to="/activities"
                    className="view-all"
                >

                    View All

                </Link>

            </div>

            {

                activities.length === 0 ? (

                    <div className="empty-state">

                        <h3>

                            No Activities Found

                        </h3>

                        <p>

                            Your recent activities will appear here.

                        </p>

                    </div>

                ) : (

                    <div className="activity-list">

                        {

                            activities.slice(0, 6).map((activity) => (

                                <div

                                    key={activity._id}

                                    className="activity-item"

                                >

                                    <div className="activity-icon">

                                        {

                                            iconMap[activity.action]

                                            ||

                                            <FaBriefcase />

                                        }

                                    </div>

                                    <div className="activity-content">

                                        <h4>

                                            {activity.description}

                                        </h4>

                                        <p>

                                            {

                                                new Date(activity.createdAt)

                                                .toLocaleString()

                                            }

                                        </p>

                                    </div>

                                    <FaArrowRight
                                        className="activity-arrow"
                                    />

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

};

export default RecentActivities;