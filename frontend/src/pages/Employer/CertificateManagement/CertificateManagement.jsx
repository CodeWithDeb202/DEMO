import "./CertificateManagement.css";

import { useMemo, useState } from "react";

import CertificateStats from "../../../components/Employer/CertificateManagement/CertificateStats";
import CertificateFilters from "../../../components/Employer/CertificateManagement/CertificateFilters";
import CertificateCard from "../../../components/Employer/CertificateManagement/CertificateCard";
import IssueCertificateModal from "../../../components/Employer/CertificateManagement/IssueCertificateModal";
import EditCertificateModal from "../../../components/Employer/CertificateManagement/EditCertificateModal";
import CertificatePreviewModal from "../../../components/Employer/CertificateManagement/CertificatePreviewModal";
import CertificateHistory from "../../../components/Employer/CertificateManagement/CertificateHistory";

function CertificateManagement() {

    const [certificates, setCertificates] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    const [company, setCompany] = useState("");

    const [sort, setSort] = useState("latest");

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const [issueOpen, setIssueOpen] = useState(false);

    const [editOpen, setEditOpen] = useState(false);

    const [previewOpen, setPreviewOpen] = useState(false);

    const [historyOpen, setHistoryOpen] = useState(false);

    const filteredCertificates = useMemo(() => {

        let data = [...certificates];

        if (search) {

            data = data.filter(item =>
                item.studentName
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (status) {

            data = data.filter(
                item => item.status === status
            );

        }

        if (company) {

            data = data.filter(
                item => item.company === company
            );

        }

        if (sort === "student") {

            data.sort((a, b) =>
                a.studentName.localeCompare(
                    b.studentName
                )
            );

        }

        return data;

    }, [

        certificates,

        search,

        status,

        company,

        sort

    ]);

    const resetFilters = () => {

        setSearch("");

        setStatus("");

        setCompany("");

        setSort("latest");

    };

    const openPreview = (certificate) => {

        setSelectedCertificate(certificate);

        setPreviewOpen(true);

    };

    const openEdit = (certificate) => {

        setSelectedCertificate(certificate);

        setEditOpen(true);

    };

    const openHistory = (certificate) => {

        setSelectedCertificate(certificate);

        setHistoryOpen(true);

    };

    const handleIssue = (data) => {

        console.log(data);

        setIssueOpen(false);

    };

    const handleUpdate = (data) => {

        console.log(data);

        setEditOpen(false);

    };

    const handleDownload = () => { };

    const handleSend = () => { };

    const handleDelete = () => { };

    return (

        <div className="certificate-management-page">

            <div className="certificate-management-header">

                <div>

                    <h1>

                        Certificate Management

                    </h1>

                    <p>

                        Manage internship completion certificates

                    </p>

                </div>

                <button

                    className="issue-certificate-btn"

                    onClick={() => setIssueOpen(true)}

                >

                    Issue Certificate

                </button>

            </div>

            <CertificateStats

                total={certificates.length}

                issued={
                    certificates.filter(
                        item => item.status === "Issued"
                    ).length
                }

                pending={
                    certificates.filter(
                        item => item.status === "Pending"
                    ).length
                }

                downloaded={
                    certificates.filter(
                        item => item.status === "Downloaded"
                    ).length
                }

            />

            <CertificateFilters

                search={search}

                setSearch={setSearch}

                status={status}

                setStatus={setStatus}

                company={company}

                setCompany={setCompany}

                sort={sort}

                setSort={setSort}

                onReset={resetFilters}

            />

            <div className="certificate-grid">

                {

                    filteredCertificates.length > 0 ? (

                        filteredCertificates.map((certificate) => (

                            <CertificateCard

                                key={certificate.certificateId}

                                certificate={certificate}

                                onPreview={() =>
                                    openPreview(certificate)
                                }

                                onEdit={() =>
                                    openEdit(certificate)
                                }

                                onHistory={() =>
                                    openHistory(certificate)
                                }

                                onDownload={() =>
                                    handleDownload(certificate)
                                }

                                onSend={() =>
                                    handleSend(certificate)
                                }

                                onDelete={() =>
                                    handleDelete(certificate)
                                }

                            />

                        ))

                    ) : (

                        <div className="empty-certificates">

                            <h3>

                                No Certificates Found

                            </h3>

                            <p>

                                No certificates match your filters.

                            </p>

                        </div>

                    )

                }

            </div>

            <IssueCertificateModal

                open={issueOpen}

                loading={false}

                onClose={() => setIssueOpen(false)}

                onSubmit={handleIssue}

            />

            <EditCertificateModal

                open={editOpen}

                certificate={selectedCertificate}

                loading={false}

                onClose={() => setEditOpen(false)}

                onSubmit={handleUpdate}

            />

            <CertificatePreviewModal

                open={previewOpen}

                certificate={selectedCertificate}

                onClose={() => setPreviewOpen(false)}

                onDownload={() =>
                    handleDownload(selectedCertificate)
                }

                onSend={() =>
                    handleSend(selectedCertificate)
                }

            />

            {

                historyOpen && (

                    <div className="certificate-history-modal">

                        <div className="certificate-history-wrapper">

                            <div className="certificate-history-header">

                                <h2>

                                    Certificate History

                                </h2>

                                <button

                                    onClick={() =>
                                        setHistoryOpen(false)
                                    }

                                >

                                    ✕

                                </button>

                            </div>

                            <CertificateHistory

                                history={
                                    selectedCertificate?.history || []
                                }

                            />

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default CertificateManagement;