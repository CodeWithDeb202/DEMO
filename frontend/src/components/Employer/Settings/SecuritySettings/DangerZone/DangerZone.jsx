import "./DangerZone.css";

import {

    FaTrashAlt,

    FaExclamationTriangle,

    FaSignOutAlt,

    FaBan,

    FaDownload

} from "react-icons/fa";

function DangerZone() {

    return (

        <div className="danger-zone">

            <div className="danger-zone-header">

                <FaExclamationTriangle />

                <div>

                    <h2>

                        Danger Zone

                    </h2>

                    <p>

                        Sensitive account actions. These operations cannot be easily undone.

                    </p>

                </div>

            </div>

            <div className="danger-actions">

                <div className="danger-card">

                    <div>

                        <h3>

                            Logout From All Devices

                        </h3>

                        <p>

                            Immediately sign out from every active device except the current one.

                        </p>

                    </div>

                    <button className="logout-btn">

                        <FaSignOutAlt />

                        Logout All

                    </button>

                </div>

                <div className="danger-card">

                    <div>

                        <h3>

                            Download Company Data

                        </h3>

                        <p>

                            Export employer profile, internships, applications and reports.

                        </p>

                    </div>

                    <button className="download-btn">

                        <FaDownload />

                        Export Data

                    </button>

                </div>

                <div className="danger-card">

                    <div>

                        <h3>

                            Suspend Company Account

                        </h3>

                        <p>

                            Temporarily disable company access until manually reactivated.

                        </p>

                    </div>

                    <button className="suspend-btn">

                        <FaBan />

                        Suspend

                    </button>

                </div>

                <div className="danger-card delete">

                    <div>

                        <h3>

                            Delete Company Account

                        </h3>

                        <p>

                            Permanently delete your company, internships, team members, reports and all related data.

                        </p>

                    </div>

                    <button className="delete-btn">

                        <FaTrashAlt />

                        Delete Account

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DangerZone;