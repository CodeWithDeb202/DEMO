

import "./DeleteModal.css";

const DeleteModal = ({

    open,

    loading,

    title,

    onClose,

    onDelete

}) => {

    if (!open) return null;

    return (

        <div className="delete-modal-overlay">

            <div className="delete-modal">

                <h2>Delete Internship</h2>

                <p>

                    Are you sure you want to delete

                    <strong> "{title}" </strong>

                    ?

                </p>

                <p className="warning-text">

                    This action cannot be undone.

                </p>

                <div className="modal-actions">

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
                        className="delete-btn"
                        onClick={onDelete}
                        disabled={loading}
                    >

                        {loading ? "Deleting..." : "Delete"}

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteModal;