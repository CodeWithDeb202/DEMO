import "./FormInput.css";

function FormInput({

    label,

    name,

    value,

    placeholder = "",

    type = "text",

    required = false,

    disabled = false,

    error = "",

    helperText = "",

    onChange

}) {

    return (

        <div className="integration-form-input">

            {

                label && (

                    <label htmlFor={name}>

                        {label}

                        {

                            required &&

                            <span className="required">

                                *

                            </span>

                        }

                    </label>

                )

            }

            <input

                id={name}

                name={name}

                type={type}

                value={value ?? ""}

                placeholder={placeholder}

                disabled={disabled}

                onChange={(e) =>

                    onChange?.(

                        name,

                        e.target.value

                    )

                }

                className={

                    error

                        ? "input error"

                        : "input"

                }

            />

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

    );

}

export default FormInput;