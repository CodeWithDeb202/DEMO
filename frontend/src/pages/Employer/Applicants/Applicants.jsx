import "./Applicants.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ApplicantStats from "../../components/Employer/Applicants/ApplicantStats";
import ApplicantFilters from "../../components/Employer/Applicants/ApplicantFilters";
import ApplicantsTable from "../../components/Employer/Applicants/ApplicantsTable";

import { getInternshipApplicants } from "../../services/api/internshipService";

const Applicants = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [applicants, setApplicants] = useState([]);

    const [filters, setFilters] = useState({

        search: "",
        status: "",
        sort: "latest"

    });

    useEffect(() => {

        fetchApplicants();

    }, [filters]);

    const fetchApplicants = async () => {

        try {

            setLoading(true);

            const response = await getInternshipApplicants(

                id,

                filters

            );

            setApplicants(response.applicants || []);

        } catch (error) {

            toast.error("Failed to load applicants");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="applicants-page">

            <div className="page-header">

                <div>

                    <h1>Applicants</h1>

                    <p>

                        Manage internship applicants.

                    </p>

                </div>

            </div>

            <ApplicantStats

                applicants={applicants}

            />

            <ApplicantFilters

                filters={filters}

                setFilters={setFilters}

            />

            <ApplicantsTable

                loading={loading}

                applicants={applicants}

                refresh={fetchApplicants}

            />

        </div>

    );

};

export default Applicants;