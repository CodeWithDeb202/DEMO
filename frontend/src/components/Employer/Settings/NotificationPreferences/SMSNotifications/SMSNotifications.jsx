import "./SMSNotifications.css";

import {

    FaMobileAlt,

    FaSave

} from "react-icons/fa";

function SMSNotifications({

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

        <div className="sms-notifications">

            <div className="sms-header">

                <div className="sms-title">

                    <div className="sms-icon">

                        <FaMobileAlt />

                    </div>

                    <div>

                        <h2>

                            SMS Notifications

                        </h2>

                        <p>

                            Receive important alerts directly on your registered mobile number.

                        </p>

                    </div>

                </div>

            </div>

            <div className="sms-options">

                <div className="sms-option">

                    <div>

                        <h4>

                            OTP Verification

                        </h4>

                        <p>

                            Receive OTPs for secure login and verification.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.smsOtp ?? true}

                            onChange={() =>

                                handleToggle("smsOtp")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="sms-option">

                    <div>

                        <h4>

                            Interview Reminders

                        </h4>

                        <p>

                            Get SMS reminders before scheduled interviews.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.smsInterview ?? false}

                            onChange={() =>

                                handleToggle("smsInterview")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="sms-option">

                    <div>

                        <h4>

                            Offer Acceptance

                        </h4>

                        <p>

                            Receive SMS when candidates accept an offer.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.smsOffer ?? false}

                            onChange={() =>

                                handleToggle("smsOffer")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="sms-option">

                    <div>

                        <h4>

                            Security Alerts

                        </h4>

                        <p>

                            Get SMS alerts for suspicious account activities.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.smsSecurity ?? true}

                            onChange={() =>

                                handleToggle("smsSecurity")

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

            </div>

            <div className="sms-footer">

                <button>

                    <FaSave />

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default SMSNotifications;