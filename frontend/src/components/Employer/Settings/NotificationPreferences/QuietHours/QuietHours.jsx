import "./QuietHours.css";

import { FaMoon, FaSave } from "react-icons/fa";

function QuietHours({

    settings,

    setSettings

}) {

    const handleChange = (e) => {

        const {

            name,

            value,

            checked,

            type

        } = e.target;

        setSettings({

            ...settings,

            [name]:

                type === "checkbox"

                    ? checked

                    : value

        });

    };

    return (

        <div className="quiet-hours">

            <div className="quiet-header">

                <div className="quiet-title">

                    <div className="quiet-icon">

                        <FaMoon />

                    </div>

                    <div>

                        <h2>

                            Quiet Hours

                        </h2>

                        <p>

                            Pause non-critical notifications during specific hours.

                        </p>

                    </div>

                </div>

            </div>

            <div className="quiet-content">

                <div className="quiet-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="quietHours"

                            checked={settings.quietHours}

                            onChange={handleChange}

                        />

                        Enable Quiet Hours

                    </label>

                </div>

                <div className="quiet-time-grid">

                    <div>

                        <label>

                            Start Time

                        </label>

                        <input

                            type="time"

                            name="quietStart"

                            value={

                                settings.quietStart ||

                                "22:00"

                            }

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                        <label>

                            End Time

                        </label>

                        <input

                            type="time"

                            name="quietEnd"

                            value={

                                settings.quietEnd ||

                                "07:00"

                            }

                            onChange={handleChange}

                        />

                    </div>

                </div>

                <div className="quiet-options">

                    <label>

                        <input

                            type="checkbox"

                            name="allowSecurityAlerts"

                            checked={

                                settings.allowSecurityAlerts ??

                                true

                            }

                            onChange={handleChange}

                        />

                        Allow Security Alerts

                    </label>

                    <label>

                        <input

                            type="checkbox"

                            name="allowInterviewAlerts"

                            checked={

                                settings.allowInterviewAlerts ??

                                true

                            }

                            onChange={handleChange}

                        />

                        Allow Interview Notifications

                    </label>

                    <label>

                        <input

                            type="checkbox"

                            name="allowEmergency"

                            checked={

                                settings.allowEmergency ??

                                true

                            }

                            onChange={handleChange}

                        />

                        Allow Emergency Notifications

                    </label>

                    <label>

                        <input

                            type="checkbox"

                            name="muteMarketing"

                            checked={

                                settings.muteMarketing ??

                                true

                            }

                            onChange={handleChange}

                        />

                        Mute Marketing Notifications

                    </label>

                </div>

            </div>

            <div className="quiet-footer">

                <button>

                    <FaSave />

                    Save Quiet Hours

                </button>

            </div>

        </div>

    );

}

export default QuietHours;