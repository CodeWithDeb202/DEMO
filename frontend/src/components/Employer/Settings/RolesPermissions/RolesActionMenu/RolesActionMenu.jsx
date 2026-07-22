import "./RolesActionMenu.css";

import { useEffect, useRef, useState } from "react";

import {

    FaEllipsisVertical,

    FaPen,

    FaTrash,

    FaEye,

    FaCopy

} from "react-icons/fa6";

function RolesActionMenu({

    role,

    onView,

    onEdit,

    onDelete,

    onDuplicate

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

            className="roles-action-menu"

            ref={menuRef}

        >

            <button

                className="roles-menu-btn"

                onClick={() =>

                    setOpen(!open)

                }

            >

                <FaEllipsisVertical />

            </button>

            {

                open && (

                    <div className="roles-menu-dropdown">

                        <button

                            onClick={() => {

                                onView?.(role);

                                setOpen(false);

                            }}

                        >

                            <FaEye />

                            View

                        </button>

                        <button

                            onClick={() => {

                                onEdit(role);

                                setOpen(false);

                            }}

                        >

                            <FaPen />

                            Edit

                        </button>

                        <button

                            onClick={() => {

                                onDuplicate?.(role);

                                setOpen(false);

                            }}

                        >

                            <FaCopy />

                            Duplicate

                        </button>

                        <button

                            className="danger"

                            onClick={() => {

                                onDelete(role);

                                setOpen(false);

                            }}

                        >

                            <FaTrash />

                            Delete

                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default RolesActionMenu;