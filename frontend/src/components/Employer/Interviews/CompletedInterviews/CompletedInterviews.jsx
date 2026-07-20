import "./CompletedInterviews.css";

import InterviewCard from "../InterviewCard";

const CompletedInterviews = ({

    loading,

    interviews

}) => {

    if (loading) {

        return (

            <div className="completed-loading">

                Loading completed interviews...

            </div>

        );

    }

    if (interviews.length === 0) {

        return (

            <div className="completed-empty">

                <h3>No Completed Interviews</h3>

                <p>

                    Completed interviews will appear here.

                </p>

            </div>

        );

    }

    return (

        <div className="completed-interviews">

            <div className="section-header">

                <h2>

                    Completed Interviews

                </h2>

                <span>

                    {interviews.length}

                </span>

            </div>

            <div className="completed-list">

                {interviews.map((interview) => (

                    <InterviewCard

                        key={interview._id}

                        interview={interview}

                        completed

                    />

                ))}

            </div>

        </div>

    );

};

export default CompletedInterviews;