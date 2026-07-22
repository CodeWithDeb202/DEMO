import "./TeamCard.css";

import {

    FaEnvelope,
    FaPhone,
    FaCircle

} from "react-icons/fa";

import TeamActionMenu from "../TeamActionMenu";

function TeamCard({

    member,

    onView,

    onEdit,

    onDelete

}) {

    return (

        <div className="team-card">

            <div className="team-card-left">

                <img

                    src={

                        member.avatar ||

                        "/images/avatar.png"

                    }

                    alt={member.name}

                />

                <div>

                    <h3>

                        {member.name}

                    </h3>

                    <p>

                        {member.role}

                    </p>

                </div>

            </div>

            <div className="team-card-center">

                <div>

                    <FaEnvelope />

                    <span>

                        {member.email}

                    </span>

                </div>

                <div>

                    <FaPhone />

                    <span>

                        {member.phone}

                    </span>

                </div>
            </div>

            <div className="team-card-right">

                <span

                    className={`team-status ${member.status}`}

                >

                    <FaCircle />

                    {member.status}

                </span>

                <TeamActionMenu

                    member={member}

                    onView={onView}

                    onEdit={onEdit}

                    onDelete={onDelete}

                />

            </div>

        </div>

    );

}

export default TeamCard;