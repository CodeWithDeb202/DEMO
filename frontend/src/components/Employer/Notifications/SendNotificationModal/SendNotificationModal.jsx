import "./SendNotificationModal.css";

import { useState } from "react";

import { FaTimes, FaPaperPlane } from "react-icons/fa";

function SendNotificationModal({

    open,

    onClose,

    onSend

}) {

    const [form, setForm] = useState({

        title: "",

        message: "",

        type: "email",

        audience: "all"

    });

    if (!open) return null;

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSend(form);

    };

    return (

        <div className="send-notification-overlay">

            <div className="send-notification-modal">

                <div className="send-notification-header">

                    <h2>

                        Send Notification

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>

                            Title

                        </label>

                        <input

                            type="text"

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                            placeholder="Notification title"

                        />

                    </div>

                    <div className="form-group">

                        <label>

                            Message

                        </label>

                        <textarea

                            rows="5"

                            name="message"

                            value={form.message}

                            onChange={handleChange}

                            placeholder="Write notification..."

                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>

                                Notification Type

                            </label>

                            <select

                                name="type"

                                value={form.type}

                                onChange={handleChange}

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

                        <div className="form-group">

                            <label>

                                Audience

                            </label>

                            <select

                                name="audience"

                                value={form.audience}

                                onChange={handleChange}

                            >

                                <option value="all">

                                    All Users

                                </option>

                                <option value="students">

                                    Students

                                </option>

                                <option value="employers">

                                    Employers

                                </option>

                                <option value="selected">

                                    Selected Users

                                </option>

                            </select>

                        </div>

                    </div>

                    <div className="send-notification-actions">

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

                            Send Notification

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default SendNotificationModal;