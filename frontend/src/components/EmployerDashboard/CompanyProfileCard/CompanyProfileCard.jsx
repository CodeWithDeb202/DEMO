import "./CompanyProfileCard.css";

import { Link } from "react-router-dom";

import {

    FaBuilding,
    FaGlobe,
    FaMapMarkerAlt,
    FaUsers,
    FaPhone,
    FaEnvelope,
    FaEye,
    FaCheckCircle,
    FaPen

} from "react-icons/fa";

const CompanyProfileCard = ({ company = {} }) => {

    return (

        <section className="company-profile-card">

            <div className="company-left">

                <img

                    src={

                        company.companyLogo ||

                        "/images/company-placeholder.png"

                    }

                    alt="Company Logo"

                />

            </div>

            <div className="company-center">

                <div className="company-title">

                    <h2>

                        {

                            company.companyName ||

                            "Company Name"

                        }

                    </h2>

                    {

                        company.isVerified && (

                            <span className="verified">

                                <FaCheckCircle />

                                Verified

                            </span>

                        )

                    }

                </div>

                <div className="company-info">

                    <span>

                        <FaBuilding />

                        {

                            company.industry ||

                            "Not Specified"

                        }

                    </span>

                    <span>

                        <FaUsers />

                        {

                            company.companySize ||

                            "N/A"

                        }

                    </span>

                    <span>

                        <FaMapMarkerAlt />

                        {

                            company.location ||

                            "N/A"

                        }

                    </span>

                    <span>

                        <FaGlobe />

                        {

                            company.website ||

                            "N/A"

                        }

                    </span>

                    <span>

                        <FaEnvelope />

                        {

                            company.email ||

                            "N/A"

                        }

                    </span>

                    <span>

                        <FaPhone />

                        {

                            company.phone ||

                            "N/A"

                        }

                    </span>

                    <span>

                        <FaEye />

                        {

                            company.profileViews || 0

                        } Views

                    </span>

                </div>

            </div>

            <div className="company-right">

                <Link

                    to="/company/profile"

                    className="edit-company-btn"

                >

                    <FaPen />

                    Edit Profile

                </Link>

            </div>

        </section>

    );

};

export default CompanyProfileCard;