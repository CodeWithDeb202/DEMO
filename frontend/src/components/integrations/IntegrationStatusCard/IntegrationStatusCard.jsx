import "./IntegrationStatusCard.css";

import {

    FaCheckCircle,
    FaTimesCircle,
    FaSyncAlt,
    FaLink,
    FaUnlink,
    FaClock,
    FaUser

} from "react-icons/fa";

function IntegrationStatusCard({

    title,

    provider,

    account,

    accountType,

    connected,

    lastSync,

    loading = false,

    onConnect,

    onDisconnect,

    onRefresh

}) {

    return (

        <div className="integration-status-card">

            <div className="status-header">

                <div>

                    <h3>{title}</h3>

                    <p>{provider}</p>
                </div>

                <span

                    className={

                        connected

                        ? "badge success"

                        : "badge danger"

                    }

                >

                    {

                        connected

                        ?

                        <FaCheckCircle />

                        :

                        <FaTimesCircle />

                    }

                    {

                        connected

                        ?

                        "Connected"

                        :

                        "Disconnected"

                    }

                </span>

            </div>

            <div className="status-body">

                <div className="status-item">

                    <FaUser />

                    <span>

                        {account || "-"}

                    </span>

                </div>

                <div className="status-item">

                    <FaLink />

                    <span>

                        {accountType || "-"}

                    </span>

                </div>

                <div className="status-item">

                    <FaClock />

                    <span>

                        {lastSync || "Never"}

                    </span>

                </div>

            </div>

            <div className="status-footer">

                {

                    connected

                    ?

                    <button

                        onClick={onDisconnect}

                        disabled={loading}

                        className="disconnect-btn"

                    >

                        <FaUnlink />

                        Disconnect

                    </button>

                    :

                    <button

                        onClick={onConnect}

                        disabled={loading}

                        className="connect-btn"

                    >

                        <FaLink />

                        Connect

                    </button>

                }

                <button

                    onClick={onRefresh}

                    disabled={loading}

                    className="refresh-btn"

                >

                    <FaSyncAlt />

                    Refresh

                </button>

            </div>

        </div>

    );

}

export default IntegrationStatusCard;