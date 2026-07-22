import "./AnalyticsFilters.css";

function AnalyticsFilters({

    search,

    setSearch,

    internship,

    setInternship,

    period,

    setPeriod,

    status,

    setStatus,

    onReset,

    onExport

}) {

    return (

        <div className="analytics-filters">

            <input

                type="text"

                placeholder="Search internship..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            <select

                value={internship}

                onChange={(e)=>setInternship(e.target.value)}

            >

                <option value="">

                    All Internships

                </option>

                <option value="Frontend">

                    Frontend

                </option>

                <option value="Backend">

                    Backend

                </option>

                <option value="Full Stack">

                    Full Stack

                </option>

                <option value="UI UX">

                    UI / UX

                </option>

            </select>

            <select

                value={period}

                onChange={(e)=>setPeriod(e.target.value)}

            >

                <option value="7">

                    Last 7 Days

                </option>

                <option value="30">

                    Last 30 Days

                </option>

                <option value="90">

                    Last 3 Months

                </option>

                <option value="365">

                    Last Year

                </option>

            </select>

            <select

                value={status}

                onChange={(e)=>setStatus(e.target.value)}

            >

                <option value="">

                    All Status

                </option>

                <option value="Applied">

                    Applied

                </option>

                <option value="Interview">

                    Interview

                </option>

                <option value="Selected">

                    Selected

                </option>

                <option value="Rejected">

                    Rejected

                </option>

            </select>

            <button

                className="analytics-reset-btn"

                onClick={onReset}

            >

                Reset

            </button>

            <button

                className="analytics-export-btn"

                onClick={onExport}

            >

                Export Report

            </button>

        </div>

    );

}

export default AnalyticsFilters;