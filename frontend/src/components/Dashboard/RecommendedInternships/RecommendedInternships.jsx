import "./RecommendedInternships.css";

import { Link } from "react-router-dom";

import {

    FaBookmark,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaLaptopHouse

} from "react-icons/fa";

const RecommendedInternships = ({ internships = [] }) => {

    return (

        <section className="recommended">

            <div className="section-top">

                <h2>

                    Recommended Internships

                </h2>

                <Link

                    to="/internships"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                internships.length === 0 ? (

                    <div className="empty-state">

                        <h3>

                            No Recommendations

                        </h3>

                        <p>

                            Complete your profile to receive AI-powered internship recommendations.

                        </p>

                    </div>

                ) : (

                    <div className="recommended-grid">

                        {

                            internships.slice(0, 6).map((item) => (

                                <div

                                    className="internship-card"

                                    key={item._id}

                                >

                                    {

                                        item.isFeatured && (

                                            <span className="featured">

                                                Featured

                                            </span>

                                        )

                                    }

                                    <img

                                        src={

                                            item.company?.companyLogo

                                        }

                                        alt="Company"

                                    />

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <p>

                                        {

                                            item.company?.companyName

                                        }

                                    </p>

                                    <div className="internship-meta">

                                        <span>

                                            <FaMapMarkerAlt />

                                            {

                                                item.location

                                            }

                                        </span>

                                        <span>

                                            <FaLaptopHouse />

                                            {

                                                item.workMode

                                            }

                                        </span>

                                        <span>

                                            <FaMoneyBillWave />

                                            {

                                                item.stipend || "Unpaid"

                                            }

                                        </span>

                                    </div>

                                    <div className="internship-actions">

                                        <button

                                            className="bookmark-btn"

                                        >

                                            <FaBookmark />

                                        </button>

                                        <Link

                                            to={`/internships/${item._id}`}

                                            className="apply-btn"

                                        >

                                            View Details

                                        </Link>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

};

export default RecommendedInternships;