import "./ApplicantsPreview.css";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

const ApplicantsPreview = ({ applicants = [] }) => {

    const previewApplicants = applicants.slice(0, 5);

    return (

        <div className="applicants-preview">

            <div className="preview-header">

                <h3>Recent Applicants</h3>

                <Link
                    to="applicants"
                    className="view-all-btn"
                >
                    View All
                </Link>

            </div>

            {previewApplicants.length === 0 && (

                <div className="empty-applicants">

                    <FaUserGraduate />

                    <p>No applicants yet.</p>

                </div>

            )}

            {previewApplicants.map((applicant) => (

                <div
                    key={applicant._id}
                    className="applicant-card"
                >

                    <div className="applicant-left">

                        <img
                            src={
                                applicant.profileImage ||
                                "https://ui-avatars.com/api/?name=Student"
                            }
                            alt={applicant.fullName}
                        />

                        <div>

                            <h4>

                                {applicant.fullName}

                            </h4>

                            <p>

                                {applicant.college ||

                                    "College Not Available"}

                            </p>

                            <div className="skill-list">

                                {(applicant.skills || [])
                                    .slice(0, 3)
                                    .map((skill, index) => (

                                        <span key={index}>

                                            {skill}

                                        </span>

                                    ))}

                            </div>

                        </div>

                    </div>

                    <div className="applicant-right">

                        <span>

                            {new Date(
                                applicant.createdAt
                            ).toLocaleDateString()}

                        </span>

                        <Link
                            to={`/employer/applicants/${applicant._id}`}
                            className="profile-btn"
                        >

                            View

                        </Link>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ApplicantsPreview;