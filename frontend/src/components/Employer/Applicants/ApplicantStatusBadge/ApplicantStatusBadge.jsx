import "./ApplicantStatusBadge.css";

const ApplicantStatusBadge = ({ status }) => {

    const getClassName = () => {

        switch (status) {

            case "Applied":
                return "applicant-status applied";

            case "Shortlisted":
                return "applicant-status shortlisted";

            case "Interview Scheduled":
                return "applicant-status interview";

            case "Hired":
                return "applicant-status hired";

            case "Rejected":
                return "applicant-status rejected";

            default:
                return "applicant-status";

        }

    };

    return (

        <span className={getClassName()}>

            {status || "Unknown"}

        </span>

    );

};

export default ApplicantStatusBadge;