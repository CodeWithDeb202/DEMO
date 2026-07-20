import "./InternshipTable.css";

import InternshipRow from "../InternshipRow";

const InternshipTable = ({

    loading,

    internships,

    refresh

}) => {

    if (loading) {

        return (

            <div className="internship-table-loading">

                Loading internships...

            </div>

        );

    }

    if (internships.length === 0) {

        return (

            <div className="empty-table">

                <h3>No Internships Found</h3>

                <p>Create your first internship to get started.</p>

            </div>

        );

    }

    return (

        <div className="internship-table-wrapper">

            <table className="internship-table">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Category</th>

                        <th>Mode</th>

                        <th>Status</th>

                        <th>Applications</th>

                        <th>Deadline</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {internships.map((internship) => (

                        <InternshipRow

                            key={internship._id}

                            internship={internship}

                            refresh={refresh}

                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default InternshipTable;