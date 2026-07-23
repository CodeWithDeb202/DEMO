import "./FormPassword.css";

import { useState } from "react";

import {

    FaEye,
    FaEyeSlash,
    FaCopy,
    FaCheck

} from "react-icons/fa";

function FormPassword({

    label,

    name,

    value = "",

    placeholder = "",

    required = false,

    disabled = false,

    readOnly = false,

    helperText = "",

    error = "",

    onChange

}) {

    const [showPassword, setShowPassword] = useState(false);

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {

        try {

            await navigator.clipboard.writeText(value);

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 2000);

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="integration-form-password">

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

                "password-wrapper error"

                :

                "password-wrapper"

            }>

                <input

                    id={name}

                    name={name}

                    type={

                        showPassword

                        ?

                        "text"

                        :

                        "password"

                    }

                    value={value}

                    placeholder={placeholder}

                    disabled={disabled}

                    readOnly={readOnly}

                    onChange={(e)=>

                        onChange?.(

                            name,

                            e.target.value

                        )

                    }

                />

                <button

                    type="button"

                    onClick={()=>

                        setShowPassword(

                            previous => !previous

                        )

                    }

                    disabled={disabled}

                >

                    {

                        showPassword

                        ?

                        <FaEyeSlash />

                        :

                        <FaEye />

                    }

                </button>

                <button

                    type="button"

                    onClick={handleCopy}

                    disabled={

                        disabled ||

                        !value

                    }

                >

                    {

                        copied

                        ?

                        <FaCheck />

                        :

                        <FaCopy />

                    }

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

export default FormPassword;