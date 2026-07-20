import "./ExperienceCard.css";
import { FaBriefcase } from "react-icons/fa";

const ExperienceCard = ({ applicant }) => {

    const experiences = applicant.experience || [];

    return (

        <div className="experience-card">

            <h3>Work Experience</h3>

            {experiences.length === 0 && (

                <div className="experience-empty">

                    No work experience available.

                </div>

            )}

            {experiences.map((item, index) => (

                <div
                    key={index}
                    className="experience-item"
                >

                    <div className="experience-icon">

                        <FaBriefcase />

                    </div>

                    <div className="experience-content">

                        <h4>

                            {item.position}

                        </h4>

                        <h5>

                            {item.company}

                        </h5>

                        <div className="experience-meta">

                            <span>

                                {item.employmentType || "Full Time"}

                            </span>

                            <span>

                                {item.startDate}

                                {" - "}

                                {item.currentJob ? "Present" : item.endDate}

                            </span>

                        </div>

                        {item.location && (

                            <p className="experience-location">

                                {item.location}

                            </p>

                        )}

                        {item.description && (

                            <p className="experience-description">

                                {item.description}

                            </p>

                        )}

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ExperienceCard;