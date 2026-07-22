import "./EmailTemplateStats.css";

import {

    FaEnvelopeOpenText,

    FaCheckCircle,

    FaEdit,

    FaPaperPlane,

    FaChartLine,

    FaEye,

    FaMousePointer,

    FaClock

} from "react-icons/fa";

function EmailTemplateStats() {

    const stats = [

        {

            id: 1,

            title: "Total Templates",

            value: "12",

            icon: <FaEnvelopeOpenText />,

            color: "#2563eb"

        },

        {

            id: 2,

            title: "Active Templates",

            value: "10",

            icon: <FaCheckCircle />,

            color: "#16a34a"

        },

        {

            id: 3,

            title: "Draft Templates",

            value: "2",

            icon: <FaEdit />,

            color: "#f59e0b"

        },

        {

            id: 4,

            title: "Emails Sent Today",

            value: "156",

            icon: <FaPaperPlane />,

            color: "#7c3aed"

        },

        {

            id: 5,

            title: "Delivery Rate",

            value: "98.8%",

            icon: <FaChartLine />,

            color: "#0891b2"

        },

        {

            id: 6,

            title: "Open Rate",

            value: "74%",

            icon: <FaEye />,

            color: "#0d9488"

        },

        {

            id: 7,

            title: "Click Rate",

            value: "41%",

            icon: <FaMousePointer />,

            color: "#ea580c"

        },

        {

            id: 8,

            title: "Last Updated",

            value: "2 hrs",

            icon: <FaClock />,

            color: "#dc2626"

        }

    ];

    return (

        <div className="email-template-stats">

            {

                stats.map((item) => (

                    <div

                        key={item.id}

                        className="email-template-card"

                    >

                        <div

                            className="email-template-icon"

                            style={{

                                background: `${item.color}20`,

                                color: item.color

                            }}

                        >

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

                ))

            }

        </div>

    );

}

export default EmailTemplateStats;