import "./TemplateList.css";

import {

    FaEnvelope,

    FaSearch,

    FaPlus,

    FaEdit,

    FaCopy,

    FaTrash,

    FaEye,

    FaEllipsisV

} from "react-icons/fa";

function TemplateList() {

    const templates = [

        {

            id: 1,

            name: "Welcome Email",

            category: "Onboarding",

            status: "Active",

            updated: "2 hours ago"

        },

        {

            id: 2,

            name: "Application Received",

            category: "Recruitment",

            status: "Active",

            updated: "Yesterday"

        },

        {

            id: 3,

            name: "Interview Invitation",

            category: "Interview",

            status: "Active",

            updated: "3 days ago"

        },

        {

            id: 4,

            name: "Interview Reminder",

            category: "Interview",

            status: "Draft",

            updated: "5 days ago"

        },

        {

            id: 5,

            name: "Offer Letter",

            category: "Hiring",

            status: "Active",

            updated: "1 week ago"

        },

        {

            id: 6,

            name: "Rejection Email",

            category: "Hiring",

            status: "Active",

            updated: "1 week ago"

        },

        {

            id: 7,

            name: "Certificate Issued",

            category: "Certificate",

            status: "Active",

            updated: "2 weeks ago"

        },

        {

            id: 8,

            name: "Password Reset",

            category: "Security",

            status: "Active",

            updated: "2 weeks ago"

        }

    ];

    return (

        <div className="template-list">

            <div className="template-header">

                <div>

                    <h2>

                        Email Templates

                    </h2>

                    <p>

                        Manage all email templates used by your company.

                    </p>

                </div>

                <button>

                    <FaPlus />

                    New Template

                </button>

            </div>

            <div className="template-toolbar">

                <div className="template-search">

                    <FaSearch />

                    <input

                        type="text"

                        placeholder="Search template..."

                    />

                </div>

            </div>

            <div className="template-table">

                {

                    templates.map((item) => (

                        <div

                            key={item.id}

                            className="template-row"

                        >

                            <div className="template-info">

                                <div className="template-icon">

                                    <FaEnvelope />

                                </div>

                                <div>

                                    <h4>

                                        {item.name}

                                    </h4>

                                    <p>

                                        {item.category}

                                    </p>

                                </div>

                            </div>

                            <span className={`status ${item.status.toLowerCase()}`}>

                                {item.status}

                            </span>

                            <span className="updated">

                                {item.updated}

                            </span>

                            <div className="actions">

                                <button>

                                    <FaEye />

                                </button>

                                <button>

                                    <FaEdit />

                                </button>

                                <button>

                                    <FaCopy />

                                </button>

                                <button>

                                    <FaTrash />

                                </button>

                                <button>

                                    <FaEllipsisV />

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TemplateList;