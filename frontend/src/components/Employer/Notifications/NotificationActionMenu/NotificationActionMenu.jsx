import "./NotificationActionMenu.css";

import { useEffect, useRef, useState } from "react";

import {
    FaEllipsisVertical,
    FaEye,
    FaPen,
    FaClock,
    FaTrash
} from "react-icons/fa6";

function NotificationActionMenu({

    notification,

    onView,

    onEdit,

    onSchedule,

    onDelete

}) {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (e) => {

            if (

                menuRef.current &&

                !menuRef.current.contains(e.target)

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

            className="notification-action-menu"

            ref={menuRef}

        >

            <button

                className="notification-action-btn"

                onClick={() =>

                    setOpen(!open)

                }

            >

                <FaEllipsisVertical />

            </button>

            {

                open && (

                    <div className="notification-dropdown">

                        <button

                            onClick={() => {

                                onView(notification);

                                setOpen(false);

                            }}

                        >

                            <FaEye />

                            View

                        </button>

                        <button

                            onClick={() => {

                                onEdit(notification);

                                setOpen(false);

                            }}

                        >

                            <FaPen />

                            Edit

                        </button>

                        <button

                            onClick={() => {

                                onSchedule(notification);

                                setOpen(false);

                            }}

                        >

                            <FaClock />

                            Schedule

                        </button>

                        <button

                            className="delete"

                            onClick={() => {

                                onDelete(notification);

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

export default NotificationActionMenu;