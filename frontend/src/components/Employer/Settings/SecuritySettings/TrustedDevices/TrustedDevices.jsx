import "./TrustedDevices.css";

import {

    FaDesktop,

    FaLaptop,

    FaMobileAlt,

    FaTrashAlt

} from "react-icons/fa";

function TrustedDevices() {

    const devices = [

        {

            id: 1,

            name: "Windows Desktop",

            icon: <FaDesktop />,

            browser: "Chrome 139",

            location: "Bhubaneswar, India",

            addedOn: "15 Jul 2026",

            current: true

        },

        {

            id: 2,

            name: "MacBook Pro",

            icon: <FaLaptop />,

            browser: "Safari",

            location: "Balasore, India",

            addedOn: "10 Jul 2026",

            current: false

        },

        {

            id: 3,

            name: "Android Phone",

            icon: <FaMobileAlt />,

            browser: "Chrome Mobile",

            location: "Cuttack, India",

            addedOn: "02 Jul 2026",

            current: false

        }

    ];

    return (

        <div className="trusted-devices">

            <div className="trusted-header">

                <div>

                    <h2>

                        Trusted Devices

                    </h2>

                    <p>

                        Devices allowed to access your employer account without additional verification.

                    </p>

                </div>

            </div>

            <div className="trusted-list">

                {

                    devices.map((device) => (

                        <div

                            key={device.id}

                            className="trusted-card"

                        >

                            <div className="trusted-left">

                                <div className="trusted-icon">

                                    {device.icon}

                                </div>

                                <div>

                                    <h3>

                                        {device.name}

                                        {

                                            device.current &&

                                            <span>

                                                Current Device

                                            </span>

                                        }

                                    </h3>

                                    <p>

                                        {device.browser}

                                    </p>

                                    <small>

                                        {device.location}

                                    </small>

                                    <small>

                                        Added :

                                        {" "}

                                        {device.addedOn}

                                    </small>

                                </div>

                            </div>

                            {

                                !device.current &&

                                <button

                                    className="remove-device-btn"

                                >

                                    <FaTrashAlt />

                                    Remove

                                </button>

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TrustedDevices;