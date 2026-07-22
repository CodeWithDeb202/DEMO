import "./NotificationTemplates.css";

import {
    FaRegFileAlt,
    FaPen,
    FaTrash,
    FaCopy
} from "react-icons/fa";

function NotificationTemplates({

    templates = [],

    onUse,

    onEdit,

    onDelete

}) {

    return (

        <div className="notification-templates">

            <div className="notification-templates-header">

                <h2>

                    Notification Templates

                </h2>

            </div>

            {

                templates.length === 0 ? (

                    <div className="notification-template-empty">

                        No Templates Available

                    </div>

                ) : (

                    <div className="notification-template-grid">

                        {

                            templates.map((template) => (

                                <div

                                    key={template.id}

                                    className="notification-template-card"

                                >

                                    <div className="template-icon">

                                        <FaRegFileAlt />

                                    </div>

                                    <div className="template-content">

                                        <h3>

                                            {template.title}

                                        </h3>

                                        <p>

                                            {template.message}

                                        </p>

                                    </div>

                                    <div className="template-actions">

                                        <button

                                            className="use-btn"

                                            onClick={() =>

                                                onUse(template)

                                            }

                                        >

                                            <FaCopy />

                                            Use

                                        </button>

                                        <button

                                            className="edit-btn"

                                            onClick={() =>

                                                onEdit(template)

                                            }

                                        >

                                            <FaPen />

                                        </button>

                                        <button

                                            className="delete-btn"

                                            onClick={() =>

                                                onDelete(template)

                                            }

                                        >

                                            <FaTrash />

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default NotificationTemplates;