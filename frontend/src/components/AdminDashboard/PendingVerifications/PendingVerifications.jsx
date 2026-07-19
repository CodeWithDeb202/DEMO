import "./PendingVerifications.css";

import { Link } from "react-router-dom";

import {

    FaBuilding,
    FaEye,
    FaCheckCircle,
    FaTimesCircle,
    FaDownload,
    FaFileAlt,
    FaCommentDots

} from "react-icons/fa";

const PendingVerifications = ({

    companies = []

}) => {

    return (

        <section className="pending-verifications">

            <div className="section-header">

                <h2>

                    Pending Company Verifications

                </h2>

                <Link

                    to="/admin/company-verifications"

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

                            No Pending Requests

                        </h3>

                        <p>

                            All company verification requests are completed.

                        </p>

                    </div>

                )

                :

                (

                    <div className="verification-table">

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

                                        GST / CIN

                                    </th>

                                    <th>

                                        Applied

                                    </th>

                                    <th>

                                        Documents

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

                                                {

                                                    company.registrationNumber ||

                                                    company.gstNumber ||

                                                    "N/A"

                                                }

                                            </td>

                                            <td>

                                                {

                                                    new Date(

                                                        company.createdAt

                                                    ).toLocaleDateString()

                                                }

                                            </td>

                                            <td>

                                                <a

                                                    href={

                                                        company.registrationDocument

                                                    }

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="document-link"

                                                >

                                                    <FaFileAlt />

                                                    View

                                                </a>

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

                                                    <a

                                                        href={

                                                            company.registrationDocument

                                                        }

                                                        download

                                                        className="action-btn download"

                                                        title="Download"

                                                    >

                                                        <FaDownload />

                                                    </a>

                                                    <button

                                                        className="action-btn approve"

                                                        title="Approve"

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

                                                        className="action-btn remark"

                                                        title="Remark"

                                                    >

                                                        <FaCommentDots />

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

export default PendingVerifications;