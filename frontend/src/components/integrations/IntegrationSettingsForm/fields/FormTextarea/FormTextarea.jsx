import "./FormTextarea.css";

function FormTextarea({

    label,

    name,

    value = "",

    placeholder = "",

    rows = 4,

    required = false,

    disabled = false,

    readOnly = false,

    helperText = "",

    error = "",

    maxLength,

    showCounter = false,

    onChange

}) {

    const handleChange = (event) => {

        onChange?.(

            name,

            event.target.value

        );

    };

    return (

        <div className="integration-form-textarea">

            {

                label && (

                    <label htmlFor={name}>

                        {label}

                        {

                            required && (

                                <span className="required">

                                    *

                                </span>

                            )

                        }

                    </label>

                )

            }

            <textarea

                id={name}

                name={name}

                rows={rows}

                value={value}

                placeholder={placeholder}

                disabled={disabled}

                readOnly={readOnly}

                maxLength={maxLength}

                onChange={handleChange}

                className={

                    error

                        ?

                        "textarea error"

                        :

                        "textarea"

                }

            />

            <div className="textarea-footer">

                <div>

                    {

                        helperText && (

                            <small className="helper">

                                {helperText}

                            </small>

                        )

                    }

                    {

                        error && (

                            <small className="error-text">

                                {error}

                            </small>

                        )

                    }

                </div>

                {

                    showCounter && maxLength && (

                        <small className="counter">

                            {value.length}/{maxLength}

                        </small>

                    )

                }

            </div>

        </div>

    );

}

export default FormTextarea;