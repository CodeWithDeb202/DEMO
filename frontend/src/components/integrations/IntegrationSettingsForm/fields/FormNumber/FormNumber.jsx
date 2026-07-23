import "./FormNumber.css";

import { FaMinus, FaPlus } from "react-icons/fa";

function FormNumber({

    label,

    name,

    value = 0,

    min = 0,

    max = 999999,

    step = 1,

    placeholder = "",

    required = false,

    disabled = false,

    readOnly = false,

    helperText = "",

    error = "",

    onChange

}) {

    const updateValue = (newValue) => {

        let number = Number(newValue);

        if (Number.isNaN(number)) {

            number = min;

        }

        number = Math.max(min, Math.min(max, number));

        onChange?.(

            name,

            number

        );

    };

    const increase = () => {

        if (disabled || readOnly) return;

        updateValue(

            Number(value) + step

        );

    };

    const decrease = () => {

        if (disabled || readOnly) return;

        updateValue(

            Number(value) - step

        );

    };

    return (

        <div className="integration-form-number">

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

            <div className={

                error

                ?

                "number-wrapper error"

                :

                "number-wrapper"

            }>

                <button

                    type="button"

                    onClick={decrease}

                    disabled={

                        disabled ||

                        value <= min

                    }

                >

                    <FaMinus />

                </button>

                <input

                    id={name}

                    name={name}

                    type="number"

                    value={value}

                    min={min}

                    max={max}

                    step={step}

                    placeholder={placeholder}

                    disabled={disabled}

                    readOnly={readOnly}

                    onChange={(e)=>

                        updateValue(

                            e.target.value

                        )

                    }

                />

                <button

                    type="button"

                    onClick={increase}

                    disabled={

                        disabled ||

                        value >= max

                    }

                >

                    <FaPlus />

                </button>

            </div>

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

export default FormNumber;