import "./TeamMembers.css";

import { useState } from "react";

import TeamStats from "../../../components/Employer/Settings/TeamMembers/TeamStats";
import TeamFilters from "../../../components/Employer/Settings/TeamMembers/TeamFilters";
import TeamList from "../../../components/Employer/Settings/TeamMembers/TeamList";
import InviteMemberModal from "../../../components/Employer/Settings/TeamMembers/InviteMemberModal";
import MemberDetailsModal from "../../../components/Employer/Settings/TeamMembers/MemberDetailsModal";

function TeamMembers() {

    const [members] = useState([]);

    const [selectedMember, setSelectedMember] = useState(null);

    const [showInviteModal, setShowInviteModal] = useState(false);

    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const [filters, setFilters] = useState({

        search: "",

        role: "",

        status: ""

    });

    const stats = {

        total: 12,

        active: 9,

        pending: 2,

        admins: 1

    };

    const handleView = (member) => {

        setSelectedMember(member);

        setShowDetailsModal(true);

    };

    return (

        <div className="team-members-page">

            <TeamStats

                stats={stats}

            />

            <TeamFilters

                filters={filters}

                onChange={setFilters}

                onInvite={() =>

                    setShowInviteModal(true)

                }

            />

            <TeamList

                members={members}

                onView={handleView}

                onEdit={() => {}}

                onDelete={() => {}}

            />

            <InviteMemberModal

                open={showInviteModal}

                onClose={() =>

                    setShowInviteModal(false)

                }

                onInvite={() =>

                    setShowInviteModal(false)

                }

            />

            <MemberDetailsModal

                open={showDetailsModal}

                member={selectedMember}

                onClose={() =>

                    setShowDetailsModal(false)

                }

            />

        </div>

    );

}

export default TeamMembers;