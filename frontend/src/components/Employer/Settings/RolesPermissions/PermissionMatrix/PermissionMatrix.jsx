import "./PermissionMatrix.css";

function PermissionMatrix({

    role

}) {

    const modules = [

        {

            module: "Dashboard",

            permissions: [

                "View"

            ]

        },

        {

            module: "Internships",

            permissions: [

                "Create",

                "View",

                "Edit",

                "Delete"

            ]

        },

        {

            module: "Applications",

            permissions: [

                "View",

                "Shortlist",

                "Reject"

            ]

        },

        {

            module: "Interviews",

            permissions: [

                "Schedule",

                "Edit",

                "Cancel"

            ]

        },

        {

            module: "Offers",

            permissions: [

                "Issue",

                "Edit",

                "Delete"

            ]

        },

        {

            module: "Certificates",

            permissions: [

                "Issue",

                "Download"

            ]

        },

        {

            module: "Reports",

            permissions: [

                "View",

                "Export"

            ]

        },

        {

            module: "Notifications",

            permissions: [

                "Send",

                "View"

            ]

        },

        {

            module: "Team Members",

            permissions: [

                "Invite",

                "Edit",

                "Remove"

            ]

        }

    ];

    return (

        <div className="permission-matrix">

            <div className="permission-header">

                <h2>

                    Permission Matrix

                </h2>

                {

                    role && (

                        <span>

                            Role :

                            <strong>

                                {" "}

                                {role.name}

                            </strong>

                        </span>

                    )

                }

            </div>

            <table>

                <thead>

                    <tr>

                        <th>

                            Module

                        </th>

                        <th>

                            Permissions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        modules.map((item) => (

                            <tr

                                key={item.module}

                            >

                                <td>

                                    {item.module}

                                </td>

                                <td>

                                    <div className="permission-tags">

                                        {

                                            item.permissions.map(

                                                (

                                                    permission

                                                ) => (

                                                    <span

                                                        key={permission}

                                                    >

                                                        {

                                                            permission

                                                        }

                                                    </span>

                                                )

                                            )

                                        }

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default PermissionMatrix;