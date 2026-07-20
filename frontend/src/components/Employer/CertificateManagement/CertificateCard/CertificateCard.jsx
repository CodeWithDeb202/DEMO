import "./CertificateCard.css";

import {

    FaUserGraduate,
    FaBuilding,
    FaBriefcase,
    FaCalendarAlt,
    FaCertificate

} from "react-icons/fa";

import CertificateActionMenu from "../CertificateActionMenu";

function CertificateCard({

    certificate,

    onPreview,
    onEdit,
    onHistory,
    onDownload,
    onSend,
    onDelete

}) {

    const badgeClass = {

        Pending: "pending",

        Issued: "issued",

        Downloaded: "downloaded"

    };

    return (

        <div className="certificate-card">

            <div className="certificate-header">

                <div>

                    <h3>

                        {certificate.studentName}

                    </h3>

                    <span>

                        <FaCertificate />

                        {certificate.certificateId}

                    </span>

                </div>

                <div

                    className={`certificate-status ${badgeClass[certificate.status]}`}

                >

                    {certificate.status}

                </div>

            </div>

            <div className="certificate-body">

                <p>

                    <FaBuilding />

                    {certificate.company}

                </p>

                <p>

                    <FaBriefcase />

                    {certificate.internship}

                </p>

                <p>

                    <FaUserGraduate />

                    {certificate.designation}

                </p>

                <p>

                    <FaCalendarAlt />

                    {certificate.issueDate}

                </p>

            </div>

            <div className="certificate-footer">

                <CertificateActionMenu

                    onPreview={onPreview}

                    onEdit={onEdit}

                    onHistory={onHistory}

                    onDownload={onDownload}

                    onSend={onSend}

                    onDelete={onDelete}

                />

            </div>

        </div>

    );

}

export default CertificateCard;