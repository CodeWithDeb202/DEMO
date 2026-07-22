import "./GoogleMeet.css";

import { useState } from "react";

import {

    FaVideo,
    FaGoogle,
    FaLink,
    FaUnlink,
    FaHistory,
    FaSave,
    FaPlayCircle,
    FaCheckCircle

} from "react-icons/fa";

function GoogleMeet() {

    const [connected, setConnected] = useState(true);

    const [duration, setDuration] = useState("30 Minutes");

    const meetings = [

        {

            id:1,

            title:"Frontend Interview",

            candidate:"Rahul Sharma",

            date:"Today • 11:00 AM"

        },

        {

            id:2,

            title:"Backend Interview",

            candidate:"Ankit Kumar",

            date:"Tomorrow • 03:30 PM"

        },

        {

            id:3,

            title:"HR Discussion",

            candidate:"Priya Das",

            date:"24 Jul • 10:00 AM"

        }

    ];

    return (

        <div className="google-meet">

            <div className="meet-header">

                <div className="meet-title">

                    <div className="meet-icon">

                        <FaGoogle />

                    </div>

                    <div>

                        <h2>

                            Google Meet Integration

                        </h2>

                        <p>

                            Automatically generate Google Meet links for interview scheduling.

                        </p>

                    </div>

                </div>

                <span

                    className={connected ? "badge connected" : "badge disconnected"}

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

            <div className="meet-grid">

                <div className="field">

                    <label>

                        Default Meeting Duration

                    </label>

                    <select

                        value={duration}

                        onChange={(e)=>setDuration(e.target.value)}

                    >

                        <option>15 Minutes</option>

                        <option>30 Minutes</option>

                        <option>45 Minutes</option>

                        <option>60 Minutes</option>

                    </select>

                </div>

                <div className="field">

                    <label>

                        Default Permission

                    </label>

                    <select>

                        <option>

                            Only Host Can Admit

                        </option>

                        <option>

                            Anyone With Link

                        </option>

                        <option>

                            Organization Only

                        </option>

                    </select>

                </div>

            </div>

            <div className="meet-options">

                <label>

                    <input type="checkbox" defaultChecked />

                    Auto Generate Meeting Link

                </label>

                <label>

                    <input type="checkbox" defaultChecked />

                    Enable Waiting Room

                </label>

                <label>

                    <input type="checkbox" defaultChecked />

                    Allow Recording

                </label>

                <label>

                    <input type="checkbox" />

                    Send Reminder Before Meeting

                </label>

            </div>

            <div className="meeting-history">

                <div className="history-title">

                    <FaHistory />

                    Recent Meetings

                </div>

                {

                    meetings.map(item=>(

                        <div

                            key={item.id}

                            className="meeting-card"

                        >

                            <div>

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.candidate}

                                </p>

                            </div>

                            <small>

                                {item.date}

                            </small>

                        </div>

                    ))

                }

            </div>

            <div className="meet-footer">

                <button

                    className="connect"

                    onClick={()=>setConnected(!connected)}

                >

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

                        "Connect"

                    }

                </button>

                <button className="test">

                    <FaPlayCircle />

                    Test Meeting

                </button>

                <button className="save">

                    <FaSave />

                    Save Settings

                </button>

            </div>

        </div>

    );

}

export default GoogleMeet;