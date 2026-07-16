import "./TagInput.css";

import { useState } from "react";

import { FaTimes } from "react-icons/fa";

function TagInput({

    label,

    tags = [],

    onChange,

    placeholder = "Type and press Enter",

    maxTags = 10

}) {

    const [input, setInput] = useState("");

    const addTag = () => {

        const value = input.trim();

        if (!value) return;

        if (tags.includes(value)) {

            setInput("");

            return;

        }

        if (tags.length >= maxTags) {

            return;

        }

        onChange([

            ...tags,

            value

        ]);

        setInput("");

    };

    const removeTag = (tag) => {

        onChange(

            tags.filter(

                item => item !== tag

            )

        );

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            addTag();

        }

        if (

            e.key === "Backspace" &&

            !input &&

            tags.length

        ) {

            removeTag(

                tags[tags.length - 1]

            );

        }

    };

    return (

        <div className="tag-input">

            {

                label &&

                <label>

                    {label}

                </label>

            }

            <div className="tag-wrapper">

                {

                    tags.map(tag => (

                        <span

                            className="tag-chip"

                            key={tag}

                        >

                            {tag}

                            <FaTimes

                                onClick={() =>

                                    removeTag(tag)

                                }

                            />

                        </span>

                    ))

                }

                <input

                    value={input}

                    placeholder={placeholder}

                    onChange={(e) =>

                        setInput(e.target.value)

                    }

                    onKeyDown={handleKeyDown}

                />

            </div>

            <small>

                {tags.length}/{maxTags} tags

            </small>

        </div>

    );

}

export default TagInput;