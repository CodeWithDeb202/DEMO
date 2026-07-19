import "./RecentCompanies.css";

import { Link } from "react-router-dom";

import {

    FaEye,
    FaCheckCircle,
    FaTimesCircle,
    FaBan,
    FaTrash,
    FaBuilding

} from "react-icons/fa";

const RecentCompanies = ({ companies = [] }) => {

    return (

        <section className="recent-companies">

            <div className="section-header">

                <h2>

                    Recent Companies

                </h2>

                <Link

                    to="/admin/companies"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                companies.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Companies Found

                        </h3>

                        <p>

                            Registered companies will appear here.

                        </p>

                    </div>

                )

                :

                (

                    <div className="companies-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>

                                        Company

                                    </th>

                                    <th>

                                        Owner

                                    </th>

                                    <th>

                                        Email

                                    </th>

                                    <th>

                                        Status

                                    </th>

                                    <th>

                                        Registered

                                    </th>

                                    <th>

                                        Actions

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    companies

                                    .slice(0,10)

                                    .map((company)=>(

                                        <tr

                                            key={company._id}

                                        >

                                            <td>

                                                <div className="company-info">

                                                    <img

                                                        src={

                                                            company.companyLogo ||

                                                            "/images/company-placeholder.png"

                                                        }

                                                        alt="Company"

                                                    />

                                                    <div>

                                                        <h4>

                                                            {

                                                                company.companyName

                                                            }

                                                        </h4>

                                                        <small>

                                                            <FaBuilding />

                                                            {" "}

                                                            Company

                                                        </small>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>

                                                {

                                                    company.owner?.firstName

                                                }{" "}

                                                {

                                                    company.owner?.lastName

                                                }

                                            </td>

                                            <td>

                                                {

                                                    company.email

                                                }

                                            </td>

                                            <td>

                                                <span

                                                    className={`status ${company.isVerified ? "verified" : "pending"}`}

                                                >

                                                    {

                                                        company.isVerified

                                                        ?

                                                        "Verified"

                                                        :

                                                        "Pending"

                                                    }

                                                </span>

                                            </td>

                                            <td>

                                                {

                                                    new Date(

                                                        company.createdAt

                                                    ).toLocaleDateString()

                                                }

                                            </td>

                                            <td>

                                                <div className="table-actions">

                                                    <Link

                                                        to={`/admin/companies/${company._id}`}

                                                        className="action-btn view"

                                                        title="View"

                                                    >

                                                        <FaEye />

                                                    </Link>

                                                    <button

                                                        className="action-btn verify"

                                                        title="Verify"

                                                    >

                                                        <FaCheckCircle />

                                                    </button>

                                                    <button

                                                        className="action-btn reject"

                                                        title="Reject"

                                                    >

                                                        <FaTimesCircle />

                                                    </button>

                                                    <button

                                                        className="action-btn suspend"

                                                        title="Suspend"

                                                    >

                                                        <FaBan />

                                                    </button>

                                                    <button

                                                        className="action-btn delete"

                                                        title="Delete"

                                                    >

                                                        <FaTrash />

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                )

            }

        </section>

    );

};

export default RecentCompanies;