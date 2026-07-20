import "./IssueOfferModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Button from "../../Common/Form/Button";

function IssueOfferModal({

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

            candidate: "",

            company: "",

            internship: "",

            designation: "",

            stipend: "",

            joiningDate: "",

            duration: "",

            location: "",

            expiryDate: "",

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

        <div className="issue-offer-overlay">

            <div className="issue-offer-modal">

                <div className="issue-offer-header">

                    <h2>

                        Issue Offer Letter

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <form

                    className="issue-offer-form"

                    onSubmit={handleSubmit(onSubmit)}

                >

                    <Input

                        label="Candidate"

                        {...register("candidate")}

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

                        label="Stipend"

                        {...register("stipend")}

                    />

                    <Input

                        label="Joining Date"

                        type="date"

                        {...register("joiningDate")}

                    />

                    <Input

                        label="Duration"

                        {...register("duration")}

                    />

                    <Input

                        label="Location"

                        {...register("location")}

                    />

                    <Input

                        label="Offer Expiry"

                        type="date"

                        {...register("expiryDate")}

                    />

                    <div className="full-width">

                        <Textarea

                            label="Message"

                            rows={5}

                            {...register("message")}

                        />

                    </div>

                    <div className="issue-offer-actions">

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

                                    : "Issue Offer"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default IssueOfferModal;