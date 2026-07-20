import "./SalarySection.css";

const SalarySection = ({ register, watch, errors }) => {

    const paid = watch("isPaid");
    const stipend = watch("stipend");
    const currency = watch("currency");
    const salaryType = watch("salaryType");

    return (
        <section className="salary-section">

            <div className="section-title">
                <h2>Salary & Benefits</h2>
                <p>Configure stipend, bonuses and internship compensation.</p>
            </div>

            <div className="salary-grid">

                <div className="form-group full-width">
                    <label>Paid Internship</label>
                    <select {...register("isPaid")}>
                        <option value="true">Paid</option>
                        <option value="false">Unpaid</option>
                    </select>
                </div>

                {paid === "true" && (
                    <>

                        <div className="form-group">
                            <label>Stipend Amount</label>
                            <input
                                type="number"
                                placeholder="15000"
                                {...register("stipend")}
                            />
                            <span>{errors.stipend?.message}</span>
                        </div>

                        <div className="form-group">
                            <label>Currency</label>
                            <select {...register("currency")}>
                                <option value="INR">INR (₹)</option>
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Salary Type</label>
                            <select {...register("salaryType")}>
                                <option>Per Month</option>
                                <option>Per Week</option>
                                <option>Per Day</option>
                                <option>Per Hour</option>
                                <option>Fixed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Performance Bonus</label>
                            <input
                                type="number"
                                placeholder="5000"
                                {...register("performanceBonus")}
                            />
                        </div>

                        <div className="form-group">
                            <label>Joining Bonus</label>
                            <input
                                type="number"
                                placeholder="2000"
                                {...register("joiningBonus")}
                            />
                        </div>

                    </>
                )}

                <div className="form-group full-width">
                    <label>Perks</label>
                    <textarea
                        rows="5"
                        placeholder="Certificate, PPO, Flexible Working Hours..."
                        {...register("perks")}
                    />
                </div>

            </div>

            <div className="salary-preview">
                <h3>Compensation Preview</h3>
                {paid === "true"
                    ? <h2>{currency || "INR"} {stipend || 0} / {salaryType || "Per Month"}</h2>
                    : <h2>Unpaid Internship</h2>}
            </div>

        </section>
    );

};

export default SalarySection;