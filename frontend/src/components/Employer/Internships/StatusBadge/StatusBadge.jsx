import "./StatusBadge.css";

const StatusBadge = ({ status }) => {

    const badgeClass = () => {

        switch (status) {

            case "Published":
                return "status-badge published";

            case "Draft":
                return "status-badge draft";

            case "Closed":
                return "status-badge closed";

            case "Expired":
                return "status-badge expired";

            default:
                return "status-badge";

        }

    };

    return (

        <span className={badgeClass()}>

            {status || "Unknown"}

        </span>

    );

};

export default StatusBadge;