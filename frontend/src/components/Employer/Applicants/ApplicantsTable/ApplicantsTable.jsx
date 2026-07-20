import "./ApplicantsTable.css";

import ApplicantRow from "../ApplicantRow";

const ApplicantsTable = ({

    loading,

    applicants,

    refresh

}) => {

    if (loading) {

        return (

            <div className="applicants-loading">

                Loading applicants...

            </div>

        );

    }

    if (applicants.length === 0) {

        return (

            <div className="empty-applicants-table">

                <h3>No Applicants Found</h3>

                <p>

                    No students have applied yet.

                </p>

            </div>

        );

    }

    return (

        <div className="applicants-table-wrapper">

            <table className="applicants-table">

                <thead>

                    <tr>

                        <th>Candidate</th>

                        <th>College</th>

                        <th>Skills</th>

                        <th>Status</th>

                        <th>Applied</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {applicants.map((applicant) => (

                        <ApplicantRow

                            key={applicant._id}

                            applicant={applicant}

                            refresh={refresh}

                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default ApplicantsTable;