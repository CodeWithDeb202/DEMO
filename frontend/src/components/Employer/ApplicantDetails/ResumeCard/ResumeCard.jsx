import "./ResumeCard.css";
import {
    FaFilePdf,
    FaEye,
    FaDownload
} from "react-icons/fa";

const ResumeCard = ({ applicant }) => {

    return (

        <div className="resume-card">

            <h3>Resume</h3>

            {!applicant.resume ? (
                <div className="resume-empty">

                    No resume uploaded.

                </div>
            ) : (

                <div className="resume-box">

                    <div className="resume-icon">

                        <FaFilePdf />

                    </div>

                    <div className="resume-info">

                        <h4>

                            {applicant.resumeName || "Resume.pdf"}

                        </h4>

                        <p>

                            PDF Resume

                        </p>

                    </div>

                    <div className="resume-actions">

                        <a
                            href={applicant.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="resume-btn view-btn"
                        >

                            <FaEye />

                            View

                        </a>

                        <a
                            href={applicant.resume}
                            download
                            className="resume-btn download-btn"
                        >

                            <FaDownload />

                            Download

                        </a>

                    </div>

                </div>

            )}

        </div>

    );

};

export default ResumeCard;