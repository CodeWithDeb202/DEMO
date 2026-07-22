import "./InAppNotifications.css";

import {

    FaDesktop,

    FaSave

} from "react-icons/fa";

function InAppNotifications({

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

        <div className="inapp-notifications">

            <div className="inapp-header">

                <div className="inapp-title">

                    <div className="inapp-icon">

                        <FaDesktop />

                    </div>

                    <div>

                        <h2>

                            In-App Notifications

                        </h2>

                        <p>

                            Manage notifications displayed inside the employer dashboard.

                        </p>

                    </div>

                </div>

            </div>

            <div className="inapp-options">

                <div className="inapp-option">

                    <div>

                        <h4>

                            New Applications

                        </h4>

                        <p>

                            Show notifications when candidates apply.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.inAppApplications ?? true}

                            onChange={() =>

                                handleToggle("inAppApplications")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="inapp-option">

                    <div>

                        <h4>

                            Interview Notifications

                        </h4>

                        <p>

                            Notify when interviews are scheduled or updated.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.inAppInterviews ?? true}

                            onChange={() =>

                                handleToggle("inAppInterviews")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="inapp-option">

                    <div>

                        <h4>

                            Team Activities

                        </h4>

                        <p>

                            Display notifications for recruiter and HR activities.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.inAppTeam ?? true}

                            onChange={() =>

                                handleToggle("inAppTeam")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="inapp-option">

                    <div>

                        <h4>

                            Reports & Analytics

                        </h4>

                        <p>

                            Notify when reports are generated and ready.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.inAppReports ?? false}

                            onChange={() =>

                                handleToggle("inAppReports")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="inapp-option">

                    <div>

                        <h4>

                            Security Alerts

                        </h4>

                        <p>

                            Show alerts for login attempts and security events.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.inAppSecurity ?? true}

                            onChange={() =>

                                handleToggle("inAppSecurity")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

            </div>

            <div className="inapp-footer">

                <button>

                    <FaSave />

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default InAppNotifications;