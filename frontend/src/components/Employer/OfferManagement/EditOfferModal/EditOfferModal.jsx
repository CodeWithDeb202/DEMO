import "./EditOfferModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Button from "../../Common/Form/Button";

function EditOfferModal({

    open,

    offer,

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

        if (offer) {

            reset({

                candidate: offer.candidate,

                company: offer.company,

                internship: offer.internship,

                designation: offer.designation,

                stipend: offer.stipend,

                joiningDate: offer.joiningDate,

                duration: offer.duration,

                location: offer.location,

                expiryDate: offer.expiryDate,

                message: offer.message

            });

        }

    }, [offer, reset]);

    if (!open) return null;

    return (

        <div className="edit-offer-overlay">

            <div className="edit-offer-modal">

                <div className="edit-offer-header">

                    <h2>

                        Edit Offer

                    </h2>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <form

                    className="edit-offer-form"

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

                    <div className="edit-offer-actions">

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

                                    ? "Updating..."

                                    : "Update Offer"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditOfferModal;