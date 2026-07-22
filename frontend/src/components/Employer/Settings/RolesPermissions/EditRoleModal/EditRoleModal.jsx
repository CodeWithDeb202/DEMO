import "./EditRoleModal.css";

import { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";

function EditRoleModal({

    open,

    role,

    onClose,

    onSave

}) {

    const [form, setForm] = useState({

        name: "",

        description: "",

        status: "active",

        permissions: []

    });

    const permissions = [

        "Manage Internships",

        "Manage Applications",

        "Manage Interviews",

        "Manage Offers",

        "Manage Certificates",

        "Manage Team",

        "Manage Reports",

        "Manage Notifications"

    ];

    useEffect(() => {

        if (role) {

            setForm({

                name: role.name || "",

                description: role.description || "",

                status: role.status || "active",

                permissions: role.permissions || []

            });

        }

    }, [role]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const togglePermission = (permission) => {

        setForm({

            ...form,

            permissions: form.permissions.includes(permission)

                ? form.permissions.filter(

                    (item) => item !== permission

                )

                : [

                    ...form.permissions,

                    permission

                ]

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave?.({

            ...role,

            ...form

        });

    };

    if (!open) return null;

    return (

        <div className="edit-role-overlay">

            <div className="edit-role-modal">

                <div className="edit-role-header">

                    <h2>

                        Edit Role

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <form

                    className="edit-role-form"

                    onSubmit={handleSubmit}

                >

                    <input

                        type="text"

                        name="name"

                        placeholder="Role Name"

                        value={form.name}

                        onChange={handleChange}

                        required

                    />

                    <textarea

                        rows="4"

                        name="description"

                        placeholder="Role Description"

                        value={form.description}

                        onChange={handleChange}

                    />

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                    >

                        <option value="active">

                            Active

                        </option>

                        <option value="inactive">

                            Inactive

                        </option>

                    </select>

                    <div className="permission-list">

                        {

                            permissions.map((permission) => (

                                <label key={permission}>

                                    <input

                                        type="checkbox"

                                        checked={form.permissions.includes(permission)}

                                        onChange={() =>

                                            togglePermission(permission)

                                        }

                                    />

                                    {permission}

                                </label>

                            ))

                        }

                    </div>

                    <div className="edit-role-actions">

                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="save-btn"

                        >

                            Update Role

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditRoleModal;