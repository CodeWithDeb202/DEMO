import "./ApplicantQuickActions.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaUserCheck,
    FaCalendarAlt,
    FaAward,
    FaEnvelope,
    FaTimes,
    FaDownload
} from "react-icons/fa";

import RejectModal from "../../Applicants/RejectModal";

import {
    shortlistApplicant,
    scheduleInterview,
    hireApplicant,
    rejectApplicant,
    sendOfferLetter
} from "../../../services/api/applicationService";

const ApplicantQuickActions = ({

    applicant,

    refresh

}) => {

    const [loading, setLoading] = useState(false);

    const [openReject, setOpenReject] = useState(false);

    const execute = async (callback, message) => {

        try {

            setLoading(true);

            await callback();

            toast.success(message);

            refresh();

        } catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Operation failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="applicant-quick-actions">

                <button

                    type="button"

                    className="quick-btn success"

                    disabled={loading}

                    onClick={() => execute(

                        () => shortlistApplicant(applicant._id),

                        "Applicant shortlisted"

                    )}

                >

                    <FaUserCheck />

                    Shortlist

                </button>

                <button

                    type="button"

                    className="quick-btn warning"

                    disabled={loading}

                    onClick={() => execute(

                        () => scheduleInterview(applicant._id),

                        "Interview scheduled"

                    )}

                >

                    <FaCalendarAlt />

                    Interview

                </button>

                <button

                    type="button"

                    className="quick-btn primary"

                    disabled={loading}

                    onClick={() => execute(

                        () => hireApplicant(applicant._id),

                        "Candidate hired"

                    )}

                >

                    <FaAward />

                    Hire

                </button>

                <button

                    type="button"

                    className="quick-btn info"

                    disabled={loading}

                    onClick={() => execute(

                        () => sendOfferLetter(applicant._id),

                        "Offer letter sent"

                    )}

                >

                    <FaEnvelope />

                    Offer

                </button>

                <a

                    href={applicant.resume}

                    download

                    className="quick-btn secondary"

                >

                    <FaDownload />

                    Resume

                </a>

                <Link

                    to={`/chat/${applicant._id}`}

                    className="quick-btn dark"

                >

                    Message

                </Link>

                <button

                    type="button"

                    className="quick-btn danger"

                    disabled={loading}

                    onClick={() => setOpenReject(true)}

                >

                    <FaTimes />

                    Reject

                </button>

            </div>

            <RejectModal

                open={openReject}

                loading={loading}

                candidate={applicant.fullName}

                onClose={() => setOpenReject(false)}

                onReject={(reason) => execute(

                    () => rejectApplicant(

                        applicant._id,

                        { reason }

                    ),

                    "Applicant rejected"

                )}

            />

        </>

    );

};

export default ApplicantQuickActions;