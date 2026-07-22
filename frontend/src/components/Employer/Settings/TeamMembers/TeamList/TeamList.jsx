import "./TeamList.css";

import TeamCard from "../TeamCard";

function TeamList({

    members,

    onView,

    onEdit,

    onDelete

}) {

    return (

        <div className="team-list">

            {

                members.length === 0 ? (

                    <div className="team-list-empty">

                        <h3>

                            No Team Members Found

                        </h3>

                        <p>

                            Invite your first team member.

                        </p>

                    </div>

                ) : (

                    members.map((member) => (

                        <TeamCard

                            key={member._id}

                            member={member}

                            onView={onView}

                            onEdit={onEdit}

                            onDelete={onDelete}

                        />

                    ))

                )

            }

        </div>

    );

}

export default TeamList;