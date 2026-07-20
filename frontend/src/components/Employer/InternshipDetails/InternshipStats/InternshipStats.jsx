import "./InternshipStats.css";
import {
    FaUsers,
    FaUserCheck,
    FaCalendarCheck,
    FaAward,
    FaEye,
    FaBookmark,
    FaClock
} from "react-icons/fa";

const InternshipStats = ({ internship }) => {

    const cards = [

        {
            title: "Applicants",
            value: internship.totalApplications || 0,
            icon: <FaUsers />
        },

        {
            title: "Shortlisted",
            value: internship.shortlistedCount || 0,
            icon: <FaUserCheck />
        },

        {
            title: "Interviews",
            value: internship.interviewCount || 0,
            icon: <FaCalendarCheck />
        },

        {
            title: "Hired",
            value: internship.hiredCount || 0,
            icon: <FaAward />
        },

        {
            title: "Views",
            value: internship.views || 0,
            icon: <FaEye />
        },

        {
            title: "Saved",
            value: internship.savedCount || 0,
            icon: <FaBookmark />
        },

        {
            title: "Days Left",
            value: internship.daysRemaining || 0,
            icon: <FaClock />
        }

    ];

    return (

        <div className="details-stats">

            <h3>Internship Statistics</h3>

            <div className="details-stats-grid">

                {cards.map((card, index) => (

                    <div
                        key={index}
                        className="details-stat-card"
                    >

                        <div className="details-stat-icon">

                            {card.icon}

                        </div>

                        <div>

                            <h4>

                                {card.value}

                            </h4>

                            <p>

                                {card.title}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default InternshipStats;