

import "./OfferHistory.css";

import {
    FaClock,
    FaUser,
    FaCheckCircle,
    FaTimesCircle,
    FaFilePdf,
    FaPen,
    FaPaperPlane
} from "react-icons/fa";

function OfferHistory({ history = [] }) {

    const getIcon = (type) => {

        switch (type) {

            case "created":
                return <FaPaperPlane />;

            case "updated":
                return <FaPen />;

            case "accepted":
                return <FaCheckCircle />;

            case "rejected":
                return <FaTimesCircle />;

            case "downloaded":
                return <FaFilePdf />;

            default:
                return <FaClock />;
        }

    };

    return (

        <div className="offer-history">

            <h2>

                Offer History

            </h2>

            <div className="history-list">

                {

                    history.map((item) => (

                        <div

                            className="history-item"

                            key={item.id}

                        >

                            <div className="history-icon">

                                {getIcon(item.type)}

                            </div>

                            <div className="history-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.description}

                                </p>

                                <div className="history-meta">

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

export default OfferHistory;