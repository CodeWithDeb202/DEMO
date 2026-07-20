import "./OfferManagement.css";

import { useMemo, useState } from "react";

import OfferStats from "../../../components/Employer/OfferManagement/OfferStats";
import OfferFilters from "../../../components/Employer/OfferManagement/OfferFilters";
import OfferCard from "../../../components/Employer/OfferManagement/OfferCard";
import IssueOfferModal from "../../../components/Employer/OfferManagement/IssueOfferModal";
import EditOfferModal from "../../../components/Employer/OfferManagement/EditOfferModal";
import OfferPreviewModal from "../../../components/Employer/OfferManagement/OfferPreviewModal";
import OfferHistory from "../../../components/Employer/OfferManagement/OfferHistory";

function OfferManagement() {

    const [offers, setOffers] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("");

    const [company, setCompany] = useState("");

    const [sort, setSort] = useState("latest");

    const [selectedOffer, setSelectedOffer] = useState(null);

    const [historyOpen, setHistoryOpen] = useState(false);

    const [previewOpen, setPreviewOpen] = useState(false);

    const [issueOpen, setIssueOpen] = useState(false);

    const [editOpen, setEditOpen] = useState(false);

    const filteredOffers = useMemo(() => {

        let data = [...offers];

        if (search) {

            data = data.filter((item) =>
                item.candidate
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (status) {

            data = data.filter(
                (item) => item.status === status
            );

        }

        if (company) {

            data = data.filter(
                (item) => item.company === company
            );

        }

        if (sort === "candidate") {

            data.sort((a, b) =>
                a.candidate.localeCompare(b.candidate)
            );

        }

        if (sort === "stipend") {

            data.sort(
                (a, b) =>
                    Number(b.stipend) -
                    Number(a.stipend)
            );

        }

        return data;

    }, [

        offers,

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

    const openPreview = (offer) => {

        setSelectedOffer(offer);

        setPreviewOpen(true);

    };

    const openEdit = (offer) => {

        setSelectedOffer(offer);

        setEditOpen(true);

    };

    const openHistory = (offer) => {

        setSelectedOffer(offer);

        setHistoryOpen(true);

    };

    const handleDelete = (offer) => {

        console.log(offer);

    };

    const handleDownload = () => {

    };

    const handleResend = () => {

    };

    const handleCancel = () => {

    };

    const handleIssueOffer = (data) => {

        console.log(data);

        setIssueOpen(false);

    };

    const handleEditOffer = (data) => {

        console.log(data);

        setEditOpen(false);

    };
    return (

        <div className="offer-management-page">

            <div className="offer-management-header">

                <div>

                    <h1>

                        Offer Management

                    </h1>

                    <p>

                        Manage internship offer letters

                    </p>

                </div>

                <button

                    className="issue-offer-btn"

                    onClick={() => setIssueOpen(true)}

                >

                    Issue Offer

                </button>

            </div>

            <OfferStats />

            <OfferFilters

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

            <div className="offer-grid">

                {

                    filteredOffers.length > 0 ? (

                        filteredOffers.map((offer) => (

                            <OfferCard

                                key={offer.id}

                                offer={offer}

                                onPreview={() => openPreview(offer)}

                                onEdit={() => openEdit(offer)}

                                onHistory={() => openHistory(offer)}

                                onDownload={() => handleDownload(offer)}

                                onResend={() => handleResend(offer)}

                                onCancel={() => handleCancel(offer)}

                                onDelete={() => handleDelete(offer)}

                            />

                        ))

                    ) : (

                        <div className="empty-offers">

                            <h3>

                                No Offers Found

                            </h3>

                            <p>

                                No offer matches the selected filters.

                            </p>

                        </div>

                    )

                }

            </div>

            <IssueOfferModal

                open={issueOpen}

                loading={false}

                onClose={() => setIssueOpen(false)}

                onSubmit={handleIssueOffer}

            />

            <EditOfferModal

                open={editOpen}

                offer={selectedOffer}

                loading={false}

                onClose={() => setEditOpen(false)}

                onSubmit={handleEditOffer}

            />

            <OfferPreviewModal

                open={previewOpen}

                offer={selectedOffer}

                onClose={() => setPreviewOpen(false)}

                onDownload={() => handleDownload(selectedOffer)}

                onSend={() => handleResend(selectedOffer)}

            />

            {

                historyOpen && (

                    <div className="offer-history-modal">

                        <div className="offer-history-wrapper">

                            <div className="offer-history-header">

                                <h2>

                                    Offer History

                                </h2>

                                <button

                                    onClick={() => setHistoryOpen(false)}

                                >

                                    ✕

                                </button>

                            </div>

                            <OfferHistory

                                history={selectedOffer?.history || []}

                            />

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default OfferManagement;