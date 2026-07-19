import "./RecentUsers.css";

import { Link } from "react-router-dom";

import {

    FaEye,
    FaEdit,
    FaTrash,
    FaBan,
    FaUnlock,
    FaUserGraduate,
    FaBuilding,
    FaUserShield

} from "react-icons/fa";

const roleIcons = {

    Student: <FaUserGraduate />,

    Employer: <FaBuilding />,

    Admin: <FaUserShield />

};

const RecentUsers = ({ users = [] }) => {

    return (

        <section className="recent-users">

            <div className="section-header">

                <h2>

                    Recent Users

                </h2>

                <Link

                    to="/admin/users"

                    className="view-all"

                >

                    View All

                </Link>

            </div>

            {

                users.length === 0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Users Found

                        </h3>

                        <p>

                            Newly registered users will appear here.

                        </p>

                    </div>

                )

                :

                (

                    <div className="users-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>User</th>

                                    <th>Role</th>

                                    <th>Status</th>

                                    <th>Joined</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    users

                                    .slice(0,10)

                                    .map((user)=>(

                                        <tr

                                            key={user._id}

                                        >

                                            <td>

                                                <div className="user-info">

                                                    <img

                                                        src={

                                                            user.profileImage ||

                                                            "/images/avatar.png"

                                                        }

                                                        alt="User"

                                                    />

                                                    <div>

                                                        <h4>

                                                            {

                                                                user.firstName

                                                            }{" "}

                                                            {

                                                                user.lastName

                                                            }

                                                        </h4>

                                                        <p>

                                                            {

                                                                user.email

                                                            }

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>

                                                <span

                                                    className={`role-badge ${user.role?.toLowerCase()}`}

                                                >

                                                    {

                                                        roleIcons[user.role]

                                                    }

                                                    {

                                                        user.role

                                                    }

                                                </span>

                                            </td>

                                            <td>

                                                <span

                                                    className={

                                                        user.isBlocked

                                                        ?

                                                        "status blocked"

                                                        :

                                                        "status active"

                                                    }

                                                >

                                                    {

                                                        user.isBlocked

                                                        ?

                                                        "Blocked"

                                                        :

                                                        "Active"

                                                    }

                                                </span>

                                            </td>

                                            <td>

                                                {

                                                    new Date(

                                                        user.createdAt

                                                    ).toLocaleDateString()

                                                }

                                            </td>

                                            <td>

                                                <div className="table-actions">

                                                    <Link

                                                        to={`/admin/users/${user._id}`}

                                                        className="action-btn view"

                                                    >

                                                        <FaEye />

                                                    </Link>

                                                    <Link

                                                        to={`/admin/users/edit/${user._id}`}

                                                        className="action-btn edit"

                                                    >

                                                        <FaEdit />

                                                    </Link>

                                                    <button

                                                        className="action-btn block"

                                                    >

                                                        {

                                                            user.isBlocked

                                                            ?

                                                            <FaUnlock />

                                                            :

                                                            <FaBan />

                                                        }

                                                    </button>

                                                    <button

                                                        className="action-btn delete"

                                                    >

                                                        <FaTrash />

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                )

            }

        </section>

    );

};

export default RecentUsers;