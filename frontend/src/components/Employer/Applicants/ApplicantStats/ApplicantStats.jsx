import "./ApplicantStats.css";
import {
    FaUsers,
    FaUserCheck,
    FaUserTimes,
    FaCalendarCheck,
    FaAward
} from "react-icons/fa";

const ApplicantStats = ({ applicants = [] }) => {

    const total = applicants.length;

    const shortlisted = applicants.filter(
        item => item.status === "Shortlisted"
    ).length;

    const rejected = applicants.filter(
        item => item.status === "Rejected"
    ).length;

    const interviews = applicants.filter(
        item => item.status === "Interview Scheduled"
    ).length;

    const hired = applicants.filter(
        item => item.status === "Hired"
    ).length;

    const stats = [

        {
            title: "Total Applicants",
            value: total,
            icon: <FaUsers />
        },

        {
            title: "Shortlisted",
            value: shortlisted,
            icon: <FaUserCheck />
        },

        {
            title: "Rejected",
            value: rejected,
            icon: <FaUserTimes />
        },

        {
            title: "Interviews",
            value: interviews,
            icon: <FaCalendarCheck />
        },

        {
            title: "Hired",
            value: hired,
            icon: <FaAward />
        }

    ];

    return (

        <div className="applicant-stats">

            {stats.map((stat, index) => (

                <div
                    key={index}
                    className="applicant-stat-card"
                >

                    <div className="applicant-stat-icon">

                        {stat.icon}

                    </div>

                    <div>

                        <h3>

                            {stat.value}

                        </h3>

                        <p>

                            {stat.title}

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ApplicantStats;