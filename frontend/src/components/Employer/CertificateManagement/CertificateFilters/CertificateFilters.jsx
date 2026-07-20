import "./CertificateFilters.css";

function CertificateFilters({

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

        <div className="certificate-filters">

            <input

                type="text"

                placeholder="Search student..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            <select

                value={status}

                onChange={(e)=>setStatus(e.target.value)}

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

                <option value="Downloaded">
                    Downloaded
                </option>

            </select>

            <select

                value={company}

                onChange={(e)=>setCompany(e.target.value)}

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

                onChange={(e)=>setSort(e.target.value)}

            >

                <option value="latest">
                    Latest
                </option>

                <option value="oldest">
                    Oldest
                </option>

                <option value="student">
                    Student Name
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

export default CertificateFilters;