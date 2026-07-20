import "./CertificatePreviewModal.css";

import Button from "../../Common/Form/Button";

function CertificatePreviewModal({

    open,

    certificate,

    onClose,

    onDownload,

    onSend

}) {

    if (!open) return null;

    return (

        <div className="certificate-preview-overlay">

            <div className="certificate-preview-modal">

                <div className="certificate-preview-header">

                    <h2>

                        Certificate Preview

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <div className="certificate-preview-content">

                    <div className="certificate-company">

                        <h1>

                            {certificate?.company}

                        </h1>

                        <p>

                            Internship Completion Certificate

                        </p>

                    </div>

                    <div className="certificate-body">

                        <h2>

                            CERTIFICATE OF COMPLETION

                        </h2>

                        <p>

                            This is to certify that

                        </p>

                        <h3>

                            {certificate?.studentName}

                        </h3>

                        <p>

                            has successfully completed the internship as

                        </p>

                        <h4>

                            {certificate?.designation}

                        </h4>

                        <p>

                            under

                            <strong>

                                {" "}
                                {certificate?.internship}

                            </strong>

                        </p>

                        <div className="certificate-info">

                            <div>

                                <span>

                                    Duration

                                </span>

                                <strong>

                                    {certificate?.startDate}

                                    {" - "}

                                    {certificate?.endDate}

                                </strong>

                            </div>

                            <div>

                                <span>

                                    Grade

                                </span>

                                <strong>

                                    {certificate?.grade}

                                </strong>

                            </div>

                            <div>

                                <span>

                                    Certificate ID

                                </span>

                                <strong>

                                    {certificate?.certificateId}

                                </strong>

                            </div>

                            <div>

                                <span>

                                    Issue Date

                                </span>

                                <strong>

                                    {certificate?.issueDate}

                                </strong>

                            </div>

                        </div>

                        <p className="certificate-message">

                            {certificate?.message}

                        </p>

                        <div className="certificate-signature">

                            <div>

                                ______________________

                                <p>

                                    HR Manager

                                </p>

                            </div>

                            <div>

                                ______________________

                                <p>

                                    Company Seal

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="certificate-preview-actions">

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

                        Send Certificate

                    </Button>

                </div>

            </div>

        </div>

    );

}

export default CertificatePreviewModal;