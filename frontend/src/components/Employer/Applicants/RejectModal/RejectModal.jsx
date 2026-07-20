import "./RejectModal.css";
import { useState, useEffect } from "react";

const RejectModal = ({

    open,

    loading,

    candidate,

    onClose,

    onReject

}) => {

    const [reason, setReason] = useState("");

    useEffect(() => {

        if (open) {

            setReason("");

        }

    }, [open]);

    if (!open) return null;

    const handleSubmit = () => {

        if (!reason.trim()) return;

        onReject(reason);

    };

    return (

        <div className="reject-modal-overlay">

            <div className="reject-modal">

                <h2>Reject Applicant</h2>

                <p>

                    Are you sure you want to reject

                    <strong> {candidate} </strong>

                    ?

                </p>

                <textarea

                    placeholder="Enter rejection reason..."

                    value={reason}

                    onChange={(e) => setReason(e.target.value)}

                />

                <div className="reject-actions">

                    <button

                        type="button"

                        className="cancel-btn"

                        onClick={onClose}

                        disabled={loading}

                    >

                        Cancel

                    </button>

                    <button

                        type="button"

                        className="reject-btn"

                        onClick={handleSubmit}

                        disabled={loading || !reason.trim()}

                    >

                        {loading ? "Rejecting..." : "Reject"}

                    </button>

                </div>

            </div>

        </div>

    );

};

export default RejectModal;