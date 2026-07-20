import "./OfferStats.css";

import {
  FaFileSignature,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function OfferStats() {
  const stats = [
    {
      title: "Total Offers",
      value: 148,
      icon: <FaFileSignature />,
      color: "#2563eb",
    },
    {
      title: "Issued",
      value: 112,
      icon: <FaPaperPlane />,
      color: "#0ea5e9",
    },
    {
      title: "Accepted",
      value: 83,
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Rejected",
      value: 29,
      icon: <FaTimesCircle />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="offer-stats">

      {stats.map((item, index) => (

        <div
          className="offer-stat-card"
          key={index}
        >

          <div
            className="offer-stat-icon"
            style={{
              background: item.color,
            }}
          >
            {item.icon}
          </div>

          <div className="offer-stat-content">
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>

        </div>

      ))}

    </div>
  );
}

export default OfferStats;