import "./CertificateHistory.css";

import {
    FaClock,
    FaUser,
    FaCertificate,
    FaPen,
    FaDownload,
    FaPaperPlane,
    FaTrash,
    FaCheckCircle
} from "react-icons/fa";

function CertificateHistory({

    history = []

}) {

    const getIcon = (type) => {

        switch (type) {

            case "issued":
                return <FaCertificate />;

            case "updated":
                return <FaPen />;

            case "downloaded":
                return <FaDownload />;

            case "emailed":
                return <FaPaperPlane />;

            case "deleted":
                return <FaTrash />;

            case "verified":
                return <FaCheckCircle />;

            default:
                return <FaClock />;
        }

    };

    return (

        <div className="certificate-history">

            <h2>

                Certificate Activity

            </h2>

            <div className="certificate-history-list">

                {

                    history.map((item) => (

                        <div

                            className="certificate-history-item"

                            key={item.id}

                        >

                            <div className="certificate-history-icon">

                                {getIcon(item.type)}

                            </div>

                            <div className="certificate-history-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.description}

                                </p>

                                <div className="certificate-history-meta">

                                    <span>

                                        <FaUser />

                                        {item.user}

                                    </span>

                                    <span>

                                        <FaClock />

                                        {item.time}

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default CertificateHistory;