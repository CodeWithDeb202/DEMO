import "./BulkNotificationModal.css";

import { useState } from "react";

import {
    FaTimes,
    FaUpload,
    FaPaperPlane
} from "react-icons/fa";

function BulkNotificationModal({

    open,

    onClose,

    onSend

}) {

    const [file, setFile] = useState(null);

    const [type, setType] = useState("email");

    const [title, setTitle] = useState("");

    const [message, setMessage] = useState("");

    if (!open) return null;

    const handleSubmit = (e) => {

        e.preventDefault();

        onSend({

            file,

            type,

            title,

            message

        });

    };

    return (

        <div className="bulk-modal-overlay">

            <div className="bulk-modal">

                <div className="bulk-header">

                    <h2>

                        Bulk Notification

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="bulk-group">

                        <label>

                            Upload CSV / Excel

                        </label>

                        <label className="upload-box">

                            <FaUpload />

                            <span>

                                {file ? file.name : "Choose File"}

                            </span>

                            <input

                                type="file"

                                accept=".csv,.xlsx"

                                hidden

                                onChange={(e) =>

                                    setFile(

                                        e.target.files[0]

                                    )

                                }

                            />

                        </label>

                    </div>

                    <div className="bulk-group">

                        <label>

                            Notification Type

                        </label>

                        <select

                            value={type}

                            onChange={(e) =>

                                setType(e.target.value)

                            }

                        >

                            <option value="email">

                                Email

                            </option>

                            <option value="push">

                                Push

                            </option>

                            <option value="sms">

                                SMS

                            </option>

                        </select>

                    </div>

                    <div className="bulk-group">

                        <label>

                            Title

                        </label>

                        <input

                            type="text"

                            value={title}

                            onChange={(e) =>

                                setTitle(e.target.value)

                            }

                            placeholder="Notification title"

                        />

                    </div>

                    <div className="bulk-group">

                        <label>

                            Message

                        </label>

                        <textarea

                            rows="5"

                            value={message}

                            onChange={(e) =>

                                setMessage(e.target.value)

                            }

                            placeholder="Notification message"

                        />

                    </div>

                    <div className="bulk-footer">

                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="send-btn"

                        >

                            <FaPaperPlane />

                            Send Bulk Notification

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default BulkNotificationModal;