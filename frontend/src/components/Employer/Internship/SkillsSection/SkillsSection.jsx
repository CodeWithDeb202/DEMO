import "./SkillsSection.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SkillsSection = ({ register, setValue, watch, errors }) => {

    const [input, setInput] = useState("");

    const skills = watch("skills") || [];

    const addSkill = () => {

        const value = input.trim();

        if (!value) return;

        if (skills.includes(value)) return;

        if (skills.length >= 20) return;

        setValue("skills", [...skills, value], { shouldValidate: true });

        setInput("");

    };

    const removeSkill = (skill) => {

        setValue("skills", skills.filter(item => item !== skill), { shouldValidate: true });

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter" || e.key === ",") {

            e.preventDefault();

            addSkill();

        }

    };

    return (

        <section className="skills-section">

            <div className="section-title">
                <h2>Skills & Technologies</h2>
                <p>Add the required skills for this internship.</p>
            </div>

            <div className="form-group">

                <label>Required Skills</label>

                <div className="skills-input">

                    <input
                        type="text"
                        placeholder="React, Node.js, MongoDB..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button
                        type="button"
                        onClick={addSkill}
                    >
                        Add
                    </button>

                </div>

                <input
                    type="hidden"
                    {...register("skills")}
                />

                <span>{errors.skills?.message}</span>

            </div>

            <div className="skills-list">

                {skills.map((skill, index) => (

                    <div
                        key={index}
                        className="skill-chip"
                    >

                        <span>{skill}</span>

                        <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                        >

                            <FaTimes />

                        </button>

                    </div>

                ))}

            </div>

            <div className="form-grid">

                <div className="form-group">

                    <label>Experience Level</label>

                    <select {...register("experienceLevel")}>

                        <option value="">Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Skills Requirement</label>

                    <select {...register("skillRequirement")}>

                        <option value="Required">Required</option>
                        <option value="Preferred">Preferred</option>

                    </select>

                </div>

            </div>

        </section>

    );

};

export default SkillsSection;