import "./CertificateActionMenu.css";

import { useEffect, useRef, useState } from "react";

import {
    FaEllipsisVertical,
    FaEye,
    FaPen,
    FaClockRotateLeft,
    FaFilePdf,
    FaPaperPlane,
    FaTrash
} from "react-icons/fa6";

function CertificateActionMenu({

    onPreview,
    onEdit,
    onHistory,
    onDownload,
    onSend,
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

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    return (

        <div

            className="certificate-action-menu"

            ref={menuRef}

        >

            <button

                className="certificate-action-btn"

                onClick={() => setOpen(!open)}

            >

                <FaEllipsisVertical />

            </button>

            {

                open && (

                    <div className="certificate-dropdown">

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

                        <button onClick={onSend}>

                            <FaPaperPlane />

                            Send Certificate

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

export default CertificateActionMenu;