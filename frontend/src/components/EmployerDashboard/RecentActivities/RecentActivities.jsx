import "./RecentActivities.css";

import { Link } from "react-router-dom";

import {

    FaBriefcase,
    FaClipboardCheck,
    FaUserCheck,
    FaCalendarCheck,
    FaBuilding,
    FaBell,
    FaArrowRight

} from "react-icons/fa";

const iconMap = {

    internship: <FaBriefcase />,

    application: <FaClipboardCheck />,

    hiring: <FaUserCheck />,

    interview: <FaCalendarCheck />,

    company: <FaBuilding />,

    notification: <FaBell />

};

const RecentActivities = ({ activities = [] }) => {

    return (

        <section className="recent-activities">

            <div className="section-header">

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

                activities.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Recent Activities

                        </h3>

                        <p>

                            Your latest activities will appear here.

                        </p>

                    </div>

                )

                :

                (

                    <div className="activities-list">

                        {

                            activities

                            .slice(0,6)

                            .map((activity)=>(

                                <div

                                    key={activity._id}

                                    className="activity-card"

                                >

                                    <div className="activity-icon">

                                        {

                                            iconMap[activity.type] ||

                                            <FaBell />

                                        }

                                    </div>

                                    <div className="activity-content">

                                        <h4>

                                            {

                                                activity.title

                                            }

                                        </h4>

                                        <p>

                                            {

                                                activity.description

                                            }

                                        </p>

                                        <small>

                                            {

                                                new Date(

                                                    activity.createdAt

                                                ).toLocaleString()

                                            }

                                        </small>

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