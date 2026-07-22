import "./RolesFilters.css";

import { FaSearch, FaPlus } from "react-icons/fa";

function RolesFilters({

    filters,

    onChange,

    onAddRole

}) {

    const handleChange = (e) => {

        onChange({

            ...filters,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="roles-filters">

            <div className="roles-filter-left">

                <div className="roles-search-box">

                    <FaSearch />

                    <input

                        type="text"

                        name="search"

                        placeholder="Search Role..."

                        value={filters.search}

                        onChange={handleChange}

                    />

                </div>

                <select

                    name="status"

                    value={filters.status || ""}

                    onChange={handleChange}

                >

                    <option value="">

                        All Status

                    </option>

                    <option value="active">

                        Active

                    </option>

                    <option value="inactive">

                        Inactive

                    </option>

                </select>

            </div>

            <button

                className="add-role-btn"

                onClick={onAddRole}

            >

                <FaPlus />

                Add New Role

            </button>

        </div>

    );

}

export default RolesFilters;