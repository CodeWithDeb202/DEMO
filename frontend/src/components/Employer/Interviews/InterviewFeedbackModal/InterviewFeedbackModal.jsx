import "./InterviewFeedbackModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Select from "../../Common/Form/Select";
import Button from "../../Common/Form/Button";

const recommendationOptions = [
    {
        value: "hire",
        label: "Hire"
    },
    {
        value: "hold",
        label: "Hold"
    },
    {
        value: "reject",
        label: "Reject"
    }
];

const ratingOptions = [
    {
        value: 1,
        label: "⭐ 1"
    },
    {
        value: 2,
        label: "⭐⭐ 2"
    },
    {
        value: 3,
        label: "⭐⭐⭐ 3"
    },
    {
        value: 4,
        label: "⭐⭐⭐⭐ 4"
    },
    {
        value: 5,
        label: "⭐⭐⭐⭐⭐ 5"
    }
];

function InterviewFeedbackModal({

    open,

    interview,

    loading = false,

    onClose,

    onSubmit

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm({

        defaultValues: {

            rating: 5,

            recommendation: "hire",

            technicalFeedback: "",

            hrFeedback: "",

            strengths: "",

            weaknesses: "",

            notes: ""

        }

    });

    useEffect(() => {

        if (!open) {

            reset();

        }

    }, [open, reset]);

    if (!open) return null;

    const submitHandler = (data) => {

        onSubmit({

            interviewId: interview?._id,

            ...data

        });

    };

    return (

        <div className="feedback-overlay">

            <div className="feedback-modal">

                <div className="feedback-header">

                    <div>

                        <h2>

                            Interview Feedback

                        </h2>

                        <p>

                            {interview?.candidateName}

                        </p>

                    </div>

                    <button

                        className="close-btn"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <form

                    className="feedback-form"

                    onSubmit={handleSubmit(submitHandler)}

                >

                    <Select

                        label="Candidate Rating"

                        options={ratingOptions}

                        {...register("rating")}

                    />

                    <Select

                        label="Recommendation"

                        options={recommendationOptions}

                        {...register("recommendation")}

                    />

                    <Textarea

                        label="Technical Feedback"

                        rows={5}

                        placeholder="Technical performance..."

                        {...register("technicalFeedback")}

                    />

                    <Textarea

                        label="HR Feedback"

                        rows={5}

                        placeholder="Communication, attitude..."

                        {...register("hrFeedback")}

                    />

                    <Textarea

                        label="Strengths"

                        rows={4}

                        placeholder="Candidate strengths..."

                        {...register("strengths")}

                    />

                    <Textarea

                        label="Weaknesses"

                        rows={4}

                        placeholder="Areas of improvement..."

                        {...register("weaknesses")}

                    />

                    <Textarea

                        label="Additional Notes"

                        rows={5}

                        placeholder="Additional comments..."

                        {...register("notes")}

                    />

                    <div className="feedback-actions">

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

                                    ? "Saving..."

                                    : "Save Feedback"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default InterviewFeedbackModal;