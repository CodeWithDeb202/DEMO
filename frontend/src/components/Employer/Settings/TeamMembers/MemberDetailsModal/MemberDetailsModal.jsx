import "./MemberDetailsModal.css";

import { FaTimes } from "react-icons/fa";

function MemberDetailsModal({

    open,

    member,

    onClose

}) {

    if (!open || !member) return null;

    return (

        <div className="member-details-overlay">

            <div className="member-details-modal">

                <div className="member-details-header">

                    <h2>

                        Team Member Details

                    </h2>

                    <button onClick={onClose}>

                        <FaTimes />

                    </button>

                </div>

                <div className="member-details-body">

                    <div className="member-profile">

                        <img

                            src={

                                member.avatar ||

                                "/images/avatar.png"

                            }

                            alt={member.name}

                        />

                        <div>

                            <h3>

                                {member.name}

                            </h3>

                            <p>

                                {member.role}

                            </p>

                        </div>

                    </div>

                    <div className="member-info-grid">

                        <div>

                            <label>

                                Email

                            </label>

                            <span>

                                {member.email}

                            </span>

                        </div>

                        <div>

                            <label>

                                Phone

                            </label>

                            <span>

                                {member.phone}

                            </span>

                        </div>

                        <div>

                            <label>

                                Department

                            </label>

                            <span>

                                {member.department || "-"}

                            </span>

                        </div>

                        <div>

                            <label>

                                Status

                            </label>

                            <span className={member.status}>

                                {member.status}

                            </span>

                        </div>

                        <div>

                            <label>

                                Joined On

                            </label>

                            <span>

                                {member.joinedAt || "-"}

                            </span>

                        </div>

                        <div>

                            <label>

                                Last Login

                            </label>

                            <span>

                                {member.lastLogin || "-"}

                            </span>

                        </div>

                    </div>

                </div>

                <div className="member-details-footer">

                    <button

                        onClick={onClose}

                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

}

export default MemberDetailsModal;