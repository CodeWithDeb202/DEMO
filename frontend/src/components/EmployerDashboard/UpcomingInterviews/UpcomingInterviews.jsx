import "./UpcomingInterviews.css";

import { Link } from "react-router-dom";

import {

    FaCalendarAlt,
    FaClock,
    FaVideo,
    FaEdit,
    FaTrash,
    FaCheckCircle,
    FaUserGraduate

} from "react-icons/fa";

const UpcomingInterviews = ({ interviews = [] }) => {

    return (

        <section className="upcoming-interviews">

            <div className="section-header">

                <h2>

                    Upcoming Interviews

                </h2>

                <Link

                    to="/employer/interviews"

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

                            Scheduled interviews will appear here.

                        </p>

                    </div>

                ) : (

                    <div className="interview-list">

                        {

                            interviews

                                .slice(0, 5)

                                .map((item) => (

                                    <div

                                        key={item._id}

                                        className="interview-card"

                                    >

                                        <div className="interview-left">

                                            <img

                                                src={

                                                    item.student?.profileImage ||

                                                    "/images/avatar.png"

                                                }

                                                alt="Student"

                                            />

                                            <div>

                                                <h3>

                                                    {

                                                        item.student?.firstName

                                                    }{" "}

                                                    {

                                                        item.student?.lastName

                                                    }

                                                </h3>

                                                <p>

                                                    <FaUserGraduate />

                                                    {

                                                        item.internship?.title

                                                    }

                                                </p>

                                                <div className="interview-meta">

                                                    <span>

                                                        <FaCalendarAlt />

                                                        {

                                                            new Date(

                                                                item.interviewDate

                                                            ).toLocaleDateString()

                                                        }

                                                    </span>

                                                    <span>

                                                        <FaClock />

                                                        {

                                                            new Date(

                                                                item.interviewDate

                                                            ).toLocaleTimeString([],{

                                                                hour:"2-digit",

                                                                minute:"2-digit"

                                                            })

                                                        }

                                                    </span>

                                                    <span>

                                                        <FaVideo />

                                                        {

                                                            item.interviewMode ||

                                                            "Online"

                                                        }

                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="interview-right">

                                            <span

                                                className={`status ${item.status?.toLowerCase()}`}

                                            >

                                                {

                                                    item.status

                                                }

                                            </span>

                                            <div className="action-buttons">

                                                {

                                                    item.meetingLink && (

                                                        <a

                                                            href={item.meetingLink}

                                                            target="_blank"

                                                            rel="noreferrer"

                                                            className="action-btn join"

                                                            title="Join Meeting"

                                                        >

                                                            <FaVideo />

                                                        </a>

                                                    )

                                                }

                                                <Link

                                                    to={`/employer/interviews/edit/${item._id}`}

                                                    className="action-btn edit"

                                                    title="Reschedule"

                                                >

                                                    <FaEdit />

                                                </Link>

                                                <button

                                                    className="action-btn complete"

                                                    title="Mark Completed"

                                                >

                                                    <FaCheckCircle />

                                                </button>

                                                <button

                                                    className="action-btn cancel"

                                                    title="Cancel Interview"

                                                >

                                                    <FaTrash />

                                                </button>

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

export default UpcomingInterviews;