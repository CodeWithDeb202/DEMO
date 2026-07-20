import "./ApplicantProfileCard.css";
import ApplicantStatusBadge from "../../Applicants/ApplicantStatusBadge";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBriefcase
} from "react-icons/fa";

const ApplicantProfileCard = ({ applicant }) => {

    return (

        <div className="applicant-profile-card">

            <div className="profile-left">

                <img
                    src={
                        applicant.profileImage ||
                        "https://ui-avatars.com/api/?name=Student"
                    }
                    alt={applicant.fullName}
                />

                <div>

                    <h2>

                        {applicant.fullName}

                    </h2>

                    <p>

                        {applicant.headline ||

                            "Student"}

                    </p>

                    <ApplicantStatusBadge
                        status={applicant.status}
                    />

                </div>

            </div>

            <div className="profile-right">

                <div className="profile-item">

                    <FaEnvelope />

                    <span>

                        {applicant.email}

                    </span>

                </div>

                <div className="profile-item">

                    <FaPhone />

                    <span>

                        {applicant.phone ||

                            "N/A"}

                    </span>

                </div>

                <div className="profile-item">

                    <FaMapMarkerAlt />

                    <span>

                        {applicant.city},
                        {" "}
                        {applicant.state}

                    </span>

                </div>

                <div className="profile-item">

                    <FaBriefcase />

                    <span>

                        {applicant.experience ||

                            "Fresher"}

                    </span>

                </div>

            </div>

        </div>

    );

};

export default ApplicantProfileCard;