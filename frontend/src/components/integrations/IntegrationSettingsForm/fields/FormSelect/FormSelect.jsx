import "./FormSelect.css";

function FormSelect({

    label,

    name,

    value,

    options = [],

    placeholder = "Select",

    required = false,

    disabled = false,

    helperText = "",

    error = "",

    onChange

}) {

    return (

        <div className="integration-form-select">

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

            <select

                id={name}

                name={name}

                value={value}

                disabled={disabled}

                onChange={(e)=>

                    onChange?.(

                        name,

                        e.target.value

                    )

                }

                className={

                    error

                    ?

                    "select error"

                    :

                    "select"

                }

            >

                <option value="">

                    {placeholder}

                </option>

                {

                    options.map((option)=>(

                        <option

                            key={option.value}

                            value={option.value}

                            disabled={option.disabled}

                        >

                            {option.label}

                        </option>

                    ))

                }

            </select>

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

export default FormSelect;