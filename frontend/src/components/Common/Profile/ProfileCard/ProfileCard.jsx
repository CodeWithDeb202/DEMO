import "./ProfileCard.css";

import {
    FaGithub,
    FaLinkedin,
    FaCheckCircle,
    FaMapMarkerAlt
} from "react-icons/fa";

import Button from "../Button";

function ProfileCard({

    user,

    onView,

    onEdit,

    showActions = true

}) {

    if (!user) return null;

    return (

        <div className="profile-card">

            <div className="profile-header">

                <img
                    src={user.avatar}
                    alt={user.name}
                    className="profile-avatar"
                />

                {

                    user.verified &&

                    <FaCheckCircle className="verified-icon"/>

                }

            </div>

            <div className="profile-body">

                <h3>{user.name}</h3>

                <p className="profile-role">

                    {user.role}

                </p>

                <p className="profile-college">

                    {user.college}

                </p>

                <p className="profile-location">

                    <FaMapMarkerAlt/>

                    {user.location}

                </p>

                <div className="profile-skills">

                    {

                        user.skills?.slice(0,5).map(skill=>(

                            <span key={skill}>

                                {skill}

                            </span>

                        ))

                    }

                </div>

                <div className="profile-social">

                    {

                        user.github &&

                        <a

                            href={user.github}

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaGithub/>

                        </a>

                    }

                    {

                        user.linkedin &&

                        <a

                            href={user.linkedin}

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaLinkedin/>

                        </a>

                    }

                </div>

                {

                    showActions &&

                    <div className="profile-actions">

                        <Button

                            variant="outline"

                            onClick={onView}

                        >

                            View

                        </Button>

                        <Button

                            onClick={onEdit}

                        >

                            Edit

                        </Button>

                    </div>

                }

            </div>

        </div>

    );

}

export default ProfileCard;