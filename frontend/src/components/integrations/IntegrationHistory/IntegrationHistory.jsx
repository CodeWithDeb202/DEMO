import "./IntegrationHistory.css";

import {

    FaCheckCircle,
    FaTimesCircle,
    FaClock

} from "react-icons/fa";

function IntegrationHistory({

    title = "Integration History",

    data = [],

    emptyMessage = "No history found."

}) {

    const getStatusClass = (status) => {

        switch (status) {

            case "SUCCESS":

                return "success";

            case "FAILED":

                return "failed";

            default:

                return "pending";

        }

    };

    const getStatusIcon = (status) => {

        switch (status) {

            case "SUCCESS":

                return <FaCheckCircle />;

            case "FAILED":

                return <FaTimesCircle />;

            default:

                return <FaClock />;

        }

    };

    return (

        <div className="integration-history">

            <div className="history-header">

                <h3>

                    {title}

                </h3>

            </div>

            {

                data.length === 0

                ?

                (

                    <div className="empty-history">

                        {emptyMessage}

                    </div>

                )

                :

                (

                    <table>

                        <thead>

                            <tr>

                                <th>Date</th>

                                <th>Action</th>

                                <th>Status</th>

                                <th>Message</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                data.map((item) => (

                                    <tr key={item.id}>

                                        <td>

                                            {item.date}

                                        </td>

                                        <td>

                                            {item.action}

                                        </td>

                                        <td>

                                            <span

                                                className={`status ${getStatusClass(item.status)}`}

                                            >

                                                {getStatusIcon(item.status)}

                                                {item.status}

                                            </span>

                                        </td>

                                        <td>

                                            {item.message}

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                )

            }

        </div>

    );

}

export default IntegrationHistory;