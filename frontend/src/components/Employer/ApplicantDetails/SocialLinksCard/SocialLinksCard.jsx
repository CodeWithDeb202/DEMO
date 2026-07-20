import "./SocialLinksCard.css";
import {
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaLink
} from "react-icons/fa";

const SocialLinksCard = ({ applicant }) => {

    const links = [

        {
            title: "Portfolio",
            icon: <FaGlobe />,
            url: applicant.portfolio
        },

        {
            title: "GitHub",
            icon: <FaGithub />,
            url: applicant.github
        },

        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            url: applicant.linkedin
        },

        {
            title: "Other",
            icon: <FaLink />,
            url: applicant.website
        }

    ];

    return (

        <div className="social-links-card">

            <h3>Social Links</h3>

            <div className="social-links-list">

                {links.map((item, index) => (

                    <div
                        key={index}
                        className="social-link-item"
                    >

                        <div className="social-left">

                            <div className="social-icon">

                                {item.icon}

                            </div>

                            <div>

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.url || "Not Provided"}

                                </p>

                            </div>

                        </div>

                        {item.url && (

                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="visit-btn"
                            >

                                Visit

                            </a>

                        )}

                    </div>

                ))}

            </div>

        </div>

    );

};

export default SocialLinksCard;