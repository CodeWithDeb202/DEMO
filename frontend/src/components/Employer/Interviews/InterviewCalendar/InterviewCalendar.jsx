import "./InterviewCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InterviewCalendar = ({ events = [] }) => {

    const hasInterview = (date) => {

        return events.some((item) => {

            const eventDate = new Date(item.date);

            return (

                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()

            );

        });

    };

    const getInterviews = (date) => {

        return events.filter((item) => {

            const eventDate = new Date(item.date);

            return (

                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()

            );

        });

    };

    return (

        <div className="interview-calendar">

            <h3>Interview Calendar</h3>

            <Calendar

                tileClassName={({ date }) =>

                    hasInterview(date)

                        ? "calendar-event"

                        : ""

                }

                tileContent={({ date }) => {

                    const list = getInterviews(date);

                    if (!list.length) return null;

                    return (

                        <div className="calendar-dot" />

                    );

                }}

            />

            <div className="calendar-events">

                {events.length === 0 && (

                    <div className="calendar-empty">

                        No scheduled interviews.

                    </div>

                )}

                {events.map((item) => (

                    <div
                        key={item._id}
                        className="calendar-event-card"
                    >

                        <h4>

                            {item.candidate?.fullName}

                        </h4>

                        <p>

                            {item.internship?.title}

                        </p>

                        <span>

                            {new Date(item.date).toLocaleDateString()}

                            {" • "}

                            {item.time}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default InterviewCalendar;