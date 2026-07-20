import "./InterviewStats.css";
import {
    FaCalendarAlt,
    FaClock,
    FaCheckCircle,
    FaUsers,
    FaVideo
} from "react-icons/fa";

const InterviewStats = ({ stats = {} }) => {

    const cards = [

        {
            title: "Total Interviews",
            value: stats.total || 0,
            icon: <FaCalendarAlt />
        },

        {
            title: "Upcoming",
            value: stats.upcoming || 0,
            icon: <FaClock />
        },

        {
            title: "Completed",
            value: stats.completed || 0,
            icon: <FaCheckCircle />
        },

        {
            title: "Candidates",
            value: stats.candidates || 0,
            icon: <FaUsers />
        },

        {
            title: "Online Meetings",
            value: stats.online || 0,
            icon: <FaVideo />
        }

    ];

    return (

        <div className="interview-stats">

            {cards.map((item, index) => (

                <div
                    key={index}
                    className="interview-stat-card"
                >

                    <div className="interview-stat-icon">

                        {item.icon}

                    </div>

                    <div>

                        <h3>

                            {item.value}

                        </h3>

                        <p>

                            {item.title}

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default InterviewStats;