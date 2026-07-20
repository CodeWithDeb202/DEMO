import "./ApplicantFilters.css";
import { FaSearch } from "react-icons/fa";

const ApplicantFilters = ({

    filters,

    setFilters

}) => {

    const handleChange = (e) => {

        setFilters({

            ...filters,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="applicant-filters">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    name="search"
                    placeholder="Search applicant..."
                    value={filters.search}
                    onChange={handleChange}
                />

            </div>

            <select
                name="status"
                value={filters.status}
                onChange={handleChange}
            >

                <option value="">All Status</option>
                <option value="Applied">Applied</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Rejected">Rejected</option>
                <option value="Hired">Hired</option>

            </select>

            <select
                name="sort"
                value={filters.sort}
                onChange={handleChange}
            >

                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>

            </select>

        </div>

    );

};

export default ApplicantFilters;