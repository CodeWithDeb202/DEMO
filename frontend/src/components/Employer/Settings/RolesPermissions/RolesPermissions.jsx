import "./RolesPermissions.css";

import { useState } from "react";

import RolesStats from "../../../components/Employer/Settings/RolesPermissions/RolesStats";
import RolesTable from "../../../components/Employer/Settings/RolesPermissions/RolesTable";
import RolesFilters from "../../../components/Employer/Settings/RolesPermissions/RolesFilters";
import AddRoleModal from "../../../components/Employer/Settings/RolesPermissions/AddRoleModal";
import EditRoleModal from "../../../components/Employer/Settings/RolesPermissions/EditRoleModal";
import PermissionMatrix from "../../../components/Employer/Settings/RolesPermissions/PermissionMatrix";
import DeleteRoleModal from "../../../components/Employer/Settings/RolesPermissions/DeleteRoleModal";

function RolesPermissions() {

    const [roles] = useState([]);

    const [selectedRole, setSelectedRole] = useState(null);

    const [showAddModal, setShowAddModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [filters, setFilters] = useState({

        search: ""

    });

    const stats = {

        totalRoles: 5,

        activeRoles: 5,

        customRoles: 2,

        permissions: 38

    };

    return (

        <div className="roles-permissions-page">

            <RolesStats

                stats={stats}

            />

            <RolesFilters

                filters={filters}

                onChange={setFilters}

                onAddRole={() =>

                    setShowAddModal(true)

                }

            />

            <RolesTable

                roles={roles}

                onEdit={(role) => {

                    setSelectedRole(role);

                    setShowEditModal(true);

                }}

                onDelete={(role) => {

                    setSelectedRole(role);

                    setShowDeleteModal(true);

                }}

            />

            <PermissionMatrix

                role={selectedRole}

            />

            <AddRoleModal

                open={showAddModal}

                onClose={() =>

                    setShowAddModal(false)

                }

            />

            <EditRoleModal

                open={showEditModal}

                role={selectedRole}

                onClose={() =>

                    setShowEditModal(false)

                }

            />

            <DeleteRoleModal

                open={showDeleteModal}

                role={selectedRole}

                onClose={() =>

                    setShowDeleteModal(false)

                }

            />

        </div>

    );

}

export default RolesPermissions;