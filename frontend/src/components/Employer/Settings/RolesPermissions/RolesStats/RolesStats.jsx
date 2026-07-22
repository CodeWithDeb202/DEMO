import "./RolesStats.css";

import {

    FaUserShield,

    FaUsersCog,

    FaLock,

    FaCheckCircle

} from "react-icons/fa";

function RolesStats({

    stats

}) {

    const cards = [

        {

            id: 1,

            title: "Total Roles",

            value: stats.totalRoles,

            icon: <FaUserShield />,

            color: "#2563eb"

        },

        {

            id: 2,

            title: "Active Roles",

            value: stats.activeRoles,

            icon: <FaCheckCircle />,

            color: "#16a34a"

        },

        {

            id: 3,

            title: "Custom Roles",

            value: stats.customRoles,

            icon: <FaUsersCog />,

            color: "#f59e0b"

        },

        {

            id: 4,

            title: "Permissions",

            value: stats.permissions,

            icon: <FaLock />,

            color: "#7c3aed"

        }

    ];

    return (

        <div className="roles-stats">

            {

                cards.map((card) => (

                    <div

                        key={card.id}

                        className="roles-stat-card"

                    >

                        <div

                            className="roles-stat-icon"

                            style={{

                                background: `${card.color}20`,

                                color: card.color

                            }}

                        >

                            {card.icon}

                        </div>

                        <div className="roles-stat-content">

                            <h3>

                                {card.value}

                            </h3>

                            <p>

                                {card.title}

                            </p>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default RolesStats;