import "./NotificationsWidget.css";

import {

    FaUserGraduate,
    FaBriefcase,
    FaCheckCircle,
    FaTimesCircle,
    FaBell,
    FaTrash

} from "react-icons/fa";

const icons={

    application:<FaUserGraduate/>,

    internship:<FaBriefcase/>,

    approved:<FaCheckCircle/>,

    rejected:<FaTimesCircle/>,

    default:<FaBell/>

};

const NotificationsWidget=({

    notifications=[],

    onRead,

    onDelete

})=>{

    return(

        <section className="employer-notifications">

            <div className="section-header">

                <h2>

                    Notifications

                </h2>

                <span>

                    {

                        notifications.length

                    }

                </span>

            </div>

            {

                notifications.length===0

                ?

                (

                    <div className="empty-state">

                        <h3>

                            No Notifications

                        </h3>

                        <p>

                            You're all caught up.

                        </p>

                    </div>

                )

                :

                (

                    <div className="notification-list">

                        {

                            notifications

                            .slice(0,6)

                            .map((item)=>(

                                <div

                                    key={item._id}

                                    className={`notification-card ${item.read?"read":"unread"}`}

                                >

                                    <div className="notification-icon">

                                        {

                                            icons[item.type] ||

                                            icons.default

                                        }

                                    </div>

                                    <div className="notification-content">

                                        <h4>

                                            {

                                                item.title

                                            }

                                        </h4>

                                        <p>

                                            {

                                                item.message

                                            }

                                        </p>

                                        <small>

                                            {

                                                item.createdAt

                                            }

                                        </small>

                                    </div>

                                    <div className="notification-actions">

                                        <button

                                            onClick={()=>onRead(item._id)}

                                        >

                                            Read

                                        </button>

                                        <button

                                            onClick={()=>onDelete(item._id)}

                                        >

                                            <FaTrash/>

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

};

export default NotificationsWidget;