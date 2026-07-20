import "./ResponsibilitiesSection.css";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const ResponsibilitiesSection = ({ register, setValue, watch, errors }) => {

    const [input, setInput] = useState("");

    const responsibilities = watch("responsibilities") || [];

    const addResponsibility = () => {

        const value = input.trim();

        if (!value) return;

        if (responsibilities.includes(value)) return;

        setValue(
            "responsibilities",
            [...responsibilities, value],
            { shouldValidate: true }
        );

        setInput("");

    };

    const removeResponsibility = (index) => {

        setValue(
            "responsibilities",
            responsibilities.filter((_, i) => i !== index),
            { shouldValidate: true }
        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            addResponsibility();

        }

    };

    return (

        <section className="responsibilities-section">

            <div className="section-title">
                <h2>Responsibilities</h2>
                <p>Add the key responsibilities for this internship.</p>
            </div>

            <div className="input-wrapper">

                <input
                    type="text"
                    placeholder="Example: Build responsive React components"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    onClick={addResponsibility}
                >
                    <FaPlus />
                    Add
                </button>

            </div>

            <input
                type="hidden"
                {...register("responsibilities")}
            />

            <span className="error">
                {errors.responsibilities?.message}
            </span>

            <div className="responsibility-list">

                {responsibilities.length === 0 && (
                    <div className="empty-state">
                        No responsibilities added.
                    </div>
                )}

                {responsibilities.map((item, index) => (
                    <div
                        className="responsibility-item"
                        key={index}
                    >

                        <div className="responsibility-text">
                            {index + 1}. {item}
                        </div>

                        <button
                            type="button"
                            onClick={() => removeResponsibility(index)}
                        >
                            <FaTrash />
                        </button>

                    </div>
                ))}

            </div>

        </section>

    );

};

export default ResponsibilitiesSection;