import "./EmailNotifications.css";

import {

    FaEnvelope,

    FaSave

} from "react-icons/fa";

function EmailNotifications({

    settings,

    setSettings

}) {

    const handleToggle = (name) => {

        setSettings({

            ...settings,

            [name]: !settings[name]

        });

    };

    return (

        <div className="email-notifications">

            <div className="email-header">

                <div className="email-title">

                    <div className="email-icon">

                        <FaEnvelope />

                    </div>

                    <div>

                        <h2>

                            Email Notifications

                        </h2>

                        <p>

                            Control which email notifications your company receives.

                        </p>

                    </div>

                </div>
            </div>

            <div className="email-options">

                <div className="email-option">

                    <div>

                        <h4>

                            New Job Applications

                        </h4>

                        <p>

                            Receive an email whenever a candidate applies.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.applicationEmails ?? true}

                            onChange={() =>

                                handleToggle("applicationEmails")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="email-option">

                    <div>

                        <h4>

                            Interview Updates

                        </h4>

                        <p>

                            Email reminders for scheduled interviews.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.interviewEmails ?? true}

                            onChange={() =>

                                handleToggle("interviewEmails")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="email-option">

                    <div>

                        <h4>

                            Offer Letter Notifications

                        </h4>

                        <p>

                            Get notified after an offer is sent or accepted.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.offerEmails ?? true}

                            onChange={() =>

                                handleToggle("offerEmails")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="email-option">

                    <div>

                        <h4>

                            Certificate Updates

                        </h4>

                        <p>

                            Receive notifications when certificates are issued.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.certificateEmails ?? false}

                            onChange={() =>

                                handleToggle("certificateEmails")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="email-option">

                    <div>

                        <h4>

                            Team Activity

                        </h4>

                        <p>

                            Email updates when team members perform important actions.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.teamEmails ?? true}

                            onChange={() =>

                                handleToggle("teamEmails")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

            </div>

            <div className="email-footer">

                <button>

                    <FaSave />

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default EmailNotifications;