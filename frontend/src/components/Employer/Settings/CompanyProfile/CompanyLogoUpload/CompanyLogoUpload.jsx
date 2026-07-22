import "./CompanyLogoUpload.css";

import {

    FaCamera,
    FaTrash

} from "react-icons/fa";

function CompanyLogoUpload({

    company,

    setCompany

}) {

    const handleLogoChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const preview = URL.createObjectURL(file);

        setCompany({

            ...company,

            logo: preview,

            logoFile: file

        });

    };

    const removeLogo = () => {

        setCompany({

            ...company,

            logo: "",

            logoFile: null

        });

    };

    return (

        <div className="company-logo-upload">

            <h2>

                Company Logo

            </h2>

            <div className="company-logo-wrapper">

                <div className="company-logo-preview">

                    {

                        company.logo

                            ?

                            <img

                                src={company.logo}

                                alt="Company Logo"

                            />

                            :

                            <div className="company-logo-placeholder">

                                Logo

                            </div>

                    }

                </div>

                <div className="company-logo-actions">

                    <label className="upload-btn">

                        <FaCamera />

                        Upload Logo

                        <input

                            type="file"

                            accept="image/*"

                            hidden

                            onChange={handleLogoChange}

                        />

                    </label>

                    {

                        company.logo && (

                            <button

                                className="remove-btn"

                                onClick={removeLogo}

                            >

                                <FaTrash />

                                Remove

                            </button>

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default CompanyLogoUpload;