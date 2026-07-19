import "./RecentInternships.css";

import { Link } from "react-router-dom";

import {

    FaBriefcase,
    FaBuilding,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaUsers,
    FaEye,
    FaEdit,
    FaBan,
    FaTrash

} from "react-icons/fa";

const RecentInternships = ({

    internships = []

}) => {

    return (

        <section className="recent-internships">

            <div className="section-header">

                <h2>

                    Recent Internships

                </h2>

                <Link

                    to="/admin/internships"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                internships.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Internships Found

                        </h3>

                        <p>

                            Recently posted internships will appear here.

                        </p>

                    </div>

                )

                :

                (

                    <div className="internships-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>

                                        Internship

                                    </th>

                                    <th>

                                        Company

                                    </th>

                                    <th>

                                        Location

                                    </th>

                                    <th>

                                        Stipend

                                    </th>

                                    <th>

                                        Applications

                                    </th>

                                    <th>

                                        Status

                                    </th>

                                    <th>

                                        Posted

                                    </th>

                                    <th>

                                        Actions

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    internships

                                    .slice(0,10)

                                    .map((internship)=>(

                                        <tr

                                            key={internship._id}

                                        >

                                            <td>

                                                <div className="internship-info">

                                                    <div className="internship-icon">

                                                        <FaBriefcase />

                                                    </div>

                                                    <div>

                                                        <h4>

                                                            {

                                                                internship.title

                                                            }

                                                        </h4>

                                                        <small>

                                                            {

                                                                internship.category ||

                                                                "Internship"

                                                            }

                                                        </small>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>

                                                <div className="company-name">

                                                    <FaBuilding />

                                                    {

                                                        internship.company?.companyName

                                                    }

                                                </div>

                                            </td>

                                            <td>

                                                <div className="location">

                                                    <FaMapMarkerAlt />

                                                    {

                                                        internship.location

                                                    }

                                                </div>

                                            </td>

                                            <td>

                                                <div className="stipend">

                                                    <FaMoneyBillWave />

                                                    {

                                                        internship.stipend

                                                    }

                                                </div>

                                            </td>

                                            <td>

                                                <div className="applications">

                                                    <FaUsers />

                                                    {

                                                        internship.totalApplications ||

                                                        0

                                                    }

                                                </div>

                                            </td>

                                            <td>

                                                <span

                                                    className={`status ${internship.status?.toLowerCase()}`}

                                                >

                                                    {

                                                        internship.status

                                                    }

                                                </span>

                                            </td>

                                            <td>

                                                {

                                                    new Date(

                                                        internship.createdAt

                                                    ).toLocaleDateString()

                                                }

                                            </td>

                                            <td>

                                                <div className="table-actions">

                                                    <Link

                                                        to={`/admin/internships/${internship._id}`}

                                                        className="action-btn view"

                                                    >

                                                        <FaEye />

                                                    </Link>

                                                    <Link

                                                        to={`/admin/internships/edit/${internship._id}`}

                                                        className="action-btn edit"

                                                    >

                                                        <FaEdit />

                                                    </Link>

                                                    <button

                                                        className="action-btn disable"

                                                    >

                                                        <FaBan />

                                                    </button>

                                                    <button

                                                        className="action-btn delete"

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

export default RecentInternships;