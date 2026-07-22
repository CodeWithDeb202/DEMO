import "./OutlookCalendar.css";

import { useState } from "react";

import {

    FaMicrosoft,
    FaCalendarAlt,
    FaSyncAlt,
    FaLink,
    FaUnlink,
    FaClock,
    FaSave,
    FaCheckCircle

} from "react-icons/fa";

function OutlookCalendar() {

    const [connected, setConnected] = useState(false);

    const [calendar, setCalendar] = useState("Recruitment Calendar");

    const [syncMode, setSyncMode] = useState("Two Way");

    return (

        <div className="outlook-calendar">

            <div className="outlook-header">

                <div className="outlook-title">

                    <div className="outlook-icon">

                        <FaMicrosoft />

                    </div>

                    <div>

                        <h2>

                            Microsoft Outlook Calendar

                        </h2>

                        <p>

                            Connect Outlook Calendar to automatically manage interview schedules and hiring events.

                        </p>

                    </div>

                </div>

                <span

                    className={`connection-status ${connected ? "connected" : "disconnected"}`}

                >

                    <FaCheckCircle />

                    {connected ? "Connected" : "Disconnected"}

                </span>

            </div>

            <div className="outlook-grid">

                <div className="field">

                    <label>

                        Calendar

                    </label>

                    <select

                        value={calendar}

                        onChange={(e) =>

                            setCalendar(e.target.value)

                        }

                    >

                        <option>

                            Recruitment Calendar

                        </option>

                        <option>

                            HR Calendar

                        </option>

                        <option>

                            Company Calendar

                        </option>

                    </select>

                </div>

                <div className="field">

                    <label>

                        Sync Mode

                    </label>

                    <select

                        value={syncMode}

                        onChange={(e) =>

                            setSyncMode(e.target.value)

                        }

                    >

                        <option>

                            Two Way

                        </option>

                        <option>

                            Outlook → ATS

                        </option>

                        <option>

                            ATS → Outlook

                        </option>

                    </select>

                </div>

            </div>

            <div className="options">

                <label>

                    <input type="checkbox" defaultChecked />

                    Auto-create interview events

                </label>

                <label>

                    <input type="checkbox" defaultChecked />

                    Sync cancelled interviews

                </label>

                <label>

                    <input type="checkbox" defaultChecked />

                    Send Outlook reminders

                </label>

                <label>

                    <input type="checkbox" />

                    Sync recruiter availability

                </label>

            </div>

            <div className="sync-info">

                <div>

                    <FaCalendarAlt />

                    <span>

                        Default Calendar Selected

                    </span>

                </div>

                <div>

                    <FaClock />

                    <span>

                        Last Sync : Today • 10:20 AM

                    </span>

                </div>

            </div>

            <div className="outlook-footer">

                <button className="connect">

                    {

                        connected

                        ?

                        <FaUnlink />

                        :

                        <FaLink />

                    }

                    {

                        connected

                        ?

                        "Disconnect"

                        :

                        "Connect Outlook"

                    }

                </button>

                <button className="sync">

                    <FaSyncAlt />

                    Sync Now

                </button>

                <button className="save">

                    <FaSave />

                    Save Changes

                </button>

            </div>

        </div>

    );

}

export default OutlookCalendar;