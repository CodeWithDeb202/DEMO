import "./RemoveMemberModal.css";

import { FaTrashAlt } from "react-icons/fa";

function RemoveMemberModal({

    open,

    member,

    onClose,

    onConfirm

}) {

    if (!open || !member) return null;

    return (

        <div className="remove-member-overlay">

            <div className="remove-member-modal">

                <div className="remove-member-icon">

                    <FaTrashAlt />

                </div>

                <h2>

                    Remove Team Member

                </h2>

                <p>

                    Are you sure you want to remove

                    <strong>

                        {" "}

                        {member.name}

                    </strong>

                    {" "}from your company team?

                </p>

                <span>

                    This action cannot be undone.

                </span>

                <div className="remove-member-actions">

                    <button

                        className="cancel-btn"

                        onClick={onClose}

                    >

                        Cancel

                    </button>

                    <button

                        className="remove-btn"

                        onClick={() => onConfirm(member)}

                    >

                        Remove Member

                    </button>

                </div>

            </div>

        </div>

    );

}

export default RemoveMemberModal;