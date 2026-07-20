import "./ApplicantDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ApplicantProfileCard from "../../components/Employer/ApplicantDetails/ApplicantProfileCard";
import ContactInformation from "../../components/Employer/ApplicantDetails/ContactInformation";
import EducationCard from "../../components/Employer/ApplicantDetails/EducationCard";
import ExperienceCard from "../../components/Employer/ApplicantDetails/ExperienceCard";
import SkillsCard from "../../components/Employer/ApplicantDetails/SkillsCard";
import ResumeCard from "../../components/Employer/ApplicantDetails/ResumeCard";
import SocialLinksCard from "../../components/Employer/ApplicantDetails/SocialLinksCard";
import ApplicationTimeline from "../../components/Employer/ApplicantDetails/ApplicationTimeline";
import RecruiterNotes from "../../components/Employer/ApplicantDetails/RecruiterNotes";
import ApplicantQuickActions from "../../components/Employer/ApplicantDetails/ApplicantQuickActions";

import { getApplicantDetails } from "../../services/api/applicationService";

const ApplicantDetails = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [applicant, setApplicant] = useState(null);

    useEffect(() => {

        fetchApplicant();

    }, [id]);

    const fetchApplicant = async () => {

        try {

            setLoading(true);

            const response = await getApplicantDetails(id);

            setApplicant(response.applicant);

        } catch (error) {

            toast.error("Failed to load applicant");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="applicant-details-loading">

                Loading Applicant...

            </div>

        );

    }

    return (

        <div className="applicant-details-page">

            <ApplicantProfileCard applicant={applicant} />

            <ApplicantQuickActions
                applicant={applicant}
                refresh={fetchApplicant}
            />

            <div className="applicant-details-grid">

                <div className="details-left">

                    <ContactInformation applicant={applicant} />

                    <EducationCard applicant={applicant} />

                    <ExperienceCard applicant={applicant} />

                    <SkillsCard applicant={applicant} />

                </div>

                <div className="details-right">

                    <ResumeCard applicant={applicant} />

                    <SocialLinksCard applicant={applicant} />

                    <ApplicationTimeline applicant={applicant} />

                    <RecruiterNotes
                        applicant={applicant}
                        refresh={fetchApplicant}
                    />

                </div>

            </div>

        </div>

    );

};

export default ApplicantDetails;