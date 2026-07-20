import "./RecruiterNotes.css";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { saveRecruiterNotes } from "../../../services/api/applicationService";

const RecruiterNotes = ({

    applicant,

    refresh

}) => {

    const [notes, setNotes] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setNotes(applicant.recruiterNotes || "");

    }, [applicant]);

    const handleSave = async () => {

        try {

            setLoading(true);

            await saveRecruiterNotes(

                applicant._id,

                {

                    notes

                }

            );

            toast.success("Notes saved");

            refresh();

        } catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Failed to save notes"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="recruiter-notes">

            <h3>Recruiter Notes</h3>

            <textarea

                placeholder="Write private notes about this applicant..."

                value={notes}

                onChange={(e) => setNotes(e.target.value)}

            />

            <div className="notes-footer">

                <span>

                    Private notes visible only to recruiters.

                </span>

                <button

                    type="button"

                    onClick={handleSave}

                    disabled={loading}

                >

                    {loading ? "Saving..." : "Save Notes"}

                </button>

            </div>

        </div>

    );

};

export default RecruiterNotes;