import "./UpcomingInterviews.css";

import InterviewCard from "../InterviewCard";

const UpcomingInterviews = ({

    loading,

    interviews,

    refresh

}) => {

    if (loading) {

        return (

            <div className="upcoming-loading">

                Loading interviews...

            </div>

        );

    }

    if (interviews.length === 0) {

        return (

            <div className="upcoming-empty">

                <h3>No Upcoming Interviews</h3>

                <p>

                    No interview has been scheduled.

                </p>

            </div>

        );

    }

    return (

        <div className="upcoming-interviews">

            <div className="section-header">

                <h2>

                    Upcoming Interviews

                </h2>

                <span>

                    {interviews.length}

                </span>

            </div>

            <div className="interview-list">

                {interviews.map((interview) => (

                    <InterviewCard

                        key={interview._id}

                        interview={interview}

                        refresh={refresh}

                    />

                ))}

            </div>

        </div>

    );

};

export default UpcomingInterviews;