import "./CertificateStats.css";

import {
    FaCertificate,
    FaCheckCircle,
    FaPaperPlane,
    FaClock
} from "react-icons/fa";

function CertificateStats({

    total = 0,

    issued = 0,

    pending = 0,

    downloaded = 0

}) {

    const stats = [

        {
            title: "Total Certificates",
            value: total,
            icon: <FaCertificate />,
            color: "#2563eb"
        },

        {
            title: "Issued",
            value: issued,
            icon: <FaPaperPlane />,
            color: "#16a34a"
        },

        {
            title: "Downloaded",
            value: downloaded,
            icon: <FaCheckCircle />,
            color: "#9333ea"
        },

        {
            title: "Pending",
            value: pending,
            icon: <FaClock />,
            color: "#f59e0b"
        }

    ];

    return (

        <div className="certificate-stats">

            {

                stats.map((item) => (

                    <div

                        key={item.title}

                        className="certificate-stat-card"

                    >

                        <div

                            className="certificate-stat-icon"

                            style={{

                                background: item.color

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

export default CertificateStats;