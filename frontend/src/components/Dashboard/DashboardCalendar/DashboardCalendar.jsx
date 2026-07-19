import "./DashboardCalendar.css";

import { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const DashboardCalendar = ({ events = [] }) => {

    const [value, setValue] = useState(new Date());

    const hasEvent = (date) => {

        return events.some((event) => {

            const eventDate = new Date(event.date);

            return (

                eventDate.getDate() === date.getDate() &&

                eventDate.getMonth() === date.getMonth() &&

                eventDate.getFullYear() === date.getFullYear()

            );

        });

    };

    return (

        <section className="dashboard-calendar">

            <div className="calendar-header">

                <h2>

                    Calendar

                </h2>

                <p>

                    Interviews, Meetings & Deadlines

                </p>

            </div>

            <Calendar

                value={value}

                onChange={setValue}

                tileClassName={({ date }) =>

                    hasEvent(date)

                        ? "event-day"

                        : null

                }

            />

            <div className="calendar-events">

                <h3>

                    Upcoming Events

                </h3>

                {

                    events.length === 0

                    ?

                    (

                        <p className="no-events">

                            No upcoming events.

                        </p>

                    )

                    :

                    (

                        events.slice(0,5).map((event)=>(

                            <div

                                key={event._id}

                                className="event-card"

                            >

                                <h4>

                                    {event.title}

                                </h4>

                                <span>

                                    {

                                        new Date(event.date)

                                        .toLocaleString()

                                    }

                                </span>

                            </div>

                        ))

                    )

                }

            </div>

        </section>

    );

};

export default DashboardCalendar;