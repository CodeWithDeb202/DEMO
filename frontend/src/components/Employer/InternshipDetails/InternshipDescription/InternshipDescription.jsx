import "./InternshipDescription.css";

const InternshipDescription = ({ internship }) => {

    return (

        <div className="internship-description">

            <div className="description-section">

                <h3>Internship Description</h3>

                <p>

                    {internship.description ||

                        "No description available."}

                </p>

            </div>

            <div className="description-section">

                <h3>Responsibilities</h3>

                <ul>

                    {internship.responsibilities?.length ? (
                        internship.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No responsibilities added.</li>
                    )}

                </ul>

            </div>

            <div className="description-section">

                <h3>Requirements</h3>

                <ul>

                    {internship.requirements?.length ? (
                        internship.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No requirements added.</li>
                    )}

                </ul>

            </div>

            <div className="description-section">

                <h3>Required Skills</h3>

                <div className="skills-wrapper">

                    {internship.skills?.length ? (
                        internship.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="skill-chip"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <span className="empty-chip">
                            No skills added.
                        </span>
                    )}

                </div>

            </div>

            <div className="description-section">

                <h3>Benefits</h3>

                <ul>

                    {internship.benefits?.length ? (
                        internship.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No benefits available.</li>
                    )}

                </ul>

            </div>

            <div className="description-section">

                <h3>Perks</h3>

                <p>

                    {internship.perks ||

                        "No perks available."}

                </p>

            </div>

        </div>

    );

};

export default InternshipDescription;