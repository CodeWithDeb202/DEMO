import "./ApplicationTimeline.css";
import {
    FaPaperPlane,
    FaUserCheck,
    FaCalendarAlt,
    FaAward,
    FaTimesCircle
} from "react-icons/fa";

const ApplicationTimeline = ({ applicant }) => {

    const timeline = applicant.timeline || [];

    const getIcon = (type) => {

        switch (type) {

            case "Applied":
                return <FaPaperPlane />;

            case "Shortlisted":
                return <FaUserCheck />;

            case "Interview":
                return <FaCalendarAlt />;

            case "Hired":
                return <FaAward />;

            case "Rejected":
                return <FaTimesCircle />;

            default:
                return <FaPaperPlane />;

        }

    };

    return (

        <div className="application-timeline">

            <h3>Application Timeline</h3>

            {timeline.length === 0 && (

                <div className="timeline-empty">

                    No application activity found.

                </div>

            )}

            {timeline.map((item, index) => (

                <div
                    key={index}
                    className="timeline-item"
                >

                    <div className="timeline-icon">

                        {getIcon(item.type)}

                    </div>

                    <div className="timeline-content">

                        <h4>

                            {item.title}

                        </h4>

                        <p>

                            {item.description}

                        </p>

                        <span>

                            {new Date(item.date).toLocaleString()}

                        </span>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ApplicationTimeline;