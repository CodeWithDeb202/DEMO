import "./CompanyBasicInfo.css";

function CompanyBasicInfo({

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

        <div className="company-basic-info">

            <h2>

                Company Information

            </h2>

            <div className="company-basic-grid">

                <div className="form-group">

                    <label>

                        Company Name

                    </label>

                    <input

                        type="text"

                        name="companyName"

                        value={company.companyName}

                        onChange={handleChange}

                        placeholder="Tech Monster Pvt Ltd"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Official Email

                    </label>

                    <input

                        type="email"

                        name="email"

                        value={company.email}

                        onChange={handleChange}

                        placeholder="company@email.com"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Phone Number

                    </label>

                    <input

                        type="text"

                        name="phone"

                        value={company.phone}

                        onChange={handleChange}

                        placeholder="+91 9876543210"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Website

                    </label>

                    <input

                        type="url"

                        name="website"

                        value={company.website}

                        onChange={handleChange}

                        placeholder="https://company.com"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Industry

                    </label>

                    <input

                        type="text"

                        name="industry"

                        value={company.industry}

                        onChange={handleChange}

                        placeholder="Software Development"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Company Size

                    </label>

                    <select

                        name="companySize"

                        value={company.companySize}

                        onChange={handleChange}

                    >

                        <option value="">

                            Select Company Size

                        </option>

                        <option value="1-10">

                            1 - 10 Employees

                        </option>

                        <option value="11-50">

                            11 - 50 Employees

                        </option>

                        <option value="51-200">

                            51 - 200 Employees

                        </option>

                        <option value="201-500">

                            201 - 500 Employees

                        </option>

                        <option value="500+">

                            500+ Employees

                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Founded Year

                    </label>

                    <input

                        type="number"

                        name="foundedYear"

                        value={company.foundedYear}

                        onChange={handleChange}

                        placeholder="2020"

                    />

                </div>

            </div>

            <div className="form-group">

                <label>

                    Company Description

                </label>

                <textarea

                    rows="6"

                    name="description"

                    value={company.description}

                    onChange={handleChange}

                    placeholder="Write about your company..."

                />

            </div>

        </div>

    );

}

export default CompanyBasicInfo;