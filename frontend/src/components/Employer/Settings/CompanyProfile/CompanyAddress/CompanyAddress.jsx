import "./CompanyAddress.css";

function CompanyAddress({

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

        <div className="company-address">

            <h2>

                Company Address

            </h2>

            <div className="company-address-grid">

                <div className="form-group">

                    <label>

                        Address Line

                    </label>

                    <textarea

                        rows="4"

                        name="address"

                        value={company.address}

                        onChange={handleChange}

                        placeholder="Enter company address"

                    />

                </div>

                <div className="form-group">

                    <label>

                        City

                    </label>

                    <input

                        type="text"

                        name="city"

                        value={company.city}

                        onChange={handleChange}

                        placeholder="Bhubaneswar"

                    />

                </div>

                <div className="form-group">

                    <label>

                        State

                    </label>

                    <input

                        type="text"

                        name="state"

                        value={company.state}

                        onChange={handleChange}

                        placeholder="Odisha"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Country

                    </label>

                    <input

                        type="text"

                        name="country"

                        value={company.country}

                        onChange={handleChange}

                        placeholder="India"

                    />

                </div>

                <div className="form-group">

                    <label>

                        PIN Code

                    </label>

                    <input

                        type="text"

                        name="pincode"

                        value={company.pincode}

                        onChange={handleChange}

                        placeholder="751024"

                    />

                </div>

            </div>

        </div>

    );

}

export default CompanyAddress;