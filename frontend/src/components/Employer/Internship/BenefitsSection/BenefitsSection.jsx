import "./BenefitsSection.css";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const BenefitsSection = ({ register, setValue, watch, errors }) => {

    const [input, setInput] = useState("");

    const benefits = watch("benefits") || [];

    const addBenefit = () => {

        const value = input.trim();

        if (!value) return;

        if (benefits.includes(value)) return;

        setValue(
            "benefits",
            [...benefits, value],
            { shouldValidate: true }
        );

        setInput("");

    };

    const removeBenefit = (index) => {

        setValue(
            "benefits",
            benefits.filter((_, i) => i !== index),
            { shouldValidate: true }
        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            addBenefit();

        }

    };

    return (

        <section className="benefits-section">

            <div className="section-title">
                <h2>Internship Benefits</h2>
                <p>Add the benefits and perks offered to interns.</p>
            </div>

            <div className="input-wrapper">

                <input
                    type="text"
                    placeholder="Example: Certificate of Completion"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    type="button"
                    onClick={addBenefit}
                >
                    <FaPlus />
                    Add
                </button>

            </div>

            <input
                type="hidden"
                {...register("benefits")}
            />

            <span className="error">
                {errors.benefits?.message}
            </span>

            <div className="benefit-list">

                {benefits.length === 0 && (
                    <div className="empty-state">
                        No benefits added.
                    </div>
                )}

                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="benefit-item"
                    >

                        <div className="benefit-text">
                            {index + 1}. {item}
                        </div>

                        <button
                            type="button"
                            onClick={() => removeBenefit(index)}
                        >
                            <FaTrash />
                        </button>

                    </div>
                ))}

            </div>

        </section>

    );

};

export default BenefitsSection;