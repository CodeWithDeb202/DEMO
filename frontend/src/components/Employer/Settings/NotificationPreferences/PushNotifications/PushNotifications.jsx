import "./PushNotifications.css";

import {

    FaBell,

    FaSave

} from "react-icons/fa";

function PushNotifications({

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

        <div className="push-notifications">

            <div className="push-header">

                <div className="push-title">

                    <div className="push-icon">

                        <FaBell />

                    </div>

                    <div>

                        <h2>

                            Push Notifications

                        </h2>

                        <p>

                            Receive instant browser and mobile push notifications.

                        </p>

                    </div>

                </div>

            </div>

            <div className="push-options">

                <div className="push-option">

                    <div>

                        <h4>

                            New Applications

                        </h4>

                        <p>

                            Notify instantly when a new application arrives.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.pushApplications ?? true}

                            onChange={() =>

                                handleToggle("pushApplications")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="push-option">

                    <div>

                        <h4>

                            Interview Reminders

                        </h4>

                        <p>

                            Get reminders before scheduled interviews.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.pushInterviews ?? true}

                            onChange={() =>

                                handleToggle("pushInterviews")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="push-option">

                    <div>

                        <h4>

                            Offer Updates

                        </h4>

                        <p>

                            Receive notifications for offer acceptance or rejection.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.pushOffers ?? true}

                            onChange={() =>

                                handleToggle("pushOffers")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="push-option">

                    <div>

                        <h4>

                            Team Activity

                        </h4>

                        <p>

                            Notify when HR or recruiters perform important actions.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.pushTeam ?? false}

                            onChange={() =>

                                handleToggle("pushTeam")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="push-option">

                    <div>

                        <h4>

                            Security Alerts

                        </h4>

                        <p>

                            Receive alerts for suspicious login attempts and account changes.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.pushSecurity ?? true}

                            onChange={() =>

                                handleToggle("pushSecurity")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

            </div>

            <div className="push-footer">

                <button>

                    <FaSave />

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default PushNotifications;