import "./InternshipStats.css";
import { FaBriefcase, FaCheckCircle, FaClock, FaUsers } from "react-icons/fa";

const InternshipStats = ({ internships }) => {

    const total = internships.length;

    const published = internships.filter(
        item => item.status === "Published"
    ).length;

    const draft = internships.filter(
        item => item.status === "Draft"
    ).length;

    const applications = internships.reduce(
        (sum, item) => sum + (item.totalApplications || 0),
        0
    );

    const cards = [
        {
            title: "Total Internships",
            value: total,
            icon: <FaBriefcase />
        },
        {
            title: "Published",
            value: published,
            icon: <FaCheckCircle />
        },
        {
            title: "Draft",
            value: draft,
            icon: <FaClock />
        },
        {
            title: "Applications",
            value: applications,
            icon: <FaUsers />
        }
    ];

    return (

        <div className="internship-stats">

            {cards.map((card, index) => (

                <div
                    key={index}
                    className="stats-card"
                >

                    <div className="stats-icon">
                        {card.icon}
                    </div>

                    <div>

                        <h3>{card.value}</h3>

                        <p>{card.title}</p>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default InternshipStats;