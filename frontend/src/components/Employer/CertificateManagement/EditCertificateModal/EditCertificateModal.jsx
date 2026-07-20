import "./EditCertificateModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Button from "../../Common/Form/Button";

function EditCertificateModal({

    open,

    certificate,

    loading,

    onClose,

    onSubmit

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm();

    useEffect(() => {

        if (certificate) {

            reset({

                studentName: certificate.studentName,

                certificateId: certificate.certificateId,

                company: certificate.company,

                internship: certificate.internship,

                designation: certificate.designation,

                startDate: certificate.startDate,

                endDate: certificate.endDate,

                issueDate: certificate.issueDate,

                grade: certificate.grade,

                message: certificate.message

            });

        }

    }, [certificate, reset]);

    if (!open) return null;

    return (

        <div className="edit-certificate-overlay">

            <div className="edit-certificate-modal">

                <div className="edit-certificate-header">

                    <h2>

                        Edit Certificate

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <form

                    className="edit-certificate-form"

                    onSubmit={handleSubmit(onSubmit)}

                >

                    <Input

                        label="Student Name"

                        {...register("studentName")}

                    />

                    <Input

                        label="Certificate ID"

                        {...register("certificateId")}

                    />

                    <Input

                        label="Company"

                        {...register("company")}

                    />

                    <Input

                        label="Internship"

                        {...register("internship")}

                    />

                    <Input

                        label="Designation"

                        {...register("designation")}

                    />

                    <Input

                        type="date"

                        label="Start Date"

                        {...register("startDate")}

                    />

                    <Input

                        type="date"

                        label="End Date"

                        {...register("endDate")}

                    />

                    <Input

                        type="date"

                        label="Issue Date"

                        {...register("issueDate")}

                    />

                    <Input

                        label="Performance Grade"

                        {...register("grade")}

                    />

                    <div className="full-width">

                        <Textarea

                            label="Certificate Message"

                            rows={5}

                            {...register("message")}

                        />

                    </div>

                    <div className="edit-certificate-actions">

                        <Button

                            type="button"

                            variant="secondary"

                            onClick={onClose}

                        >

                            Cancel

                        </Button>

                        <Button

                            type="submit"

                            disabled={loading}

                        >

                            {

                                loading

                                    ?

                                    "Updating..."

                                    :

                                    "Update Certificate"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditCertificateModal;