import "./CompanySocialLinks.css";

import {

    FaLinkedin,

    FaGithub,

    FaInstagram,

    FaFacebook,

    FaTwitter,

    FaYoutube

} from "react-icons/fa";

function CompanySocialLinks({

    company,

    setCompany

}) {

    const handleChange = (e) => {

        setCompany({

            ...company,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="company-social-links">

            <h2>

                Social Links

            </h2>

            <div className="company-social-grid">

                <div className="form-group">

                    <label>

                        <FaLinkedin />

                        LinkedIn

                    </label>

                    <input

                        type="url"

                        name="linkedin"

                        value={company.linkedin}

                        onChange={handleChange}

                        placeholder="https://linkedin.com/company"

                    />

                </div>

                <div className="form-group">

                    <label>

                        <FaGithub />

                        GitHub

                    </label>

                    <input

                        type="url"

                        name="github"

                        value={company.github}

                        onChange={handleChange}

                        placeholder="https://github.com/company"

                    />

                </div>

                <div className="form-group">

                    <label>

                        <FaTwitter />

                        Twitter (X)

                    </label>

                    <input

                        type="url"

                        name="twitter"

                        value={company.twitter}

                        onChange={handleChange}

                        placeholder="https://x.com/company"

                    />

                </div>

                <div className="form-group">

                    <label>

                        <FaInstagram />

                        Instagram

                    </label>

                    <input

                        type="url"

                        name="instagram"

                        value={company.instagram}

                        onChange={handleChange}

                        placeholder="https://instagram.com/company"

                    />

                </div>

                <div className="form-group">

                    <label>

                        <FaFacebook />

                        Facebook

                    </label>

                    <input

                        type="url"

                        name="facebook"

                        value={company.facebook || ""}

                        onChange={handleChange}

                        placeholder="https://facebook.com/company"

                    />

                </div>

                <div className="form-group">

                    <label>

                        <FaYoutube />

                        YouTube

                    </label>

                    <input

                        type="url"

                        name="youtube"

                        value={company.youtube || ""}

                        onChange={handleChange}

                        placeholder="https://youtube.com/@company"

                    />

                </div>

            </div>

        </div>

    );

}

export default CompanySocialLinks;