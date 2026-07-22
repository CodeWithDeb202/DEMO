import "./NotificationFilters.css";

import { FaSearch, FaFilter, FaPlus } from "react-icons/fa";

function NotificationFilters({

    filters,

    onChange,

    onCreate

}) {

    return (

        <div className="notification-filters">

            <div className="notification-search">

                <FaSearch />

                <input

                    type="text"

                    placeholder="Search notifications..."

                    value={filters.search}

                    onChange={(e) =>

                        onChange({

                            ...filters,

                            search: e.target.value

                        })

                    }

                />

            </div>

            <select

                value={filters.type}

                onChange={(e) =>

                    onChange({

                        ...filters,

                        type: e.target.value

                    })

                }

            >

                <option value="">

                    All Types

                </option>

                <option value="email">

                    Email

                </option>

                <option value="push">

                    Push

                </option>

                <option value="system">

                    System

                </option>

            </select>

            <select

                value={filters.status}

                onChange={(e) =>

                    onChange({

                        ...filters,

                        status: e.target.value

                    })

                }

            >

                <option value="">

                    All Status

                </option>

                <option value="sent">

                    Sent

                </option>

                <option value="scheduled">

                    Scheduled

                </option>

                <option value="draft">

                    Draft

                </option>

            </select>

            <button

                className="filter-btn"

            >

                <FaFilter />

                Filters

            </button>

            <button

                className="create-btn"

                onClick={onCreate}

            >

                <FaPlus />

                New Notification

            </button>

        </div>

    );

}

export default NotificationFilters;