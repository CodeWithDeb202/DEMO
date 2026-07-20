import "./OfferCard.css";

import {
    FaBuilding,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaUserTie
} from "react-icons/fa";

import OfferActionMenu from "../OfferActionMenu";

function OfferCard({

    offer,

    onPreview,
    onEdit,
    onDelete,
    onHistory

}) {

    const badgeClass = {

        Pending: "pending",

        Issued: "issued",

        Accepted: "accepted",

        Rejected: "rejected",

        Expired: "expired"

    };

    return (

        <div className="offer-card">

            <div className="offer-header">

                <div>

                    <h3>

                        {offer.candidate}

                    </h3>

                    <p>

                        <FaUserTie />

                        {offer.designation}

                    </p>

                </div>

                <span

                    className={`offer-status ${badgeClass[offer.status]}`}

                >

                    {offer.status}

                </span>

            </div>

            <div className="offer-body">

                <p>

                    <FaBuilding />

                    {offer.company}

                </p>

                <p>

                    <FaMapMarkerAlt />

                    {offer.location}

                </p>

                <p>

                    <FaMoneyBillWave />

                    ₹ {offer.stipend}

                </p>

                <p>

                    <FaCalendarAlt />

                    {offer.joiningDate}

                </p>

            </div>

            <div className="offer-footer">

                <OfferActionMenu

                    offer={offer}

                    onPreview={onPreview}

                    onEdit={onEdit}
                    onDelete={onDelete}
                    onHistory={onHistory}

                />

            </div>

        </div>

    );

}

export default OfferCard;