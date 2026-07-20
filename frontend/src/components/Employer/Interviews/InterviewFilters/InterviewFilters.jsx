import "./InterviewFilters.css";
import { FaSearch } from "react-icons/fa";

const InterviewFilters = ({

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

        <div className="interview-filters">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input

                    type="text"

                    name="search"

                    placeholder="Search candidate..."

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

                <option value="Scheduled">Scheduled</option>

                <option value="Completed">Completed</option>

                <option value="Cancelled">Cancelled</option>

                <option value="Rescheduled">Rescheduled</option>

            </select>

            <select

                name="mode"

                value={filters.mode}

                onChange={handleChange}

            >

                <option value="">All Modes</option>

                <option value="Online">Online</option>

                <option value="Offline">Offline</option>

            </select>

        </div>

    );

};

export default InterviewFilters;