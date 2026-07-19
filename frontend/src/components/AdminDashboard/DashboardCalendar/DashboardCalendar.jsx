import "./DashboardCalendar.css";

import { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import {

    FaCalendarAlt,
    FaUserGraduate,
    FaBuilding,
    FaBriefcase,
    FaBell

} from "react-icons/fa";

const DashboardCalendar = ({

    events = []

}) => {

    const [date, setDate] = useState(new Date());

    const formatDate = (value) => {

        return new Date(value)

            .toISOString()

            .split("T")[0];

    };

    const selectedEvents = events.filter(

        (

            item

        ) =>

            formatDate(

                item.date

            ) ===

            formatDate(

                date

            )

    );

    const tileClassName = ({

        date

    }) => {

        const hasEvent = events.some(

            (

                item

            ) =>

                formatDate(

                    item.date

                ) ===

                formatDate(

                    date

                )

        );

        return hasEvent

            ?

            "calendar-event"

            :

            "";

    };

    const getIcon = (

        type

    ) => {

        switch (

            type

        ) {

            case "interview":

                return <FaUserGraduate />;

            case "verification":

                return <FaBuilding />;

            case "internship":

                return <FaBriefcase />;

            default:

                return <FaBell />;

        }

    };

    return (

        <section className="admin-dashboard-calendar">

            <div className="calendar-header">

                <h2>

                    <FaCalendarAlt />

                    Admin Calendar

                </h2>

            </div>

            <div className="calendar-layout">

                <div className="calendar-wrapper">

                    <Calendar

                        onChange={setDate}

                        value={date}

                        tileClassName={tileClassName}

                    />

                </div>

                <div className="calendar-events">

                    <h3>

                        Events

                    </h3>

                    {

                        selectedEvents.length === 0

                        ?

                        (

                            <div className="empty-event">

                                No events scheduled.

                            </div>

                        )

                        :

                        (

                            selectedEvents.map(

                                (

                                    event

                                ) => (

                                    <div

                                        key={

                                            event._id

                                        }

                                        className="event-card"

                                    >

                                        <div className="event-icon">

                                            {

                                                getIcon(

                                                    event.type

                                                )

                                            }

                                        </div>

                                        <div className="event-content">

                                            <h4>

                                                {

                                                    event.title

                                                }

                                            </h4>

                                            <p>

                                                {

                                                    event.description

                                                }

                                            </p>

                                            <small>

                                                {

                                                    event.time

                                                }

                                            </small>

                                        </div>

                                    </div>

                                )

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

};

export default DashboardCalendar;