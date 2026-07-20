import "./RescheduleModal.css";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "../../Common/Form/Button";
import Input from "../../Common/Form/Input";
import Textarea from "../../Common/Form/Textarea";
import Select from "../../Common/Form/Select";

const interviewTypes = [
    {
        value: "online",
        label: "Online"
    },
    {
        value: "offline",
        label: "Offline"
    },
    {
        value: "phone",
        label: "Phone"
    }
];

function RescheduleModal({

    open,

    onClose,

    onSubmit,

    interview,

    loading = false

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm({

        defaultValues: {

            interviewType: "online",

            interviewDate: "",

            interviewTime: "",

            duration: 30,

            interviewer: "",

            meetingLink: "",

            location: "",

            reason: ""

        }

    });

    useEffect(() => {

        if (interview) {

            reset({

                interviewType: interview.interviewType || "online",

                interviewDate: interview.interviewDate || "",

                interviewTime: interview.interviewTime || "",

                duration: interview.duration || 30,

                interviewer: interview.interviewer || "",

                meetingLink: interview.meetingLink || "",

                location: interview.location || "",

                reason: ""

            });

        }

    }, [interview, reset]);

    if (!open) return null;

    const submitHandler = (data) => {

        onSubmit({

            interviewId: interview?._id,

            ...data

        });

    };

    return (

        <div className="reschedule-overlay">

            <div className="reschedule-modal">

                <div className="reschedule-header">

                    <div>

                        <h2>

                            Reschedule Interview

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

                    className="reschedule-form"

                    onSubmit={handleSubmit(submitHandler)}

                >

                    <Select

                        label="Interview Type"

                        options={interviewTypes}

                        {...register("interviewType")}

                    />

                    <Input

                        label="Interview Date"

                        type="date"

                        {...register("interviewDate")}

                    />

                    <Input

                        label="Interview Time"

                        type="time"

                        {...register("interviewTime")}

                    />

                    <Input

                        label="Duration"

                        type="number"

                        {...register("duration")}

                    />

                    <Input

                        label="Interviewer"

                        {...register("interviewer")}

                    />

                    <Input

                        label="Meeting Link"

                        {...register("meetingLink")}

                    />

                    <Input

                        label="Location"

                        {...register("location")}

                    />

                    <Textarea

                        label="Reason for Rescheduling"

                        rows={5}

                        placeholder="Enter reason..."

                        {...register("reason")}

                    />

                    <div className="reschedule-actions">

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

                                    : "Reschedule Interview"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default RescheduleModal;