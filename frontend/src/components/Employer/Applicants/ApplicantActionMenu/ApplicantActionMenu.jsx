import "./ApplicantActionMenu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaEye,
    FaFilePdf,
    FaUserCheck,
    FaCalendarAlt,
    FaAward,
    FaTimes
} from "react-icons/fa";

import RejectModal from "../RejectModal";

import {
    shortlistApplicant,
    hireApplicant,
    scheduleInterview,
    rejectApplicant
} from "../../../services/api/applicationService";

const ApplicantActionMenu = ({

    applicant,

    refresh

}) => {

    const [loading, setLoading] = useState(false);

    const [openReject, setOpenReject] = useState(false);

    const handleShortlist = async () => {

        try {

            setLoading(true);

            await shortlistApplicant(applicant._id);

            toast.success("Applicant shortlisted");

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Failed");

        } finally {

            setLoading(false);

        }

    };

    const handleInterview = async () => {

        try {

            setLoading(true);

            await scheduleInterview(applicant._id);

            toast.success("Interview scheduled");

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Failed");

        } finally {

            setLoading(false);

        }

    };

    const handleHire = async () => {

        try {

            setLoading(true);

            await hireApplicant(applicant._id);

            toast.success("Candidate hired");

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Failed");

        } finally {

            setLoading(false);

        }

    };

    const handleReject = async (reason) => {

        try {

            setLoading(true);

            await rejectApplicant(applicant._id, { reason });

            toast.success("Applicant rejected");

            setOpenReject(false);

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="applicant-actions">

                <Link
                    to={`/employer/applicants/${applicant._id}`}
                    className="action-icon"
                    title="View Profile"
                >

                    <FaEye />

                </Link>

                <a
                    href={applicant.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="action-icon"
                    title="Resume"
                >

                    <FaFilePdf />

                </a>

                <button
                    type="button"
                    className="action-icon success"
                    onClick={handleShortlist}
                    disabled={loading}
                    title="Shortlist"
                >

                    <FaUserCheck />

                </button>

                <button
                    type="button"
                    className="action-icon warning"
                    onClick={handleInterview}
                    disabled={loading}
                    title="Interview"
                >

                    <FaCalendarAlt />

                </button>

                <button
                    type="button"
                    className="action-icon primary"
                    onClick={handleHire}
                    disabled={loading}
                    title="Hire"
                >

                    <FaAward />

                </button>

                <button
                    type="button"
                    className="action-icon danger"
                    onClick={() => setOpenReject(true)}
                    disabled={loading}
                    title="Reject"
                >

                    <FaTimes />

                </button>

            </div>

            <RejectModal

                open={openReject}

                loading={loading}

                candidate={applicant.fullName}

                onClose={() => setOpenReject(false)}

                onReject={handleReject}

            />

        </>

    );

};

export default ApplicantActionMenu;