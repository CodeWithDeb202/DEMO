import "./InviteMemberModal.css";

import { useState } from "react";

import { FaTimes } from "react-icons/fa";

function InviteMemberModal({

    open,

    onClose,

    onInvite

}) {

    const [form, setForm] = useState({

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        role: "hr"

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onInvite(form);

        setForm({

            firstName: "",

            lastName: "",

            email: "",

            phone: "",

            role: "hr"

        });

    };

    if (!open) return null;

    return (

        <div className="invite-modal-overlay">

            <div className="invite-modal">

                <div className="invite-modal-header">

                    <h2>

                        Invite Team Member

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <form

                    className="invite-form"

                    onSubmit={handleSubmit}

                >

                    <div className="invite-grid">

                        <input

                            type="text"

                            name="firstName"

                            placeholder="First Name"

                            value={form.firstName}

                            onChange={handleChange}

                            required

                        />

                        <input

                            type="text"

                            name="lastName"

                            placeholder="Last Name"

                            value={form.lastName}

                            onChange={handleChange}

                            required

                        />

                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={form.email}

                            onChange={handleChange}

                            required

                        />

                        <input

                            type="text"

                            name="phone"

                            placeholder="Phone Number"

                            value={form.phone}

                            onChange={handleChange}

                        />

                        <select

                            name="role"

                            value={form.role}

                            onChange={handleChange}

                        >

                            <option value="admin">

                                Admin

                            </option>

                            <option value="manager">

                                Manager

                            </option>

                            <option value="hr">

                                HR

                            </option>

                            <option value="recruiter">

                                Recruiter

                            </option>

                        </select>

                    </div>

                    <div className="invite-actions">

                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="invite-btn"

                        >

                            Send Invitation

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default InviteMemberModal;