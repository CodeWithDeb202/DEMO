import "./SettingsSection.css";

const SettingsSection = ({ register }) => {

    return (

        <section className="settings-section">

            <div className="section-title">
                <h2>Internship Settings</h2>
                <p>Configure application and visibility settings.</p>
            </div>

            <div className="settings-grid">

                <div className="form-group">
                    <label>Visibility</label>
                    <select {...register("visibility")}>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                        <option value="Unlisted">Unlisted</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select {...register("status")}>
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="featured"
                        {...register("featured")}
                    />
                    <label htmlFor="featured">
                        Feature this internship
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="allowRemote"
                        {...register("allowRemote")}
                    />
                    <label htmlFor="allowRemote">
                        Allow remote applications
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="autoShortlist"
                        {...register("autoShortlist")}
                    />
                    <label htmlFor="autoShortlist">
                        Enable auto shortlist
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="emailNotification"
                        {...register("emailNotification")}
                    />
                    <label htmlFor="emailNotification">
                        Email notifications
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="certificate"
                        {...register("certificate")}
                    />
                    <label htmlFor="certificate">
                        Provide internship certificate
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="ppo"
                        {...register("ppo")}
                    />
                    <label htmlFor="ppo">
                        PPO opportunity available
                    </label>
                </div>

            </div>

        </section>

    );

};

export default SettingsSection;