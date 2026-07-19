import "./SystemHealth.css";

import {

    FaServer,
    FaDatabase,
    FaCloud,
    FaEnvelope,
    FaShieldAlt,
    FaHdd,
    FaMicrochip,
    FaMemory,
    FaWifi,
    FaClock

} from "react-icons/fa";

const SystemHealth = ({

    health = {}

}) => {

    const services = [

        {

            title: "API Server",

            icon: <FaServer />,

            value: health.apiStatus || "Online",

            status: health.apiOnline ?? true

        },

        {

            title: "MongoDB",

            icon: <FaDatabase />,

            value: health.databaseStatus || "Connected",

            status: health.databaseOnline ?? true

        },

        {

            title: "Cloudinary",

            icon: <FaCloud />,

            value: health.cloudinaryStatus || "Available",

            status: health.cloudinaryOnline ?? true

        },

        {

            title: "Email Service",

            icon: <FaEnvelope />,

            value: health.emailStatus || "Running",

            status: health.emailOnline ?? true

        },

        {

            title: "Authentication",

            icon: <FaShieldAlt />,

            value: health.authStatus || "Secure",

            status: health.authOnline ?? true

        }

    ];

    return (

        <section className="system-health">

            <div className="section-header">

                <h2>

                    System Health

                </h2>

            </div>

            <div className="health-grid">

                {

                    services.map((service,index)=>(

                        <div

                            key={index}

                            className="health-card"

                        >

                            <div className="health-icon">

                                {

                                    service.icon

                                }

                            </div>

                            <div className="health-info">

                                <h4>

                                    {

                                        service.title

                                    }

                                </h4>

                                <p>

                                    {

                                        service.value

                                    }

                                </p>

                            </div>

                            <span

                                className={`status-dot ${service.status ? "online" : "offline"}`}

                            />

                        </div>

                    ))

                }

            </div>

            <div className="resource-grid">

                <div className="resource-card">

                    <FaHdd />

                    <div>

                        <h4>

                            Storage

                        </h4>

                        <p>

                            {

                                health.storageUsage || "68%"

                            }

                        </p>

                    </div>

                </div>

                <div className="resource-card">

                    <FaMicrochip />

                    <div>

                        <h4>

                            CPU Usage

                        </h4>

                        <p>

                            {

                                health.cpuUsage || "41%"

                            }

                        </p>

                    </div>

                </div>

                <div className="resource-card">

                    <FaMemory />

                    <div>

                        <h4>

                            Memory

                        </h4>

                        <p>

                            {

                                health.memoryUsage || "55%"

                            }

                        </p>

                    </div>

                </div>

                <div className="resource-card">

                    <FaWifi />

                    <div>

                        <h4>

                            Network

                        </h4>

                        <p>

                            {

                                health.networkLatency || "18 ms"

                            }

                        </p>

                    </div>

                </div>

                <div className="resource-card">

                    <FaClock />

                    <div>

                        <h4>

                            Uptime

                        </h4>

                        <p>

                            {

                                health.uptime || "99.99%"

                            }

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default SystemHealth;