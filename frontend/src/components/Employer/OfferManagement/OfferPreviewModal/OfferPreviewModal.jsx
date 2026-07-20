import "./OfferPreviewModal.css";

import Button from "../../Common/Form/Button";

function OfferPreviewModal({

    open,

    offer,

    onClose,

    onDownload,

    onSend

}) {

    if (!open) return null;

    return (

        <div className="offer-preview-overlay">

            <div className="offer-preview-modal">

                <div className="offer-preview-header">

                    <h2>

                        Offer Letter Preview

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <div className="offer-preview-content">

                    <div className="company-section">

                        <h1>

                            {offer?.company}

                        </h1>

                        <p>

                            Official Offer Letter

                        </p>

                    </div>

                    <div className="preview-body">

                        <p>

                            Dear

                            <strong>

                                {" "}
                                {offer?.candidate}

                            </strong>

                            ,

                        </p>

                        <p>

                            We are pleased to offer you the position of

                            <strong>

                                {" "}
                                {offer?.designation}

                            </strong>

                            .

                        </p>

                        <div className="offer-info">

                            <div>

                                <span>Internship</span>

                                <strong>

                                    {offer?.internship}

                                </strong>

                            </div>

                            <div>

                                <span>Stipend</span>

                                <strong>

                                    ₹ {offer?.stipend}

                                </strong>

                            </div>

                            <div>

                                <span>Location</span>

                                <strong>

                                    {offer?.location}

                                </strong>

                            </div>

                            <div>

                                <span>Duration</span>

                                <strong>

                                    {offer?.duration}

                                </strong>

                            </div>

                            <div>

                                <span>Joining Date</span>

                                <strong>

                                    {offer?.joiningDate}

                                </strong>

                            </div>

                            <div>

                                <span>Offer Valid Till</span>

                                <strong>

                                    {offer?.expiryDate}

                                </strong>

                            </div>

                        </div>

                        <p className="preview-message">

                            {offer?.message}

                        </p>

                        <div className="signature">

                            <h4>

                                HR Department

                            </h4>

                            <span>

                                {offer?.company}

                            </span>

                        </div>

                    </div>

                </div>

                <div className="offer-preview-actions">

                    <Button

                        variant="secondary"

                        onClick={onClose}

                    >

                        Close

                    </Button>

                    <Button

                        onClick={onDownload}

                    >

                        Download PDF

                    </Button>

                    <Button

                        onClick={onSend}

                    >

                        Send Offer

                    </Button>

                </div>

            </div>

        </div>

    );

}

export default OfferPreviewModal;