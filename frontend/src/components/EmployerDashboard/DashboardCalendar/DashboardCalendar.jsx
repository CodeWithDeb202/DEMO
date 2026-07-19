import "./DashboardCalendar.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useMemo, useState } from "react";

const DashboardCalendar = ({ events = [] }) => {

    const [value, setValue] = useState(new Date());

    const eventDates = useMemo(() => {

        return events.map(

            (item) =>

                new Date(item.date).toDateString()

        );

    }, [events]);

    return (

        <section className="dashboard-calendar">

            <div className="calendar-header">

                <h2>

                    Calendar

                </h2>

            </div>

            <Calendar

                value={value}

                onChange={setValue}

                tileClassName={({ date }) =>

                    eventDates.includes(

                        date.toDateString()

                    )

                        ? "calendar-event"

                        : null

                }

            />

            <div className="calendar-events">

                <h3>

                    Upcoming Events

                </h3>

                {

                    events.length === 0 ? (

                        <p>

                            No upcoming events

                        </p>

                    ) : (

                        events

                            .slice(0, 5)

                            .map((item) => (

                                <div

                                    key={item._id}

                                    className="event-item"

                                >

                                    <strong>

                                        {

                                            item.title

                                        }

                                    </strong>

                                    <span>

                                        {

                                            new Date(

                                                item.date

                                            ).toLocaleDateString()

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