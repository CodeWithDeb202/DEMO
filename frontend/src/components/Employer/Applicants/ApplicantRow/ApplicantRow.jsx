import "./ApplicantRow.css";
import ApplicantStatusBadge from "../ApplicantStatusBadge";
import ApplicantActionMenu from "../ApplicantActionMenu";

const ApplicantRow = ({

    applicant,

    refresh

}) => {

    return (

        <tr>

            <td>

                <div className="candidate-info">

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

                            {applicant.email}

                        </p>

                    </div>

                </div>

            </td>

            <td>

                {applicant.college ||

                    "N/A"}

            </td>

            <td>

                <div className="skills-list">

                    {(applicant.skills || [])
                        .slice(0, 3)
                        .map((skill, index) => (

                            <span key={index}>

                                {skill}

                            </span>

                        ))}

                </div>

            </td>

            <td>

                <ApplicantStatusBadge

                    status={applicant.status}

                />

            </td>

            <td>

                {new Date(
                    applicant.createdAt
                ).toLocaleDateString()}

            </td>

            <td>

                <ApplicantActionMenu

                    applicant={applicant}

                    refresh={refresh}

                />

            </td>

        </tr>

    );

};

export default ApplicantRow;