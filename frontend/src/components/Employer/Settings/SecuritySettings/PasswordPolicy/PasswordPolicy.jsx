import "./PasswordPolicy.css";

function PasswordPolicy({

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

        <div className="password-policy">

            <div className="password-policy-header">

                <h2>

                    Password Policy

                </h2>

                <p>

                    Configure password security rules for your organization.

                </p>

            </div>

            <div className="password-policy-grid">

                <div className="policy-item">

                    <label>

                        Minimum Password Length

                    </label>

                    <input

                        type="number"

                        name="minLength"

                        min="6"

                        max="32"

                        value={settings.minLength || 8}

                        onChange={handleChange}

                    />

                </div>

                <div className="policy-item">

                    <label>

                        Password Expiry (Days)

                    </label>

                    <input

                        type="number"

                        name="passwordExpiry"

                        min="0"

                        value={settings.passwordExpiry}

                        onChange={handleChange}

                    />

                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="requireUppercase"

                            checked={settings.requireUppercase || false}

                            onChange={handleChange}

                        />

                        Require Uppercase Letter

                    </label>
                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="requireLowercase"

                            checked={settings.requireLowercase || false}

                            onChange={handleChange}

                        />

                        Require Lowercase Letter

                    </label>
                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="requireNumber"

                            checked={settings.requireNumber || false}

                            onChange={handleChange}

                        />

                        Require Number

                    </label>
                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="requireSpecialCharacter"

                            checked={settings.requireSpecialCharacter || false}

                            onChange={handleChange}

                        />

                        Require Special Character

                    </label>
                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="preventReuse"

                            checked={settings.preventReuse || false}

                            onChange={handleChange}

                        />

                        Prevent Password Reuse

                    </label>
                </div>

                <div className="policy-toggle">

                    <label>

                        <input

                            type="checkbox"

                            name="forceReset"

                            checked={settings.forceReset || false}

                            onChange={handleChange}

                        />

                        Force Password Reset on First Login

                    </label>
                </div>

            </div>

            <div className="password-policy-footer">

                <button>

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default PasswordPolicy;