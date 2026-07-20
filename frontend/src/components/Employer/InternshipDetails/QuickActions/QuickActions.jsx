import "./QuickActions.css";
import { Link } from "react-router-dom";
import {
    FaEdit,
    FaGlobe,
    FaLock,
    FaCopy,
    FaUsers,
    FaTrash
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

import DeleteModal from "../../Internships/DeleteModal";

import {
    publishInternship,
    closeInternship,
    duplicateInternship,
    deleteInternship
} from "../../../services/api/internshipService";

const QuickActions = ({

    internship,

    refresh

}) => {

    const [loading, setLoading] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    const publish = async () => {

        try {

            setLoading(true);

            await publishInternship(internship._id);

            toast.success("Internship published");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Publish failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const close = async () => {

        try {

            setLoading(true);

            await closeInternship(internship._id);

            toast.success("Internship closed");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Close failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const duplicate = async () => {

        try {

            setLoading(true);

            await duplicateInternship(internship._id);

            toast.success("Internship duplicated");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Duplicate failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const remove = async () => {

        try {

            setLoading(true);

            await deleteInternship(internship._id);

            toast.success("Internship deleted");

            window.history.back();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Delete failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="quick-actions">

                <Link
                    to={`/employer/edit-internship/${internship._id}`}
                    className="action-btn primary"
                >

                    <FaEdit />

                    Edit

                </Link>

                <Link
                    to={`/employer/internships/${internship._id}/applicants`}
                    className="action-btn info"
                >

                    <FaUsers />

                    Applicants

                </Link>

                <button
                    type="button"
                    className="action-btn secondary"
                    onClick={duplicate}
                    disabled={loading}
                >

                    <FaCopy />

                    Duplicate

                </button>

                {internship.status === "Draft" && (

                    <button
                        type="button"
                        className="action-btn success"
                        onClick={publish}
                        disabled={loading}
                    >

                        <FaGlobe />

                        Publish

                    </button>

                )}

                {internship.status === "Published" && (

                    <button
                        type="button"
                        className="action-btn warning"
                        onClick={close}
                        disabled={loading}
                    >

                        <FaLock />

                        Close

                    </button>

                )}

                <button
                    type="button"
                    className="action-btn danger"
                    onClick={() => setOpenDelete(true)}
                    disabled={loading}
                >

                    <FaTrash />

                    Delete

                </button>

            </div>

            <DeleteModal

                open={openDelete}

                loading={loading}

                title={internship.title}

                onClose={() => setOpenDelete(false)}

                onDelete={remove}

            />

        </>

    );

};

export default QuickActions;