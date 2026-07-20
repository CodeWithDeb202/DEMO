import "./ScheduleInterviewModal.css";

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

function ScheduleInterviewModal({

    open,

    onClose,

    onSubmit,

    internship,

    loading = false

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm({

        defaultValues: {

            interviewType: "online",

            meetingLink: "",

            location: "",

            interviewDate: "",

            interviewTime: "",

            duration: 30,

            interviewer: "",

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

            ...data,

            internshipId: internship?._id

        });

    };

    return (

        <div className="schedule-modal-overlay">

            <div className="schedule-modal">

                <div className="schedule-header">

                    <div>

                        <h2>

                            Schedule Interview

                        </h2>

                        <p>

                            {internship?.title}

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

                    onSubmit={handleSubmit(submitHandler)}

                    className="schedule-form"

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

                        label="Duration (Minutes)"

                        type="number"

                        {...register("duration")}

                    />

                    <Input

                        label="Interviewer Name"

                        placeholder="John Smith"

                        {...register("interviewer")}

                    />

                    <Input

                        label="Meeting Link"

                        placeholder="https://meet.google.com"

                        {...register("meetingLink")}

                    />

                    <Input

                        label="Location"

                        placeholder="Office Address"

                        {...register("location")}

                    />

                    <Textarea

                        label="Notes"

                        rows={5}

                        placeholder="Interview instructions..."

                        {...register("notes")}

                    />

                    <div className="schedule-actions">

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

                                    ? "Scheduling..."

                                    : "Schedule Interview"

                            }

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default ScheduleInterviewModal;