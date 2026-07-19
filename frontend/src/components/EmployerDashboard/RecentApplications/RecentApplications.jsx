import "./RecentApplications.css";

import { Link } from "react-router-dom";

import {

    FaDownload,
    FaCalendarAlt,
    FaCheck,
    FaTimes,
    FaVideo,
    FaEye,
    FaStar

} from "react-icons/fa";

const RecentApplications = ({ applications = [] }) => {

    return (

        <section className="recent-applications">

            <div className="section-header">

                <h2>

                    Recent Applications

                </h2>

                <Link

                    to="/employer/applications"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                applications.length === 0 ? (

                    <div className="empty-state">

                        <h3>

                            No Applications Yet

                        </h3>

                        <p>

                            Applications will appear here.

                        </p>

                    </div>

                ) : (

                    <div className="applications-list">

                        {

                            applications

                                .slice(0, 5)

                                .map((item) => (

                                    <div

                                        key={item._id}

                                        className="application-card"

                                    >

                                        <div className="application-left">

                                            <img

                                                src={

                                                    item.applicant?.profileImage ||

                                                    "/images/avatar.png"

                                                }

                                                alt="Student"

                                            />

                                            <div>

                                                <h3>

                                                    {

                                                        item.applicant?.firstName

                                                    }{" "}

                                                    {

                                                        item.applicant?.lastName

                                                    }

                                                </h3>

                                                <p>

                                                    {

                                                        item.internship?.title

                                                    }

                                                </p>

                                                <div className="application-meta">

                                                    <span>

                                                        <FaCalendarAlt />

                                                        {

                                                            new Date(

                                                                item.createdAt

                                                            ).toLocaleDateString()

                                                        }

                                                    </span>

                                                    <span>

                                                        <FaStar />

                                                        {

                                                            item.matchScore || 0

                                                        }%

                                                        Match

                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="application-right">

                                            <span

                                                className={`status ${item.status?.toLowerCase()}`}

                                            >

                                                {

                                                    item.status

                                                }

                                            </span>

                                            <div className="action-buttons">

                                                <a

                                                    href={

                                                        item.applicant?.resume

                                                    }

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="action-btn resume"

                                                    title="Resume"

                                                >

                                                    <FaDownload />

                                                </a>

                                                <Link

                                                    to={`/students/${item.applicant?._id}`}

                                                    className="action-btn view"

                                                    title="View Profile"

                                                >

                                                    <FaEye />

                                                </Link>

                                                <button

                                                    className="action-btn accept"

                                                    title="Accept"

                                                >

                                                    <FaCheck />

                                                </button>

                                                <button

                                                    className="action-btn reject"

                                                    title="Reject"

                                                >

                                                    <FaTimes />

                                                </button>

                                                <Link

                                                    to={`/employer/interviews/schedule/${item._id}`}

                                                    className="action-btn interview"

                                                    title="Schedule Interview"

                                                >

                                                    <FaVideo />

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

export default RecentApplications;