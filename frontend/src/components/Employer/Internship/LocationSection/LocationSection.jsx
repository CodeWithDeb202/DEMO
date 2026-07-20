import "./LocationSection.css";

const LocationSection = ({ register, watch, errors }) => {

    const workMode = watch("workMode");

    return (
        <section className="location-section">

            <div className="section-title">
                <h2>Location Details</h2>
                <p>Specify where the internship will be conducted.</p>
            </div>

            <div className="location-grid">

                <div className="form-group">
                    <label>Work Mode</label>
                    <select {...register("workMode")}>
                        <option value="">Select Work Mode</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                    <span>{errors.workMode?.message}</span>
                </div>

                {workMode !== "Remote" && (
                    <>

                        <div className="form-group">
                            <label>Country</label>
                            <input
                                type="text"
                                placeholder="India"
                                {...register("country")}
                            />
                            <span>{errors.country?.message}</span>
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                placeholder="Odisha"
                                {...register("state")}
                            />
                            <span>{errors.state?.message}</span>
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input
                                type="text"
                                placeholder="Bhubaneswar"
                                {...register("city")}
                            />
                            <span>{errors.city?.message}</span>
                        </div>

                        <div className="form-group">
                            <label>PIN Code</label>
                            <input
                                type="text"
                                placeholder="751024"
                                {...register("pinCode")}
                            />
                            <span>{errors.pinCode?.message}</span>
                        </div>

                        <div className="form-group full-width">
                            <label>Office Address</label>
                            <textarea
                                rows="4"
                                placeholder="Enter complete office address..."
                                {...register("address")}
                            />
                            <span>{errors.address?.message}</span>
                        </div>

                        <div className="form-group full-width">
                            <label>Google Maps Link (Optional)</label>
                            <input
                                type="url"
                                placeholder="https://maps.google.com/..."
                                {...register("mapUrl")}
                            />
                        </div>

                    </>
                )}

                {workMode === "Remote" && (
                    <div className="remote-box">
                        <h3>🌐 Remote Internship</h3>
                        <p>Applicants can work completely from home. Office location is optional.</p>
                    </div>
                )}

            </div>

        </section>
    );

};

export default LocationSection;