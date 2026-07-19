import "./StatsCards.css";

import {
    FaPaperPlane,
    FaClock,
    FaCheckCircle,
    FaTimesCircle
} from "react-icons/fa";

const StatsCards = ({ dashboard }) => {

    const stats = [

        {
            id: 1,
            title: "Applications",
            value: dashboard?.totalApplications || 0,
            icon: <FaPaperPlane />,
            color: "#2563eb"
        },

        {
            id: 2,
            title: "Pending",
            value: dashboard?.pendingApplications || 0,
            icon: <FaClock />,
            color: "#f59e0b"
        },

        {
            id: 3,
            title: "Accepted",
            value: dashboard?.acceptedApplications || 0,
            icon: <FaCheckCircle />,
            color: "#16a34a"
        },

        {
            id: 4,
            title: "Rejected",
            value: dashboard?.rejectedApplications || 0,
            icon: <FaTimesCircle />,
            color: "#dc2626"
        }

    ];

    return (

        <section className="stats-grid">

            {

                stats.map((item)=>(

                    <div

                        key={item.id}

                        className="stats-card"

                    >

                        <div

                            className="stats-icon"

                            style={{

                                background:item.color

                            }}

                        >

                            {item.icon}

                        </div>

                        <div className="stats-content">

                            <h2>

                                {item.value}

                            </h2>

                            <p>

                                {item.title}

                            </p>

                        </div>

                    </div>

                ))

            }

        </section>

    );

};

export default StatsCards;