import "./RecentActivities.css";

import {

    FaUserPlus,

    FaBuilding,

    FaBriefcase,

    FaClipboardCheck,

    FaBan,

    FaSignInAlt,

    FaHistory

} from "react-icons/fa";

const iconMap = {

    user: <FaUserPlus />,

    company: <FaBuilding />,

    internship: <FaBriefcase />,

    application: <FaClipboardCheck />,

    blocked: <FaBan />,

    login: <FaSignInAlt />

};

const RecentActivities = ({

    activities = []

}) => {

    return (

        <section className="recent-activities">

            <div className="section-header">

                <h2>

                    <FaHistory />

                    Recent Activities

                </h2>

            </div>

            {

                activities.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Activities

                        </h3>

                        <p>

                            Recent admin activities will appear here.

                        </p>

                    </div>

                )

                :

                (

                    <div className="activity-timeline">

                        {

                            activities

                            .slice(0,15)

                            .map((activity,index)=>(

                                <div

                                    key={activity._id || index}

                                    className="activity-item"

                                >

                                    <div

                                        className={`activity-icon ${activity.type}`}

                                    >

                                        {

                                            iconMap[activity.type] ||

                                            <FaHistory />

                                        }

                                    </div>

                                    <div className="activity-content">

                                        <div className="activity-top">

                                            <h4>

                                                {

                                                    activity.title

                                                }

                                            </h4>

                                            <span>

                                                {

                                                    activity.time

                                                }

                                            </span>

                                        </div>

                                        <p>

                                            {

                                                activity.description

                                            }

                                        </p>

                                        <small>

                                            By

                                            {" "}

                                            <strong>

                                                {

                                                    activity.performedBy

                                                }

                                            </strong>

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

export default RecentActivities;