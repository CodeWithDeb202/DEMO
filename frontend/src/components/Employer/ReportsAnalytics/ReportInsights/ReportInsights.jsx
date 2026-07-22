import "./ReportInsights.css";

import {
    FaArrowTrendUp,
    FaArrowTrendDown,
    FaCircleCheck,
    FaTriangleExclamation,
    FaLightbulb
} from "react-icons/fa6";

function ReportInsights({

    insights = []

}) {

    const getIcon = (type) => {

        switch (type) {

            case "positive":

                return <FaArrowTrendUp />;

            case "negative":

                return <FaArrowTrendDown />;

            case "success":

                return <FaCircleCheck />;

            case "warning":

                return <FaTriangleExclamation />;

            default:

                return <FaLightbulb />;

        }

    };

    return (

        <div className="report-insights">

            <div className="report-insights-header">

                <h2>

                    AI Report Insights

                </h2>

                <p>

                    Smart recommendations generated from analytics

                </p>

            </div>

            <div className="report-insights-list">

                {

                    insights.map((item, index) => (

                        <div

                            key={item.id || index}

                            className={`insight-card ${item.type}`}

                        >

                            <div className="insight-icon">

                                {getIcon(item.type)}

                            </div>

                            <div className="insight-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.description}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default ReportInsights;