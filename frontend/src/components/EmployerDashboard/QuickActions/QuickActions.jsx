import "./QuickActions.css";

import { Link } from "react-router-dom";

import {

    FaPlus,
    FaBriefcase,
    FaFileAlt,
    FaCalendarCheck,
    FaComments,
    FaChartBar,
    FaBuilding,
    FaCog

} from "react-icons/fa";

const QuickActions = () => {

    const actions = [

        {

            title: "Create Internship",

            icon: <FaPlus />,

            path: "/employer/internships/create"

        },

        {

            title: "Manage Internships",

            icon: <FaBriefcase />,

            path: "/employer/internships"

        },

        {

            title: "Applications",

            icon: <FaFileAlt />,

            path: "/employer/applications"

        },

        {

            title: "Schedule Interview",

            icon: <FaCalendarCheck />,

            path: "/employer/interviews"

        },

        {

            title: "Messages",

            icon: <FaComments />,

            path: "/messages"

        },

        {

            title: "Analytics",

            icon: <FaChartBar />,

            path: "/employer/analytics"

        },

        {

            title: "Company Profile",

            icon: <FaBuilding />,

            path: "/company/profile"

        },

        {

            title: "Settings",

            icon: <FaCog />,

            path: "/settings"

        }

    ];

    return (

        <section className="employer-quick-actions">

            <h2>

                Quick Actions

            </h2>

            <div className="quick-actions-grid">

                {

                    actions.map((action, index) => (

                        <Link

                            key={index}

                            to={action.path}

                            className="quick-action-card"

                        >

                            <div className="quick-action-icon">

                                {

                                    action.icon

                                }

                            </div>

                            <span>

                                {

                                    action.title

                                }

                            </span>

                        </Link>

                    ))

                }

            </div>

        </section>

    );

};

export default QuickActions;