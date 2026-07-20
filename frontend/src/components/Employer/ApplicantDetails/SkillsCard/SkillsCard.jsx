import "./SkillsCard.css";
import { FaCode } from "react-icons/fa";

const SkillsCard = ({ applicant }) => {

    const skills = applicant.skills || [];

    return (

        <div className="skills-card">

            <h3>Skills</h3>

            {skills.length === 0 ? (
                <div className="skills-empty">

                    No skills added.

                </div>
            ) : (

                <div className="skills-list">

                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className="skill-chip"
                        >

                            <FaCode />

                            <span>

                                {skill}

                            </span>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

};

export default SkillsCard;