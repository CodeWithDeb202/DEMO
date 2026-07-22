import "./TeamActionMenu.css";

import { useState, useRef, useEffect } from "react";

import {

    FaEllipsisVertical,

    FaEye,

    FaPen,

    FaTrash,

    FaUserSlash

} from "react-icons/fa6";

function TeamActionMenu({

    member,

    onView,

    onEdit,

    onDelete,

    onDeactivate

}) {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (

                menuRef.current &&

                !menuRef.current.contains(event.target)

            ) {

                setOpen(false);

            }

        };

        document.addEventListener(

            "mousedown",

            handleClickOutside

        );

        return () =>

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

    }, []);

    return (

        <div

            className="team-action-menu"

            ref={menuRef}

        >

            <button

                className="menu-btn"

                onClick={() =>

                    setOpen(!open)

                }

            >

                <FaEllipsisVertical />

            </button>

            {

                open && (

                    <div className="menu-dropdown">

                        <button

                            onClick={() => {

                                onView(member);

                                setOpen(false);

                            }}

                        >

                            <FaEye />

                            View

                        </button>

                        <button

                            onClick={() => {

                                onEdit(member);

                                setOpen(false);

                            }}

                        >

                            <FaPen />

                            Edit

                        </button>

                        <button

                            onClick={() => {

                                onDeactivate?.(member);

                                setOpen(false);

                            }}

                        >

                            <FaUserSlash />

                            Deactivate

                        </button>

                        <button

                            className="danger"

                            onClick={() => {

                                onDelete(member);

                                setOpen(false);

                            }}

                        >

                            <FaTrash />

                            Remove

                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default TeamActionMenu;