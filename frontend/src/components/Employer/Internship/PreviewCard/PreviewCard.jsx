import "./PreviewCard.css";

const PreviewCard = ({ watch }) => {

    const data = watch();

    return (

        <section className="preview-card">

            <div className="section-title">
                <h2>Live Preview</h2>
                <p>Preview your internship before publishing.</p>
            </div>

            <div className="preview-header">

                <div className="company-logo">
                    {data.companyLogo
                        ? <img src={data.companyLogo} alt="Company" />
                        : <div className="logo-placeholder">Logo</div>}
                </div>

                <div className="preview-info">

                    <h2>{data.title || "Internship Title"}</h2>

                    <h4>{data.companyName || "Company Name"}</h4>

                    <div className="preview-tags">

                        <span>{data.workMode || "Work Mode"}</span>

                        <span>{data.internshipType || "Internship Type"}</span>

                        <span>{data.category || "Category"}</span>

                    </div>

                </div>

            </div>

            <div className="preview-grid">

                <div className="preview-item">
                    <h5>Location</h5>
                    <p>{data.city || "-"}, {data.state || "-"}, {data.country || "-"}</p>
                </div>

                <div className="preview-item">
                    <h5>Duration</h5>
                    <p>{data.duration || "-"}</p>
                </div>

                <div className="preview-item">
                    <h5>Openings</h5>
                    <p>{data.openings || 0}</p>
                </div>

                <div className="preview-item">
                    <h5>Deadline</h5>
                    <p>{data.deadline || "-"}</p>
                </div>

                <div className="preview-item">
                    <h5>Experience</h5>
                    <p>{data.experience || "Fresher"}</p>
                </div>

                <div className="preview-item">
                    <h5>Status</h5>
                    <p>{data.status || "Draft"}</p>
                </div>

            </div>

            <div className="salary-preview-box">

                <h3>Stipend</h3>

                <p>

                    {data.isPaid === "false"
                        ? "Unpaid Internship"
                        : `${data.currency || "INR"} ${data.stipend || 0} / ${data.salaryType || "Per Month"}`}

                </p>

            </div>

            <div className="preview-section">

                <h3>Required Skills</h3>

                <div className="chip-container">

                    {(data.skills || []).length === 0
                        ? <span className="empty-chip">No Skills Added</span>
                        : data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="chip"
                            >
                                {skill}
                            </span>
                        ))}

                </div>

            </div>

            <div className="preview-section">

                <h3>Responsibilities</h3>

                <ul>

                    {(data.responsibilities || []).length === 0
                        ? <li>No Responsibilities Added</li>
                        : data.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                </ul>

            </div>

            <div className="preview-section">

                <h3>Requirements</h3>

                <ul>

                    {(data.requirements || []).length === 0
                        ? <li>No Requirements Added</li>
                        : data.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                </ul>

            </div>

            <div className="preview-section">

                <h3>Benefits</h3>

                <ul>

                    {(data.benefits || []).length === 0
                        ? <li>No Benefits Added</li>
                        : data.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                </ul>

            </div>

        </section>

    );

};

export default PreviewCard;