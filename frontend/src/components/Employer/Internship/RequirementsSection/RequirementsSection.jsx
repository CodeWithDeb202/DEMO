import "./RequirementsSection.css";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const RequirementsSection = ({ register, setValue, watch, errors }) => {

    const [input, setInput] = useState("");

    const requirements = watch("requirements") || [];

    const addRequirement = () => {

        const value = input.trim();

        if (!value) return;

        if (requirements.includes(value)) return;

        setValue(
            "requirements",
            [...requirements, value],
            { shouldValidate: true }
        );

        setInput("");

    };

    const removeRequirement = (index) => {

        setValue(
            "requirements",
            requirements.filter((_, i) => i !== index),
            { shouldValidate: true }
        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            addRequirement();

        }

    };

    return (

        <section className="requirements-section">

            <div className="section-title">
                <h2>Requirements</h2>
                <p>Add the qualifications and requirements for applicants.</p>
            </div>

            <div className="input-wrapper">

                <input
                    type="text"
                    placeholder="Example: Good knowledge of React.js"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    onClick={addRequirement}
                >

                    <FaPlus />

                    Add

                </button>

            </div>

            <input
                type="hidden"
                {...register("requirements")}
            />

            <span className="error">
                {errors.requirements?.message}
            </span>

            <div className="requirement-list">

                {requirements.length === 0 && (

                    <div className="empty-state">
                        No requirements added.
                    </div>

                )}

                {requirements.map((item, index) => (

                    <div
                        key={index}
                        className="requirement-item"
                    >

                        <div className="requirement-text">
                            {index + 1}. {item}
                        </div>

                        <button
                            type="button"
                            onClick={() => removeRequirement(index)}
                        >

                            <FaTrash />

                        </button>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default RequirementsSection;