import "./WelcomeCard.css";

import {

    FaBuilding,
    FaBriefcase,
    FaUsers,
    FaClipboardCheck

} from "react-icons/fa";

const WelcomeCard = ({

    employer = {},

    stats = {}

}) => {

    return (

        <section className="employer-welcome-card">

            <div className="welcome-left">

                <span className="welcome-tag">

                    Employer Dashboard

                </span>

                <h1>

                    Welcome,

                    {" "}

                    {

                        employer.firstName

                    }

                    👋

                </h1>

                <p>

                    Manage internships, monitor applications and hire talented candidates from one dashboard.

                </p>

                <div className="company-info">

                    <FaBuilding />

                    <span>

                        {

                            employer.companyName ||

                            "Company Name"

                        }

                    </span>

                </div>

            </div>

            <div className="welcome-right">

                <div className="mini-card">

                    <FaBriefcase />

                    <div>

                        <h3>

                            {

                                stats.totalInternships ||

                                0

                            }

                        </h3>

                        <p>

                            Internships

                        </p>

                    </div>

                </div>

                <div className="mini-card">

                    <FaUsers />

                    <div>

                        <h3>

                            {

                                stats.totalApplications ||

                                0

                            }

                        </h3>

                        <p>

                            Applications

                        </p>

                    </div>

                </div>

                <div className="mini-card">

                    <FaClipboardCheck />

                    <div>

                        <h3>

                            {

                                stats.hiredCandidates ||

                                0

                            }

                        </h3>

                        <p>

                            Hired

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default WelcomeCard;