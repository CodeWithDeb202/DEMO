import "./StatsCards.css";

import {

    FaUsers,
    FaUserGraduate,
    FaBuilding,
    FaBriefcase,
    FaFileAlt,
    FaUserCheck,
    FaClock,
    FaUserSlash

} from "react-icons/fa";

const StatsCards = ({ stats = {} }) => {

    const cards = [

        {

            title: "Total Users",

            value: stats.totalUsers || 0,

            icon: <FaUsers />,

            color: "#2563eb"

        },

        {

            title: "Students",

            value: stats.totalStudents || 0,

            icon: <FaUserGraduate />,

            color: "#7c3aed"

        },

        {

            title: "Employers",

            value: stats.totalEmployers || 0,

            icon: <FaBuilding />,

            color: "#059669"

        },

        {

            title: "Internships",

            value: stats.totalInternships || 0,

            icon: <FaBriefcase />,

            color: "#ea580c"

        },

        {

            title: "Applications",

            value: stats.totalApplications || 0,

            icon: <FaFileAlt />,

            color: "#0891b2"

        },

        {

            title: "Hired",

            value: stats.totalHired || 0,

            icon: <FaUserCheck />,

            color: "#16a34a"

        },

        {

            title: "Pending Verification",

            value: stats.pendingVerifications || 0,

            icon: <FaClock />,

            color: "#d97706"

        },

        {

            title: "Blocked Users",

            value: stats.blockedUsers || 0,

            icon: <FaUserSlash />,

            color: "#dc2626"

        }

    ];

    return (

        <section className="admin-stats">

            {

                cards.map((card, index) => (

                    <div

                        key={index}

                        className="admin-stat-card"

                    >

                        <div

                            className="admin-stat-icon"

                            style={{

                                background: card.color

                            }}

                        >

                            {

                                card.icon

                            }

                        </div>

                        <div className="admin-stat-content">

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