import "./ContactInformation.css";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaGlobe,
    FaIdCard
} from "react-icons/fa";

const ContactInformation = ({ applicant }) => {

    return (

        <div className="contact-information">

            <h3>Contact Information</h3>

            <div className="contact-grid">

                <div className="contact-item">

                    <FaEnvelope />

                    <div>

                        <label>Email</label>

                        <p>{applicant.email || "N/A"}</p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaPhone />

                    <div>

                        <label>Phone</label>

                        <p>{applicant.phone || "N/A"}</p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaMapMarkerAlt />

                    <div>

                        <label>Location</label>

                        <p>

                            {applicant.city || "N/A"}, {applicant.state || ""}

                        </p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaBirthdayCake />

                    <div>

                        <label>Date of Birth</label>

                        <p>

                            {applicant.dateOfBirth
                                ? new Date(applicant.dateOfBirth).toLocaleDateString()
                                : "N/A"}

                        </p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaGlobe />

                    <div>

                        <label>Nationality</label>

                        <p>

                            {applicant.nationality || "N/A"}

                        </p>

                    </div>

                </div>

                <div className="contact-item">

                    <FaIdCard />

                    <div>

                        <label>Gender</label>

                        <p>

                            {applicant.gender || "N/A"}

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ContactInformation;