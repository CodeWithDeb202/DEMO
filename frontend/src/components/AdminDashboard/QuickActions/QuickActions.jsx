import "./QuickActions.css";

import { Link } from "react-router-dom";

import {

    FaUsers,

    FaBuilding,

    FaBriefcase,

    FaFileAlt,

    FaBell,

    FaChartBar,

    FaCog,

    FaClipboardList

} from "react-icons/fa";

const QuickActions = () => {

    const actions = [

        {

            title: "Manage Users",

            description: "View, edit, block or remove users",

            icon: <FaUsers />,

            link: "/admin/users",

            color: "#2563eb"

        },

        {

            title: "Verify Companies",

            description: "Approve or reject companies",

            icon: <FaBuilding />,

            link: "/admin/companies",

            color: "#16a34a"

        },

        {

            title: "Manage Internships",

            description: "Review internship postings",

            icon: <FaBriefcase />,

            link: "/admin/internships",

            color: "#f97316"

        },

        {

            title: "Applications",

            description: "Monitor all applications",

            icon: <FaFileAlt />,

            link: "/admin/applications",

            color: "#8b5cf6"

        },

        {

            title: "Notifications",

            description: "Send announcements",

            icon: <FaBell />,

            link: "/admin/notifications",

            color: "#eab308"

        },

        {

            title: "Analytics",

            description: "View reports & statistics",

            icon: <FaChartBar />,

            link: "/admin/analytics",

            color: "#06b6d4"

        },

        {

            title: "Settings",

            description: "Configure platform",

            icon: <FaCog />,

            link: "/admin/settings",

            color: "#6b7280"

        },

        {

            title: "Activity Logs",

            description: "View system logs",

            icon: <FaClipboardList />,

            link: "/admin/activity-logs",

            color: "#dc2626"

        }

    ];

    return (

        <section className="admin-quick-actions">

            <div className="section-header">

                <h2>

                    Quick Actions

                </h2>

            </div>

            <div className="actions-grid">

                {

                    actions.map((action,index)=>(

                        <Link

                            key={index}

                            to={action.link}

                            className="action-card"

                        >

                            <div

                                className="action-icon"

                                style={{

                                    background:action.color

                                }}

                            >

                                {

                                    action.icon

                                }

                            </div>

                            <div className="action-content">

                                <h3>

                                    {

                                        action.title

                                    }

                                </h3>

                                <p>

                                    {

                                        action.description

                                    }

                                </p>

                            </div>

                        </Link>

                    ))

                }

            </div>

        </section>

    );

};

export default QuickActions;