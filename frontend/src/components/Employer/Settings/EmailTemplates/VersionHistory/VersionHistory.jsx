import "./VersionHistory.css";

import {

    FaHistory,

    FaUser,

    FaEye,

    FaUndo,

    FaDownload,

    FaCodeBranch,

    FaCheckCircle

} from "react-icons/fa";

function VersionHistory() {

    const versions = [

        {

            id: 1,

            version: "v2.4.0",

            template: "Interview Invitation",

            author: "HR Admin",

            action: "Published",

            date: "22 Jul 2026 • 09:45 AM",

            current: true

        },

        {

            id: 2,

            version: "v2.3.1",

            template: "Interview Invitation",

            author: "Recruiter",

            action: "Updated",

            date: "20 Jul 2026 • 04:20 PM",

            current: false

        },

        {

            id: 3,

            version: "v2.3.0",

            template: "Offer Letter",

            author: "HR Manager",

            action: "Published",

            date: "18 Jul 2026 • 10:15 AM",

            current: false

        },

        {

            id: 4,

            version: "v2.2.4",

            template: "Welcome Email",

            author: "Admin",

            action: "Draft Saved",

            date: "15 Jul 2026 • 07:30 PM",

            current: false

        },

        {

            id: 5,

            version: "v2.2.0",

            template: "Certificate Issued",

            author: "System",

            action: "Generated",

            date: "12 Jul 2026 • 02:10 PM",

            current: false

        }

    ];

    return (

        <div className="version-history">

            <div className="version-header">

                <div>

                    <h2>

                        Version History

                    </h2>

                    <p>

                        Track every change made to your email templates.

                    </p>

                </div>

                <button>

                    <FaDownload />

                    Export History

                </button>

            </div>

            <div className="version-list">

                {

                    versions.map((item)=>(

                        <div

                            key={item.id}

                            className="version-card"

                        >

                            <div className="version-left">

                                <div className="version-icon">

                                    <FaCodeBranch />

                                </div>

                                <div>

                                    <h3>

                                        {item.version}

                                        {

                                            item.current &&

                                            <span className="current">

                                                <FaCheckCircle />

                                                Current

                                            </span>

                                        }

                                    </h3>

                                    <p>

                                        {item.template}

                                    </p>

                                    <small>

                                        <FaUser />

                                        {item.author}

                                    </small>

                                </div>

                            </div>

                            <div className="version-middle">

                                <span>

                                    {item.action}

                                </span>

                                <small>

                                    {item.date}

                                </small>

                            </div>

                            <div className="version-actions">

                                <button>

                                    <FaEye />

                                    View

                                </button>

                                <button>

                                    <FaUndo />

                                    Restore

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default VersionHistory;