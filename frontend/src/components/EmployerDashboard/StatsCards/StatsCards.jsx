import "./StatsCards.css";

import {
    FaBriefcase,
    FaClipboardList,
    FaUsers,
    FaUserCheck,
    FaCalendarAlt,
    FaEye,
    FaChartLine,
    FaCheckCircle
} from "react-icons/fa";

const StatsCards = ({ stats = {} }) => {

    const cards = [

        {
            title: "Total Internships",
            value: stats.totalInternships || 0,
            icon: <FaBriefcase />,
            color: "#2563eb"
        },

        {
            title: "Active Internships",
            value: stats.activeInternships || 0,
            icon: <FaCheckCircle />,
            color: "#16a34a"
        },

        {
            title: "Applications",
            value: stats.totalApplications || 0,
            icon: <FaClipboardList />,
            color: "#7c3aed"
        },

        {
            title: "Shortlisted",
            value: stats.shortlistedStudents || 0,
            icon: <FaUsers />,
            color: "#f59e0b"
        },

        {
            title: "Interviews",
            value: stats.scheduledInterviews || 0,
            icon: <FaCalendarAlt />,
            color: "#0ea5e9"
        },

        {
            title: "Hired Students",
            value: stats.hiredStudents || 0,
            icon: <FaUserCheck />,
            color: "#dc2626"
        },

        {
            title: "Profile Views",
            value: stats.profileViews || 0,
            icon: <FaEye />,
            color: "#8b5cf6"
        },

        {
            title: "Hiring Rate",
            value: `${stats.hiringRate || 0}%`,
            icon: <FaChartLine />,
            color: "#14b8a6"
        }

    ];

    return (

        <section className="employer-stats">

            {

                cards.map((card, index) => (

                    <div

                        key={index}

                        className="stats-card"

                    >

                        <div
                            className="stats-icon"
                            style={{

                                background: card.color

                            }}
                        >

                            {

                                card.icon

                            }

                        </div>

                        <div className="stats-content">

                            <h4>

                                {

                                    card.title

                                }

                            </h4>

                            <h2>

                                {

                                    card.value

                                }

                            </h2>

                        </div>

                    </div>

                ))

            }

        </section>

    );

};

export default StatsCards;