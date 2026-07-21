import "./ReportsStats.css";

import {
    FaUsers,
    FaBriefcase,
    FaClipboardCheck,
    FaChartLine
} from "react-icons/fa";

function ReportsStats({

    totalApplicants = 0,

    hired = 0,

    internships = 0,

    interviews = 0

}) {

    const stats = [

        {
            title: "Applicants",
            value: totalApplicants,
            icon: <FaUsers />,
            color: "#2563eb"
        },

        {
            title: "Hired",
            value: hired,
            icon: <FaClipboardCheck />,
            color: "#16a34a"
        },

        {
            title: "Internships",
            value: internships,
            icon: <FaBriefcase />,
            color: "#9333ea"
        },

        {
            title: "Interviews",
            value: interviews,
            icon: <FaChartLine />,
            color: "#f59e0b"
        }

    ];

    return (

        <div className="reports-stats">

            {

                stats.map((item)=>(

                    <div
                        key={item.title}
                        className="reports-stat-card"
                    >

                        <div
                            className="reports-stat-icon"
                            style={{
                                background:item.color
                            }}
                        >

                            {item.icon}

                        </div>

                        <div>

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

        </div>

    );

}

export default ReportsStats;