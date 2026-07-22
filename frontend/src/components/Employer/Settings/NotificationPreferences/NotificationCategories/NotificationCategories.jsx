import "./NotificationCategories.css";

import { FaLayerGroup, FaSave } from "react-icons/fa";

function NotificationCategories({

    settings,

    setSettings

}) {

    const categories = [

        {

            key: "jobApplications",

            title: "Job Applications",

            description: "Notifications for new candidate applications."

        },

        {

            key: "interviews",

            title: "Interviews",

            description: "Interview scheduling, updates and reminders."

        },

        {

            key: "offers",

            title: "Offer Letters",

            description: "Offer sent, accepted or rejected notifications."

        },

        {

            key: "certificates",

            title: "Certificates",

            description: "Certificate issued and downloaded alerts."

        },

        {

            key: "team",

            title: "Team Activities",

            description: "Actions performed by HR and Recruiters."

        },

        {

            key: "reports",

            title: "Reports & Analytics",

            description: "Generated reports and analytics updates."

        },

        {

            key: "security",

            title: "Security",

            description: "Security alerts and account activities."

        },

        {

            key: "system",

            title: "System Updates",

            description: "Maintenance and system announcements."

        }

    ];

    const toggleCategory = (key) => {

        setSettings({

            ...settings,

            [key]: !settings[key]

        });

    };

    return (

        <div className="notification-categories">

            <div className="categories-header">

                <div className="categories-title">

                    <div className="categories-icon">

                        <FaLayerGroup />

                    </div>

                    <div>

                        <h2>

                            Notification Categories

                        </h2>

                        <p>

                            Select which categories should generate notifications.

                        </p>

                    </div>

                </div>

            </div>

            <div className="categories-list">

                {

                    categories.map((category) => (

                        <div

                            key={category.key}

                            className="category-card"

                        >

                            <div>

                                <h4>

                                    {category.title}

                                </h4>

                                <p>

                                    {category.description}

                                </p>

                            </div>

                            <label className="switch">

                                <input

                                    type="checkbox"

                                    checked={settings[category.key] ?? true}

                                    onChange={() =>

                                        toggleCategory(category.key)

                                    }

                                />

                                <span className="slider"></span>

                            </label>

                        </div>

                    ))

                }

            </div>

            <div className="categories-footer">

                <button>

                    <FaSave />

                    Save Categories

                </button>

            </div>

        </div>

    );

}

export default NotificationCategories;