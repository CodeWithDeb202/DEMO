import "./AddRoleModal.css";

import { useState } from "react";

import { FaTimes } from "react-icons/fa";

function AddRoleModal({

    open,

    onClose,

    onSave

}) {

    const [role, setRole] = useState({

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

    const handleChange = (e) => {

        setRole({

            ...role,

            [e.target.name]: e.target.value

        });

    };

    const togglePermission = (permission) => {

        setRole({

            ...role,

            permissions: role.permissions.includes(permission)

                ? role.permissions.filter(

                    (item) => item !== permission

                )

                : [

                    ...role.permissions,

                    permission

                ]

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave?.(role);

    };

    if (!open) return null;

    return (

        <div className="add-role-overlay">

            <div className="add-role-modal">

                <div className="add-role-header">

                    <h2>

                        Add New Role

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="add-role-form"

                >

                    <input

                        type="text"

                        name="name"

                        placeholder="Role Name"

                        value={role.name}

                        onChange={handleChange}

                        required

                    />

                    <textarea

                        rows="4"

                        name="description"

                        placeholder="Role Description"

                        value={role.description}

                        onChange={handleChange}

                    />

                    <select

                        name="status"

                        value={role.status}

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

                                <label

                                    key={permission}

                                >

                                    <input

                                        type="checkbox"

                                        checked={role.permissions.includes(permission)}

                                        onChange={() =>

                                            togglePermission(permission)

                                        }

                                    />

                                    {permission}

                                </label>

                            ))

                        }

                    </div>

                    <div className="add-role-actions">

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

                            Create Role

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddRoleModal;