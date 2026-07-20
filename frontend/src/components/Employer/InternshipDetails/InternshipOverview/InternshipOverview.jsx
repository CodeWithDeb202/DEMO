import "./InternshipOverview.css";
import StatusBadge from "../../Internships/StatusBadge";

const InternshipOverview = ({ internship }) => {

    return (

        <div className="internship-overview">

            <div className="overview-header">

                <div>

                    <h1>{internship.title}</h1>

                    <p>{internship.companyName}</p>

                </div>

                <StatusBadge
                    status={internship.status}
                />

            </div>

            <div className="overview-grid">

                <div className="overview-item">
                    <span>Category</span>
                    <h4>{internship.category}</h4>
                </div>

                <div className="overview-item">
                    <span>Work Mode</span>
                    <h4>{internship.workMode}</h4>
                </div>

                <div className="overview-item">
                    <span>Internship Type</span>
                    <h4>{internship.internshipType}</h4>
                </div>

                <div className="overview-item">
                    <span>Duration</span>
                    <h4>{internship.duration}</h4>
                </div>

                <div className="overview-item">
                    <span>Openings</span>
                    <h4>{internship.openings}</h4>
                </div>

                <div className="overview-item">
                    <span>Deadline</span>
                    <h4>{new Date(internship.deadline).toLocaleDateString()}</h4>
                </div>

                <div className="overview-item">
                    <span>Location</span>
                    <h4>
                        {internship.city}, {internship.state}
                    </h4>
                </div>

                <div className="overview-item">
                    <span>Stipend</span>
                    <h4>
                        {internship.isPaid
                            ? `${internship.currency} ${internship.stipend}`
                            : "Unpaid"}
                    </h4>
                </div>

            </div>

        </div>

    );

};

export default InternshipOverview;