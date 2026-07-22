import "./DeleteRoleModal.css";

import { FaTrashAlt } from "react-icons/fa";

function DeleteRoleModal({

    open,

    role,

    onClose,

    onConfirm

}) {

    if (!open || !role) return null;

    return (

        <div className="delete-role-overlay">

            <div className="delete-role-modal">

                <div className="delete-role-icon">

                    <FaTrashAlt />

                </div>

                <h2>

                    Delete Role

                </h2>

                <p>

                    Are you sure you want to delete

                    <strong>

                        {" "}

                        {role.name}

                    </strong>

                    ?

                </p>

                <span>

                    This action is permanent and cannot be undone.

                </span>

                <div className="delete-role-actions">

                    <button

                        className="cancel-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="delete-btn"

                        onClick={() => onConfirm?.(role)}

                    >

                        Delete Role

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteRoleModal;