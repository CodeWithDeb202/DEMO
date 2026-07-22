import "./RolesTable.css";

import RolesActionMenu from "../RolesActionMenu";

function RolesTable({

    roles,

    onEdit,

    onDelete

}) {

    return (

        <div className="roles-table-wrapper">

            <table className="roles-table">

                <thead>

                    <tr>

                        <th>Role</th>

                        <th>Description</th>

                        <th>Users</th>

                        <th>Permissions</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        roles.length === 0 ? (

                            <tr>

                                <td

                                    colSpan="6"

                                    className="empty-row"

                                >

                                    No Roles Found

                                </td>

                            </tr>

                        ) : (

                            roles.map((role) => (

                                <tr key={role._id}>

                                    <td>

                                        {role.name}

                                    </td>

                                    <td>

                                        {role.description}

                                    </td>

                                    <td>

                                        {role.totalUsers}

                                    </td>

                                    <td>

                                        {role.permissions?.length || 0}

                                    </td>

                                    <td>

                                        <span

                                            className={`status ${role.status}`}

                                        >

                                            {role.status}

                                        </span>

                                    </td>

                                    <td>

                                        <RolesActionMenu

                                            role={role}

                                            onEdit={onEdit}

                                            onDelete={onDelete}

                                        />

                                    </td>

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RolesTable;