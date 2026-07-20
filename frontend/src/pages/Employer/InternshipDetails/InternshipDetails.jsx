import "./InternshipDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import InternshipOverview from "../../components/Employer/InternshipDetails/InternshipOverview";
import InternshipDescription from "../../components/Employer/InternshipDetails/InternshipDescription";
import InternshipStats from "../../components/Employer/InternshipDetails/InternshipStats";
import ApplicantsPreview from "../../components/Employer/InternshipDetails/ApplicantsPreview";
import ActivityTimeline from "../../components/Employer/InternshipDetails/ActivityTimeline";
import QuickActions from "../../components/Employer/InternshipDetails/QuickActions";

import { getInternshipById } from "../../services/api/internshipService";

const InternshipDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [internship, setInternship] = useState(null);

    useEffect(() => {

        fetchInternship();

    }, [id]);

    const fetchInternship = async () => {

        try {

            setLoading(true);

            const response = await getInternshipById(id);

            setInternship(response.internship);

        } catch (error) {

            toast.error("Failed to load internship");

            navigate("/employer/my-internships");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="details-loading">

                Loading Internship...

            </div>

        );

    }

    return (

        <div className="internship-details">

            <InternshipOverview
                internship={internship}
            />

            <QuickActions
                internship={internship}
                refresh={fetchInternship}
            />

            <div className="details-grid">

                <div className="details-left">

                    <InternshipDescription
                        internship={internship}
                    />

                    <ActivityTimeline
                        activities={internship.activities || []}
                    />

                </div>

                <div className="details-right">

                    <InternshipStats
                        internship={internship}
                    />

                    <ApplicantsPreview
                        applicants={internship.applicants || []}
                    />

                </div>

            </div>

        </div>

    );

};

export default InternshipDetails;