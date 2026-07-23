import "./FormSwitch.css";

function FormSwitch({

    label,

    name,

    checked = false,

    description = "",

    disabled = false,

    error = "",

    onChange

}) {

    const handleChange = () => {

        if (disabled) return;

        onChange?.(

            name,

            !checked

        );

    };

    return (

        <div className="integration-form-switch">

            <div className="switch-content">

                <div>

                    {

                        label &&

                        <h4>

                            {label}

                        </h4>

                    }

                    {

                        description &&

                        <p>

                            {description}

                        </p>

                    }

                </div>

                <button

                    type="button"

                    className={

                        `switch ${checked ? "active" : ""}`

                    }

                    onClick={handleChange}

                    disabled={disabled}

                    aria-pressed={checked}

                >

                    <span className="slider"></span>

                </button>

            </div>

            {

                error &&

                <small className="error-text">

                    {error}

                </small>

            }

        </div>

    );

}

export default FormSwitch;