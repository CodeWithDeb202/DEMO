import "./InternshipFilters.css";
import { FaSearch } from "react-icons/fa";

const InternshipFilters = ({ filters, setFilters }) => {

    const handleChange = (e) => {

        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });

    };

    return (

        <div className="internship-filters">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    name="search"
                    placeholder="Search internship..."
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
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Closed">Closed</option>

            </select>

            <select
                name="workMode"
                value={filters.workMode}
                onChange={handleChange}
            >

                <option value="">All Work Modes</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>

            </select>

            <select
                name="category"
                value={filters.category}
                onChange={handleChange}
            >

                <option value="">All Categories</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="AI/ML">AI / ML</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Cloud Computing">Cloud Computing</option>

            </select>

        </div>

    );

};

export default InternshipFilters;