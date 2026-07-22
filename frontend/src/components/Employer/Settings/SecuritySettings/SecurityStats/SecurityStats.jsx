import "./SecurityStats.css";

import {

    FaShieldAlt,

    FaKey,

    FaLaptop,

    FaUserLock

} from "react-icons/fa";

function SecurityStats() {

    const stats = [

        {

            id: 1,

            title: "Security Score",

            value: "92%",

            icon: <FaShieldAlt />,

            color: "#16a34a"

        },

        {

            id: 2,

            title: "Active Sessions",

            value: "3",

            icon: <FaLaptop />,

            color: "#2563eb"

        },

        {

            id: 3,

            title: "Trusted Devices",

            value: "5",

            icon: <FaKey />,

            color: "#f59e0b"

        },

        {

            id: 4,

            title: "2FA Status",

            value: "Enabled",

            icon: <FaUserLock />,

            color: "#7c3aed"

        }

    ];

    return (

        <div className="security-stats">

            {

                stats.map((item) => (

                    <div

                        key={item.id}

                        className="security-stat-card"

                    >

                        <div

                            className="security-stat-icon"

                            style={{

                                background:`${item.color}20`,

                                color:item.color

                            }}

                        >

                            {item.icon}

                        </div>

                        <div className="security-stat-content">

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

export default SecurityStats;