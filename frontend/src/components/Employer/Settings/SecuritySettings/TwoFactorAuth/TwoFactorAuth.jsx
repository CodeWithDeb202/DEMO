import "./TwoFactorAuth.css";

import { FaMobileAlt } from "react-icons/fa";

function TwoFactorAuth({

    settings,

    setSettings

}) {

    const handleToggle = () => {

        setSettings({

            ...settings,

            twoFactor: !settings.twoFactor

        });

    };

    return (

        <div className="two-factor-auth">

            <div className="two-factor-left">

                <div className="two-factor-icon">

                    <FaMobileAlt />

                </div>

                <div>

                    <h2>

                        Two-Factor Authentication

                    </h2>

                    <p>

                        Add an extra layer of security by requiring a verification code during login.

                    </p>
                </div>

            </div>

            <div className="two-factor-right">

                <label className="switch">

                    <input

                        type="checkbox"

                        checked={settings.twoFactor}

                        onChange={handleToggle}

                    />

                    <span className="slider"></span>

                </label>

                <span

                    className={`status ${

                        settings.twoFactor

                            ? "enabled"

                            : "disabled"

                    }`}

                >

                    {

                        settings.twoFactor

                            ? "Enabled"

                            : "Disabled"

                    }

                </span>

            </div>

        </div>

    );

}

export default TwoFactorAuth;