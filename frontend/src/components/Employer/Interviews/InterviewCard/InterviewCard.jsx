import "./InterviewCard.css";
import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaVideo,
    FaUserGraduate
} from "react-icons/fa";

import InterviewActionMenu from "../InterviewActionMenu";

const InterviewCard = ({

    interview,

    completed,

    refresh

}) => {

    return (

        <div className="interview-card">

            <div className="interview-left">

                <img
                    src={
                        interview.candidate?.profileImage ||
                        "https://ui-avatars.com/api/?name=Candidate"
                    }
                    alt={interview.candidate?.fullName}
                />

                <div>

                    <h3>

                        {interview.candidate?.fullName}

                    </h3>

                    <p>

                        <FaUserGraduate />

                        {interview.internship?.title}

                    </p>

                    <div className="interview-meta">

                        <span>

                            <FaCalendarAlt />

                            {interview.date}

                        </span>

                        <span>

                            <FaClock />

                            {interview.time}

                        </span>

                        <span>

                            {interview.mode === "Online" ? <FaVideo /> : <FaMapMarkerAlt />}

                            {interview.mode}

                        </span>

                    </div>

                </div>

            </div>

            <div className="interview-right">

                <span className={`status ${interview.status.toLowerCase()}`}>

                    {interview.status}

                </span>

                <InterviewActionMenu

                    interview={interview}

                    completed={completed}

                    refresh={refresh}

                />

            </div>

        </div>

    );

};

export default InterviewCard;