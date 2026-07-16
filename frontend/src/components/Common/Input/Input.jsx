import "./Input.css";

function Input({

    label,

    type = "text",

    name,

    value,

    placeholder,

    onChange,

    error,

    icon,

    required = false,

    ...props

}) {

    return (

        <div className="input-group">

            {label && (

                <label className="input-label">

                    {label}

                    {required && <span>*</span>}

                </label>

            )}

            <div className="input-wrapper">

                {icon &&

                    <span className="input-icon">

                        {icon}

                    </span>

                }

                <input

                    type={type}

                    name={name}

                    value={value}

                    placeholder={placeholder}

                    onChange={onChange}

                    className={error ? "input error" : "input"}

                    {...props}

                />

            </div>

            {error &&

                <small className="input-error">

                    {error}

                </small>

            }

        </div>

    );

}

export default Input;