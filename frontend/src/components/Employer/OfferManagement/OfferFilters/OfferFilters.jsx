import "./OfferFilters.css";

function OfferFilters({

    search,
    setSearch,

    status,
    setStatus,

    company,
    setCompany,

    sort,
    setSort,

    onReset

}) {

    return (

        <div className="offer-filters">

            <input

                type="text"

                placeholder="Search candidate..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

            />

            <select

                value={status}

                onChange={(e) => setStatus(e.target.value)}

            >

                <option value="">
                    All Status
                </option>

                <option value="Pending">
                    Pending
                </option>

                <option value="Issued">
                    Issued
                </option>

                <option value="Accepted">
                    Accepted
                </option>

                <option value="Rejected">
                    Rejected
                </option>

                <option value="Expired">
                    Expired
                </option>

            </select>

            <select

                value={company}

                onChange={(e) => setCompany(e.target.value)}

            >

                <option value="">
                    All Companies
                </option>

                <option value="Google">
                    Google
                </option>

                <option value="Microsoft">
                    Microsoft
                </option>

                <option value="Amazon">
                    Amazon
                </option>

                <option value="Infosys">
                    Infosys
                </option>

                <option value="TCS">
                    TCS
                </option>

            </select>

            <select

                value={sort}

                onChange={(e) => setSort(e.target.value)}

            >

                <option value="latest">
                    Latest
                </option>

                <option value="oldest">
                    Oldest
                </option>

                <option value="stipend">
                    Highest Stipend
                </option>

                <option value="candidate">
                    Candidate Name
                </option>

            </select>

            <button

                className="reset-btn"

                onClick={onReset}

            >

                Reset

            </button>

        </div>

    );

}

export default OfferFilters;