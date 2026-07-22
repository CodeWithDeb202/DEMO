import "./CompanyProfile.css";

import { useState } from "react";

import CompanyProfileCard from "../../../components/Employer/Settings/CompanyProfile/CompanyProfileCard";
import CompanyBasicInfo from "../../../components/Employer/Settings/CompanyProfile/CompanyBasicInfo";
import CompanyAddress from "../../../components/Employer/Settings/CompanyProfile/CompanyAddress";
import CompanySocialLinks from "../../../components/Employer/Settings/CompanyProfile/CompanySocialLinks";
import CompanyLogoUpload from "../../../components/Employer/Settings/CompanyProfile/CompanyLogoUpload";
import CompanyGallery from "../../../components/Employer/Settings/CompanyProfile/CompanyGallery";

function CompanyProfile() {

    const [company, setCompany] = useState({

        companyName: "",

        email: "",

        phone: "",

        website: "",

        industry: "",

        companySize: "",

        foundedYear: "",

        description: "",

        address: "",

        city: "",

        state: "",

        country: "",

        pincode: "",

        linkedin: "",

        github: "",

        twitter: "",

        instagram: "",

        logo: "",

        gallery: []

    });

    const handleSave = () => {

        console.log(company);

    };

    return (

        <div className="company-profile-page">

            <CompanyProfileCard

                company={company}

            />

            <CompanyLogoUpload

                company={company}

                setCompany={setCompany}

            />

            <CompanyBasicInfo

                company={company}

                setCompany={setCompany}

            />

            <CompanyAddress

                company={company}

                setCompany={setCompany}

            />

            <CompanySocialLinks

                company={company}

                setCompany={setCompany}

            />

            <CompanyGallery

                company={company}

                setCompany={setCompany}

            />

            <button

                className="company-save-btn"

                onClick={handleSave}

            >

                Save Company Profile

            </button>

        </div>

    );

}

export default CompanyProfile;