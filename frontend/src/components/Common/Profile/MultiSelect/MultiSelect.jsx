import "./MultiSelect.css";

import { useEffect, useRef, useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

function MultiSelect({

    label,

    options = [],

    value = [],

    onChange,

    placeholder = "Select"

}) {

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState("");

    const wrapperRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (

                wrapperRef.current &&

                !wrapperRef.current.contains(event.target)

            ) {

                setOpen(false);

            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

    }, []);

    const filteredOptions = options.filter(

        (option) =>

            option.toLowerCase().includes(search.toLowerCase()) &&

            !value.includes(option)

    );

    const selectItem = (item) => {

        onChange([...value, item]);

        setSearch("");

    };

    const removeItem = (item) => {

        onChange(value.filter((v) => v !== item));

    };

    return (

        <div className="multi-select" ref={wrapperRef}>

            {label && <label>{label}</label>}

            <div

                className="multi-input"

                onClick={() => setOpen(!open)}

            >

                <div className="selected-items">

                    {

                        value.map((item) => (

                            <span

                                key={item}

                                className="tag"

                            >

                                {item}

                                <FaTimes

                                    onClick={(e) => {

                                        e.stopPropagation();

                                        removeItem(item);

                                    }}

                                />

                            </span>

                        ))

                    }

                    <input

                        value={search}

                        placeholder={placeholder}

                        onChange={(e) => setSearch(e.target.value)}

                        onClick={(e) => {

                            e.stopPropagation();

                            setOpen(true);

                        }}

                    />

                </div>

                <FaChevronDown className="arrow" />

            </div>

            {

                open && (

                    <div className="dropdown">

                        {

                            filteredOptions.length ?

                                filteredOptions.map((item) => (

                                    <div

                                        key={item}

                                        className="option"

                                        onClick={() => selectItem(item)}

                                    >

                                        {item}

                                    </div>

                                ))

                                :

                                <p className="empty">

                                    No option found

                                </p>

                        }

                    </div>

                )

            }

        </div>

    );

}

export default MultiSelect;