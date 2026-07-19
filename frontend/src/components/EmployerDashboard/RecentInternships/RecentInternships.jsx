import "./RecentInternships.css";

import { Link } from "react-router-dom";

import {

    FaUsers,
    FaEye,
    FaCalendarAlt,
    FaEdit,
    FaTrash,
    FaChartLine,
    FaStar

} from "react-icons/fa";

const RecentInternships = ({ internships = [] }) => {

    return (

        <section className="recent-internships">

            <div className="section-header">

                <h2>

                    Recent Internships

                </h2>

                <Link

                    to="/employer/internships"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                internships.length === 0 ? (

                    <div className="empty-state">

                        <h3>

                            No Internship Posted

                        </h3>

                        <p>

                            Create your first internship to start receiving applications.

                        </p>

                    </div>

                ) : (

                    <div className="internship-list">

                        {

                            internships

                            .slice(0,5)

                            .map((item)=>(

                                <div

                                    key={item._id}

                                    className="internship-card"

                                >

                                    <div className="internship-left">

                                        <img

                                            src={

                                                item.company?.companyLogo ||

                                                "/images/company-placeholder.png"

                                            }

                                            alt="Company"

                                        />

                                        <div>

                                            <div className="title-row">

                                                <h3>

                                                    {

                                                        item.title

                                                    }

                                                </h3>

                                                {

                                                    item.isFeatured && (

                                                        <span className="featured">

                                                            <FaStar />

                                                            Featured

                                                        </span>

                                                    )

                                                }

                                            </div>

                                            <p>

                                                {

                                                    item.company?.companyName

                                                }

                                            </p>

                                            <div className="internship-meta">

                                                <span>

                                                    <FaUsers />

                                                    {

                                                        item.applicationsCount || 0

                                                    }

                                                    Applications

                                                </span>

                                                <span>

                                                    <FaEye />

                                                    {

                                                        item.views || 0

                                                    }

                                                    Views

                                                </span>

                                                <span>

                                                    <FaCalendarAlt />

                                                    {

                                                        new Date(

                                                            item.lastDate

                                                        ).toLocaleDateString()

                                                    }

                                                </span>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="internship-right">

                                        <span

                                            className={`status ${item.status?.toLowerCase()}`}

                                        >

                                            {

                                                item.status

                                            }

                                        </span>

                                        <div className="action-buttons">

                                            <Link

                                                to={`/employer/internships/edit/${item._id}`}

                                                className="action-btn edit"

                                            >

                                                <FaEdit />

                                            </Link>

                                            <button

                                                className="action-btn delete"

                                            >

                                                <FaTrash />

                                            </button>

                                            <Link

                                                to={`/employer/internships/analytics/${item._id}`}

                                                className="action-btn analytics"

                                            >

                                                <FaChartLine />

                                            </Link>

                                        </div>

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

export default RecentInternships;