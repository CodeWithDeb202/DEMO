import "./RecentApplications.css";

import { Link } from "react-router-dom";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const RecentApplications = ({ applications = [] }) => {

    return (

        <section className="recent-applications">

            <div className="section-top">

                <h2>

                    Recent Applications

                </h2>

                <Link
                    to="/applications"
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

                            Start applying for internships to
                            see them here.

                        </p>

                    </div>

                ) : (

                    <div className="applications-list">

                        {

                            applications.slice(0,5).map((item)=>(

                                <div
                                    key={item._id}
                                    className="application-card"
                                >

                                    <img

                                        src={
                                            item.internship?.company?.companyLogo
                                        }

                                        alt="Company"

                                    />

                                    <div className="application-info">

                                        <h3>

                                            {

                                                item.internship?.title

                                            }

                                        </h3>

                                        <p>

                                            <FaBuilding />

                                            {

                                                item.internship?.company?.companyName

                                            }

                                        </p>

                                        <p>

                                            <FaMapMarkerAlt />

                                            {

                                                item.internship?.location

                                            }

                                        </p>

                                    </div>

                                    <div className="application-right">

                                        <span

                                            className={`status ${item.status.toLowerCase()}`}

                                        >

                                            {item.status}

                                        </span>

                                        <small>

                                            {

                                                new Date(item.createdAt)

                                                .toLocaleDateString()

                                            }

                                        </small>

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