import "./UpcomingInterviews.css";

import { Link } from "react-router-dom";

import {

    FaCalendarAlt,
    FaClock,
    FaVideo,
    FaMapMarkerAlt,
    FaArrowRight

} from "react-icons/fa";

const UpcomingInterviews = ({ interviews = [] }) => {

    return (

        <section className="upcoming-interviews">

            <div className="section-top">

                <h2>

                    Upcoming Interviews

                </h2>

                <Link

                    to="/interviews"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                interviews.length === 0 ? (

                    <div className="empty-state">

                        <h3>

                            No Upcoming Interviews

                        </h3>

                        <p>

                            Your scheduled interviews will appear here.

                        </p>

                    </div>

                ) : (

                    <div className="interviews-list">

                        {

                            interviews.slice(0,5).map((item)=>(

                                <div

                                    key={item._id}

                                    className="interview-card"

                                >

                                    <img

                                        src={

                                            item.internship?.company?.companyLogo

                                        }

                                        alt="Company"

                                    />

                                    <div className="interview-info">

                                        <h3>

                                            {

                                                item.internship?.title

                                            }

                                        </h3>

                                        <p>

                                            {

                                                item.internship?.company?.companyName

                                            }

                                        </p>

                                        <div className="meta">

                                            <span>

                                                <FaCalendarAlt />

                                                {

                                                    new Date(item.interviewDate)

                                                    .toLocaleDateString()

                                                }

                                            </span>

                                            <span>

                                                <FaClock />

                                                {

                                                    new Date(item.interviewDate)

                                                    .toLocaleTimeString([],{

                                                        hour:"2-digit",

                                                        minute:"2-digit"

                                                    })

                                                }

                                            </span>

                                        </div>

                                        {

                                            item.interviewMode==="Online"

                                            ?

                                            <span className="mode">

                                                <FaVideo />

                                                Online

                                            </span>

                                            :

                                            <span className="mode">

                                                <FaMapMarkerAlt />

                                                {

                                                    item.location

                                                }

                                            </span>

                                        }

                                    </div>

                                    <div className="interview-action">

                                        {

                                            item.interviewMode==="Online"

                                            &&

                                            item.meetingLink

                                            &&

                                            <a

                                                href={item.meetingLink}

                                                target="_blank"

                                                rel="noreferrer"

                                                className="join-btn"

                                            >

                                                Join

                                                <FaArrowRight />

                                            </a>

                                        }

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

export default UpcomingInterviews;