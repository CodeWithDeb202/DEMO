import "./QuickActions.css";

import { Link } from "react-router-dom";

import {
    FaSearch,
    FaFileAlt,
    FaBookmark,
    FaCalendarAlt,
    FaComments,
    FaUserEdit,
    FaCertificate,
    FaFileUpload
} from "react-icons/fa";

const QuickActions = () => {

    const actions = [

        {
            title: "Browse Internships",
            icon: <FaSearch />,
            path: "/internships",
            color: "#2563eb"
        },

        {
            title: "My Applications",
            icon: <FaFileAlt />,
            path: "/applications",
            color: "#10b981"
        },

        {
            title: "Bookmarks",
            icon: <FaBookmark />,
            path: "/bookmarks",
            color: "#f59e0b"
        },

        {
            title: "Interviews",
            icon: <FaCalendarAlt />,
            path: "/interviews",
            color: "#8b5cf6"
        },

        {
            title: "Messages",
            icon: <FaComments />,
            path: "/messages",
            color: "#06b6d4"
        },

        {
            title: "Edit Profile",
            icon: <FaUserEdit />,
            path: "/complete-profile",
            color: "#ec4899"
        },

        {
            title: "Certificates",
            icon: <FaCertificate />,
            path: "/certificates",
            color: "#16a34a"
        },

        {
            title: "Resume",
            icon: <FaFileUpload />,
            path: "/resume",
            color: "#ea580c"
        }

    ];

    return (

        <section className="quick-actions">

            <h2>

                Quick Actions

            </h2>

            <div className="quick-actions-grid">

                {

                    actions.map((item,index)=>(

                        <Link

                            key={index}

                            to={item.path}

                            className="quick-card"

                        >

                            <div

                                className="quick-icon"

                                style={{

                                    background:item.color

                                }}

                            >

                                {item.icon}

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                        </Link>

                    ))

                }

            </div>

        </section>

    );

};

export default QuickActions;