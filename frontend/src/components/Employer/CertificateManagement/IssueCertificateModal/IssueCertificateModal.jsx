import "./IssueCertificateModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Button from "../../Common/Form/Button";

function IssueCertificateModal({

    open,

    loading,

    onClose,

    onSubmit

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm({

        defaultValues: {

            studentName: "",

            certificateId: "",

            company: "",

            internship: "",

            designation: "",

            startDate: "",

            endDate: "",

            issueDate: "",

            grade: "",

            message: ""

        }

    });

    useEffect(() => {

        if (!open) {

            reset();

        }

    }, [open, reset]);

    if (!open) return null;

    return (

        <div className="issue-certificate-overlay">

            <div className="issue-certificate-modal">

                <div className="issue-certificate-header">

                    <h2>

                        Issue Certificate

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <form

                    className="issue-certificate-form"

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

                            rows={5}

                            label="Certificate Message"

                            {...register("message")}

                        />

                    </div>

                    <div className="issue-certificate-actions">

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

                                    ? "Issuing..."

                                    : "Issue Certificate"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default IssueCertificateModal;