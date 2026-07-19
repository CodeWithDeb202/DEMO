import "./WelcomeCard.css";

import {

    FaUserShield,
    FaTasks,
    FaBell

} from "react-icons/fa";

const WelcomeCard = ({

    admin = {},

    stats = {}

}) => {

    const hour = new Date().getHours();

    const greeting =

        hour < 12

            ? "Good Morning"

            : hour < 18

            ? "Good Afternoon"

            : "Good Evening";

    const today = new Date().toLocaleDateString(

        "en-IN",

        {

            weekday: "long",

            year: "numeric",

            month: "long",

            day: "numeric"

        }

    );

    return (

        <section className="admin-welcome-card">

            <div className="welcome-left">

                <img

                    src={

                        admin.profileImage ||

                        "/images/admin.png"

                    }

                    alt="Admin"

                />

                <div>

                    <h2>

                        {greeting},{" "}

                        {

                            admin.firstName ||

                            "Admin"

                        }

                        👋

                    </h2>

                    <p>

                        {

                            today

                        }

                    </p>

                    <span className="admin-role">

                        <FaUserShield />

                        Super Admin

                    </span>

                </div>

            </div>

            <div className="welcome-right">

                <div className="summary-card">

                    <FaTasks />

                    <div>

                        <h3>

                            {

                                stats.pendingTasks || 0

                            }

                        </h3>

                        <span>

                            Pending Tasks

                        </span>

                    </div>

                </div>

                <div className="summary-card">

                    <FaBell />

                    <div>

                        <h3>

                            {

                                stats.notifications || 0

                            }

                        </h3>

                        <span>

                            Notifications

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default WelcomeCard;