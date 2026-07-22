import "./GoogleCalendar.css";

import { useState } from "react";

import {

    FaGoogle,

    FaCalendarAlt,

    FaSyncAlt,

    FaUnlink,

    FaCheckCircle,

    FaClock,

    FaSave

} from "react-icons/fa";

function GoogleCalendar() {

    const [connected, setConnected] = useState(true);

    const [calendar, setCalendar] = useState("HR Interviews");

    const [frequency, setFrequency] = useState("Every 15 Minutes");

    return (

        <div className="google-calendar">

            <div className="gc-header">

                <div className="gc-title">

                    <div className="gc-icon">

                        <FaGoogle />

                    </div>

                    <div>

                        <h2>

                            Google Calendar

                        </h2>

                        <p>

                            Sync interviews and hiring events with Google Calendar.

                        </p>

                    </div>

                </div>

                <span

                    className={

                        connected

                        ?

                        "status connected"

                        :

                        "status disconnected"

                    }

                >

                    <FaCheckCircle />

                    {

                        connected

                        ?

                        "Connected"

                        :

                        "Disconnected"

                    }

                </span>

            </div>

            <div className="gc-grid">

                <div className="field">

                    <label>

                        Calendar

                    </label>

                    <select

                        value={calendar}

                        onChange={(e)=>

                            setCalendar(e.target.value)

                        }

                    >

                        <option>

                            HR Interviews

                        </option>

                        <option>

                            Company Events

                        </option>

                        <option>

                            Recruitment

                        </option>

                    </select>

                </div>

                <div className="field">

                    <label>

                        Sync Frequency

                    </label>

                    <select

                        value={frequency}

                        onChange={(e)=>

                            setFrequency(e.target.value)

                        }

                    >

                        <option>

                            Real Time

                        </option>

                        <option>

                            Every 5 Minutes

                        </option>

                        <option>

                            Every 15 Minutes

                        </option>

                        <option>

                            Every Hour

                        </option>

                    </select>

                </div>

            </div>

            <div className="gc-options">

                <label>

                    <input

                        type="checkbox"

                        defaultChecked

                    />

                    Two-way Calendar Sync

                </label>

                <label>

                    <input

                        type="checkbox"

                        defaultChecked

                    />

                    Automatically Create Interview Events

                </label>

                <label>

                    <input

                        type="checkbox"

                        defaultChecked

                    />

                    Send Calendar Reminders

                </label>

                <label>

                    <input

                        type="checkbox"

                    />

                    Sync Candidate Availability

                </label>

            </div>

            <div className="gc-info">

                <div>

                    <FaCalendarAlt />

                    <span>

                        Primary Calendar

                    </span>

                </div>

                <div>

                    <FaClock />

                    <span>

                        Last Sync : Today 09:42 AM

                    </span>

                </div>

            </div>

            <div className="gc-footer">

                <button className="sync">

                    <FaSyncAlt />

                    Sync Now

                </button>

                <button

                    className="disconnect"

                    onClick={()=>

                        setConnected(!connected)

                    }

                >

                    <FaUnlink />

                    {

                        connected

                        ?

                        "Disconnect"

                        :

                        "Connect"

                    }

                </button>

                <button className="save">

                    <FaSave />

                    Save Settings

                </button>

            </div>

        </div>

    );

}

export default GoogleCalendar;