import "./NotificationSettings.css";

function NotificationSettings({

    settings,

    onChange,

    onSave

}) {

    return (

        <div className="notification-settings">

            <div className="notification-settings-header">

                <h2>

                    Notification Settings

                </h2>

            </div>

            <div className="settings-list">

                <div className="setting-item">

                    <div>

                        <h4>

                            Email Notifications

                        </h4>

                        <p>

                            Enable or disable email notifications.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.email}

                            onChange={(e) =>

                                onChange({

                                    ...settings,

                                    email: e.target.checked

                                })

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="setting-item">

                    <div>

                        <h4>

                            Push Notifications

                        </h4>

                        <p>

                            Receive browser push notifications.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.push}

                            onChange={(e) =>

                                onChange({

                                    ...settings,

                                    push: e.target.checked

                                })

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="setting-item">

                    <div>

                        <h4>

                            SMS Notifications

                        </h4>

                        <p>

                            Send SMS alerts to users.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.sms}

                            onChange={(e) =>

                                onChange({

                                    ...settings,

                                    sms: e.target.checked

                                })

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                <div className="setting-item">

                    <div>

                        <h4>

                            Weekly Report

                        </h4>

                        <p>

                            Receive weekly notification summary.

                        </p>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={settings.weeklyReport}

                            onChange={(e) =>

                                onChange({

                                    ...settings,

                                    weeklyReport: e.target.checked

                                })

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

            </div>

            <div className="notification-settings-footer">

                <button

                    onClick={onSave}

                >

                    Save Settings

                </button>

            </div>

        </div>

    );

}

export default NotificationSettings;