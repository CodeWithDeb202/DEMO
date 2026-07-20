import "./EducationCard.css";
import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ applicant }) => {

    const education = applicant.education || [];

    return (

        <div className="education-card">

            <h3>Education</h3>

            {education.length === 0 && (

                <div className="education-empty">

                    No education details available.

                </div>

            )}

            {education.map((item, index) => (

                <div
                    key={index}
                    className="education-item"
                >

                    <div className="education-icon">

                        <FaGraduationCap />

                    </div>

                    <div className="education-content">

                        <h4>

                            {item.degree}

                        </h4>

                        <h5>

                            {item.institution}

                        </h5>

                        <div className="education-meta">

                            <span>

                                {item.fieldOfStudy}

                            </span>

                            <span>

                                {item.startYear} - {item.endYear || "Present"}

                            </span>

                        </div>

                        {item.grade && (

                            <p>

                                Grade : {item.grade}

                            </p>

                        )}

                    </div>

                </div>

            ))}

        </div>

    );

};

export default EducationCard;