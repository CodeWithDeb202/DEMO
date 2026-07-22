import "./CompanyProfileCard.css";

import {

    FaBuilding,

    FaGlobe,

    FaEnvelope,

    FaPhone,

    FaUsers

} from "react-icons/fa";

function CompanyProfileCard({

    company

}) {

    return (

        <div className="company-profile-card">

            <div className="company-profile-left">

                <img

                    src={

                        company.logo ||

                        "/images/company-placeholder.png"

                    }

                    alt="Company Logo"

                />

            </div>

            <div className="company-profile-right">

                <h2>

                    {

                        company.companyName ||

                        "Company Name"

                    }

                </h2>

                <p>

                    {

                        company.description ||

                        "Company description will appear here."

                    }

                </p>

                <div className="company-profile-info">

                    <div>

                        <FaEnvelope />

                        <span>

                            {company.email || "-"}

                        </span>

                    </div>

                    <div>

                        <FaPhone />

                        <span>

                            {company.phone || "-"}

                        </span>

                    </div>

                    <div>

                        <FaBuilding />

                        <span>

                            {company.industry || "-"}

                        </span>

                    </div>

                    <div>

                        <FaUsers />

                        <span>

                            {company.companySize || "-"}

                        </span>

                    </div>

                    <div>

                        <FaGlobe />

                        <span>

                            {company.website || "-"}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CompanyProfileCard;