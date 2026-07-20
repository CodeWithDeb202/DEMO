import "./BasicDetails.css";

const BasicDetails = ({

    register,

    errors

}) => {

    return (

        <section className="basic-details">

            <div className="section-title">

                <h2>

                    Basic Internship Details

                </h2>

                <p>

                    Fill the primary information about your internship.

                </p>

            </div>

            <div className="form-grid">

                <div className="form-group">

                    <label>

                        Internship Title

                    </label>

                    <input

                        type="text"

                        placeholder="Frontend Developer Intern"

                        {

                            ...register(

                                "title"

                            )

                        }

                    />

                    <span>

                        {

                            errors.title?.message

                        }

                    </span>

                </div>

                <div className="form-group">

                    <label>

                        Category

                    </label>

                    <select

                        {

                            ...register(

                                "category"

                            )

                        }

                    >

                        <option value="">

                            Select Category

                        </option>

                        <option>

                            Software Development

                        </option>

                        <option>

                            Web Development

                        </option>

                        <option>

                            App Development

                        </option>

                        <option>

                            UI/UX Design

                        </option>

                        <option>

                            Data Science

                        </option>

                        <option>

                            AI / ML

                        </option>

                        <option>

                            DevOps

                        </option>

                        <option>

                            Marketing

                        </option>

                    </select>

                    <span>

                        {

                            errors.category?.message

                        }

                    </span>

                </div>

                <div className="form-group">

                    <label>

                        Internship Type

                    </label>

                    <select

                        {

                            ...register(

                                "internshipType"

                            )

                        }

                    >

                        <option value="">

                            Select Type

                        </option>

                        <option>

                            Full Time

                        </option>

                        <option>

                            Part Time

                        </option>

                        <option>

                            Contract

                        </option>

                        <option>

                            Freelance

                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Work Mode

                    </label>

                    <select

                        {

                            ...register(

                                "workMode"

                            )

                        }

                    >

                        <option value="">

                            Select Mode

                        </option>

                        <option>

                            Remote

                        </option>

                        <option>

                            Hybrid

                        </option>

                        <option>

                            Onsite

                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Duration

                    </label>

                    <input

                        type="text"

                        placeholder="6 Months"

                        {

                            ...register(

                                "duration"

                            )

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Openings

                    </label>

                    <input

                        type="number"

                        min="1"

                        placeholder="5"

                        {

                            ...register(

                                "openings"

                            )

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Experience Required

                    </label>

                    <select

                        {

                            ...register(

                                "experience"

                            )

                        }

                    >

                        <option>

                            Fresher

                        </option>

                        <option>

                            0-1 Years

                        </option>

                        <option>

                            1-2 Years

                        </option>

                        <option>

                            2-5 Years

                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Application Deadline

                    </label>

                    <input

                        type="date"

                        {

                            ...register(

                                "deadline"

                            )

                        }

                    />

                </div>

            </div>

        </section>

    );

};

export default BasicDetails;