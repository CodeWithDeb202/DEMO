import "./TeamFilters.css";

import {
    FaSearch,
    FaPlus
} from "react-icons/fa";

function TeamFilters({

    filters,

    onChange,

    onInvite

}) {

    const handleChange = (e) => {

        onChange({

            ...filters,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="team-filters">

            <div className="team-filter-left">

                <div className="team-search-box">

                    <FaSearch />

                    <input

                        type="text"

                        name="search"

                        placeholder="Search member..."

                        value={filters.search}

                        onChange={handleChange}

                    />

                </div>

                <select

                    name="role"

                    value={filters.role}

                    onChange={handleChange}

                >

                    <option value="">

                        All Roles

                    </option>

                    <option value="owner">

                        Owner

                    </option>

                    <option value="admin">

                        Admin

                    </option>

                    <option value="hr">

                        HR

                    </option>

                    <option value="manager">

                        Manager

                    </option>

                </select>

                <select

                    name="status"

                    value={filters.status}

                    onChange={handleChange}

                >

                    <option value="">

                        All Status

                    </option>

                    <option value="active">

                        Active

                    </option>

                    <option value="pending">

                        Pending

                    </option>

                    <option value="inactive">

                        Inactive

                    </option>

                </select>

            </div>

            <button

                className="invite-member-btn"

                onClick={onInvite}

            >

                <FaPlus />

                Invite Member

            </button>

        </div>

    );

}

export default TeamFilters;