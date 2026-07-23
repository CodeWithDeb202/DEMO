import "./FormCheckbox.css";

function FormCheckbox({

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

        <div className="integration-form-checkbox">

            <label className="checkbox-wrapper">

                <input

                    type="checkbox"

                    checked={checked}

                    disabled={disabled}

                    onChange={handleChange}

                />

                <span className="custom-checkbox"></span>

                <div className="checkbox-content">

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

            </label>

            {

                error && (

                    <small className="error-text">

                        {error}

                    </small>

                )

            }

        </div>

    );

}

export default FormCheckbox;