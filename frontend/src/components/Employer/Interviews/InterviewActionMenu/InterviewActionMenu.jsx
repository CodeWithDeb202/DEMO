import "./InterviewActionMenu.css";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaVideo,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaClipboardList
} from "react-icons/fa";

import ScheduleInterviewModal from "../ScheduleInterviewModal";
import RescheduleModal from "../RescheduleModal";
import InterviewFeedbackModal from "../InterviewFeedbackModal";

import {
    cancelInterview,
    completeInterview
} from "../../../services/api/interviewService";

const InterviewActionMenu = ({

    interview,

    completed,

    refresh

}) => {

    const [openSchedule, setOpenSchedule] = useState(false);

    const [openReschedule, setOpenReschedule] = useState(false);

    const [openFeedback, setOpenFeedback] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleComplete = async () => {

        try {

            setLoading(true);

            await completeInterview(interview._id);

            toast.success("Interview completed");

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Operation failed");

        } finally {

            setLoading(false);

        }

    };

    const handleCancel = async () => {

        try {

            setLoading(true);

            await cancelInterview(interview._id);

            toast.success("Interview cancelled");

            refresh();

        } catch (error) {

            toast.error(error?.response?.data?.message || "Operation failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <div className="interview-actions">

                {!completed && (

                    <>

                        <a

                            href={interview.meetingLink}

                            target="_blank"

                            rel="noreferrer"

                            className="action-btn video"

                        >

                            <FaVideo />

                            Join

                        </a>

                        <button

                            type="button"

                            className="action-btn warning"

                            onClick={() => setOpenReschedule(true)}

                        >

                            <FaCalendarAlt />

                            Reschedule

                        </button>

                        <button

                            type="button"

                            className="action-btn success"

                            disabled={loading}

                            onClick={handleComplete}

                        >

                            <FaCheckCircle />

                            Complete

                        </button>

                        <button

                            type="button"

                            className="action-btn danger"

                            disabled={loading}

                            onClick={handleCancel}

                        >

                            <FaTimesCircle />

                            Cancel

                        </button>

                    </>

                )}

                {completed && (

                    <button

                        type="button"

                        className="action-btn primary"

                        onClick={() => setOpenFeedback(true)}

                    >

                        <FaClipboardList />

                        Feedback

                    </button>

                )}

            </div>

            <ScheduleInterviewModal

                open={openSchedule}

                onClose={() => setOpenSchedule(false)}

                refresh={refresh}

            />

            <RescheduleModal

                open={openReschedule}

                interview={interview}

                onClose={() => setOpenReschedule(false)}

                refresh={refresh}

            />

            <InterviewFeedbackModal

                open={openFeedback}

                interview={interview}

                onClose={() => setOpenFeedback(false)}

                refresh={refresh}

            />

        </>

    );

};

export default InterviewActionMenu;