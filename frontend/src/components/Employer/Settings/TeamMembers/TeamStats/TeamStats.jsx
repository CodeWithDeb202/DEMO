import "./TeamStats.css";

import {
    FaUsers,
    FaUserCheck,
    FaUserClock,
    FaUserShield
} from "react-icons/fa";

function TeamStats({ stats }) {

    const cards = [

        {
            id: 1,
            title: "Total Members",
            value: stats.total,
            icon: <FaUsers />,
            color: "#2563eb"
        },

        {
            id: 2,
            title: "Active Members",
            value: stats.active,
            icon: <FaUserCheck />,
            color: "#16a34a"
        },

        {
            id: 3,
            title: "Pending Invites",
            value: stats.pending,
            icon: <FaUserClock />,
            color: "#f59e0b"
        },

        {
            id: 4,
            title: "Admins",
            value: stats.admins,
            icon: <FaUserShield />,
            color: "#7c3aed"
        }

    ];

    return (

        <div className="team-stats">

            {

                cards.map((card) => (

                    <div

                        key={card.id}

                        className="team-stat-card"

                    >

                        <div

                            className="team-stat-icon"

                            style={{

                                background: `${card.color}20`,
                                color: card.color

                            }}

                        >

                            {card.icon}

                        </div>

                        <div className="team-stat-content">

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

export default TeamStats;