import "./MyInternships.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import InternshipTable from "../../components/Employer/Internships/InternshipTable";
import InternshipFilters from "../../components/Employer/Internships/InternshipFilters";
import InternshipStats from "../../components/Employer/Internships/InternshipStats";

import { getMyInternships } from "../../services/api/internshipService";

const MyInternships = () => {

    const [loading, setLoading] = useState(true);

    const [internships, setInternships] = useState([]);

    const [filters, setFilters] = useState({

        search: "",
        status: "",
        workMode: "",
        category: ""

    });

    useEffect(() => {

        fetchInternships();

    }, [filters]);

    const fetchInternships = async () => {

        try {

            setLoading(true);

            const response = await getMyInternships(filters);

            setInternships(response.internships || []);

        } catch (error) {

            console.log(error);

            toast.error("Failed to load internships");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="my-internships">

            <div className="page-header">

                <div>

                    <h1>My Internships</h1>

                    <p>Manage all your internships from one place.</p>

                </div>

                <Link
                    to="/employer/create-internship"
                    className="create-btn"
                >
                    Create Internship
                </Link>

            </div>

            <InternshipStats
                internships={internships}
            />

            <InternshipFilters
                filters={filters}
                setFilters={setFilters}
            />

            <InternshipTable
                loading={loading}
                internships={internships}
                refresh={fetchInternships}
            />

        </div>

    );

};

export default MyInternships;