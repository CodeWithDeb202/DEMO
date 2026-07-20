import "./OfferActionMenu.css";

import { useEffect, useRef, useState } from "react";

import {
    FaEllipsisVertical,
    FaEye,
    FaPen,
    FaClockRotateLeft,
    FaFilePdf,
    FaPaperPlane,
    FaBan,
    FaTrash
} from "react-icons/fa6";

function OfferActionMenu({

    onPreview,
    onEdit,
    onHistory,
    onDownload,
    onResend,
    onCancel,
    onDelete

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

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    return (

        <div
            className="offer-action-menu"
            ref={menuRef}
        >

            <button

                className="offer-action-btn"

                onClick={() => setOpen(!open)}

            >

                <FaEllipsisVertical />

            </button>

            {

                open && (

                    <div className="offer-dropdown">

                        <button onClick={onPreview}>

                            <FaEye />

                            Preview

                        </button>

                        <button onClick={onEdit}>

                            <FaPen />

                            Edit

                        </button>

                        <button onClick={onHistory}>

                            <FaClockRotateLeft />

                            History

                        </button>

                        <button onClick={onDownload}>

                            <FaFilePdf />

                            Download PDF

                        </button>

                        <button onClick={onResend}>

                            <FaPaperPlane />

                            Resend Offer

                        </button>

                        <button onClick={onCancel}>

                            <FaBan />

                            Cancel Offer

                        </button>

                        <button

                            className="danger"

                            onClick={onDelete}

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

export default OfferActionMenu;