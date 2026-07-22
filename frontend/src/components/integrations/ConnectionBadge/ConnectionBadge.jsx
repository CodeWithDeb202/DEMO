import "./ConnectionBadge.css";

import {

    FaCheckCircle,
    FaTimesCircle,
    FaSpinner,
    FaExclamationTriangle,
    FaLock

} from "react-icons/fa";

const STATUS = {

    CONNECTED: {

        icon: <FaCheckCircle />,

        text: "Connected",

        className: "connected"

    },

    DISCONNECTED: {

        icon: <FaTimesCircle />,

        text: "Disconnected",

        className: "disconnected"

    },

    CONNECTING: {

        icon: <FaSpinner className="spin" />,

        text: "Connecting",

        className: "connecting"

    },

    FAILED: {

        icon: <FaExclamationTriangle />,

        text: "Failed",

        className: "failed"

    },

    EXPIRED: {

        icon: <FaExclamationTriangle />,

        text: "Token Expired",

        className: "expired"

    },

    UNAUTHORIZED: {

        icon: <FaLock />,

        text: "Unauthorized",

        className: "unauthorized"

    }

};

function ConnectionBadge({

    status = "DISCONNECTED",

    size = "md"

}) {

    const badge =

        STATUS[status] ||

        STATUS.DISCONNECTED;

    return (

        <span

            className={

                `connection-badge ${badge.className} ${size}`

            }

        >

            {badge.icon}

            {badge.text}

        </span>

    );

}

export default ConnectionBadge;