import "./InternshipRow.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaEye,
    FaEdit,
    FaTrash,
    FaCopy,
    FaUsers,
    FaLock,
    FaGlobe
} from "react-icons/fa";

import StatusBadge from "../StatusBadge";
import DeleteModal from "../DeleteModal";

import {
    deleteInternship,
    duplicateInternship,
    publishInternship,
    closeInternship
} from "../../../services/api/internshipService";

import toast from "react-hot-toast";

const InternshipRow = ({

    internship,

    refresh

}) => {

    const [loading, setLoading] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    const handleDelete = async () => {

        try {

            setLoading(true);

            await deleteInternship(internship._id);

            toast.success("Internship deleted");

            setOpenDelete(false);

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Delete failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleDuplicate = async () => {

        try {

            await duplicateInternship(internship._id);

            toast.success("Internship duplicated");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Duplicate failed"
            );

        }

    };

    const handlePublish = async () => {

        try {

            await publishInternship(internship._id);

            toast.success("Internship published");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Publish failed"
            );

        }

    };

    const handleClose = async () => {

        try {

            await closeInternship(internship._id);

            toast.success("Internship closed");

            refresh();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Close failed"
            );

        }

    };

    return (

        <>

            <tr>

                <td>

                    <div className="title-cell">

                        <h4>

                            {internship.title}

                        </h4>

                        <p>

                            {internship.companyName}

                        </p>

                    </div>

                </td>

                <td>

                    {internship.category}

                </td>

                <td>

                    {internship.workMode}

                </td>

                <td>

                    <StatusBadge

                        status={internship.status}

                    />

                </td>

                <td>

                    {internship.totalApplications || 0}

                </td>

                <td>

                    {new Date(
                        internship.deadline
                    ).toLocaleDateString()}

                </td>

                <td>

                    <div className="action-buttons">

                        <Link
                            to={`/employer/internships/${internship._id}`}
                            className="icon-btn"
                            title="View"
                        >

                            <FaEye />

                        </Link>

                        <Link
                            to={`/employer/edit-internship/${internship._id}`}
                            className="icon-btn"
                            title="Edit"
                        >

                            <FaEdit />

                        </Link>

                        <button
                            type="button"
                            className="icon-btn"
                            title="Applicants"
                        >

                            <FaUsers />

                        </button>

                        <button
                            type="button"
                            className="icon-btn"
                            title="Duplicate"
                            onClick={handleDuplicate}
                        >

                            <FaCopy />

                        </button>

                        {internship.status === "Draft" && (

                            <button
                                type="button"
                                className="icon-btn success"
                                title="Publish"
                                onClick={handlePublish}
                            >

                                <FaGlobe />

                            </button>

                        )}

                        {internship.status === "Published" && (

                            <button
                                type="button"
                                className="icon-btn warning"
                                title="Close"
                                onClick={handleClose}
                            >

                                <FaLock />

                            </button>

                        )}

                        <button
                            type="button"
                            className="icon-btn danger"
                            title="Delete"
                            onClick={() => setOpenDelete(true)}
                        >

                            <FaTrash />

                        </button>

                    </div>

                </td>

            </tr>

            <DeleteModal

                open={openDelete}

                loading={loading}

                title={internship.title}

                onClose={() => setOpenDelete(false)}

                onDelete={handleDelete}

            />

        </>

    );

};

export default InternshipRow;