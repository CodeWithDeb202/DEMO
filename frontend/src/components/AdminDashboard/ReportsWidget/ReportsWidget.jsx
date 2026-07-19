import "./ReportsWidget.css";

import {

    FaUsers,
    FaBriefcase,
    FaFileAlt,
    FaBuilding,
    FaUserCheck,
    FaSyncAlt,
    FaFilePdf,
    FaFileExcel

} from "react-icons/fa";

const ReportsWidget = ({

    reports = {},

    onRefresh,

    onExportPDF,

    onExportExcel

}) => {

    const cards = [

        {

            title: "User Growth",

            value: reports.userGrowth || "0%",

            icon: <FaUsers />,

            color: "#2563eb"

        },

        {

            title: "Internship Growth",

            value: reports.internshipGrowth || "0%",

            icon: <FaBriefcase />,

            color: "#16a34a"

        },

        {

            title: "Applications",

            value: reports.totalApplications || 0,

            icon: <FaFileAlt />,

            color: "#7c3aed"

        },

        {

            title: "Companies",

            value: reports.totalCompanies || 0,

            icon: <FaBuilding />,

            color: "#ea580c"

        },

        {

            title: "Hiring Rate",

            value: reports.hiringRate || "0%",

            icon: <FaUserCheck />,

            color: "#dc2626"

        }

    ];

    return (

        <section className="reports-widget">

            <div className="section-header">

                <h2>

                    Platform Reports

                </h2>

                <div className="report-actions">

                    <button

                        className="refresh-btn"

                        onClick={onRefresh}

                    >

                        <FaSyncAlt />

                        Refresh

                    </button>

                    <button

                        className="pdf-btn"

                        onClick={onExportPDF}

                    >

                        <FaFilePdf />

                        PDF

                    </button>

                    <button

                        className="excel-btn"

                        onClick={onExportExcel}

                    >

                        <FaFileExcel />

                        Excel

                    </button>

                </div>

            </div>

            <div className="reports-grid">

                {

                    cards.map((card,index)=>(

                        <div

                            key={index}

                            className="report-card"

                        >

                            <div

                                className="report-icon"

                                style={{

                                    background:card.color

                                }}

                            >

                                {

                                    card.icon

                                }

                            </div>

                            <div>

                                <h4>

                                    {

                                        card.title

                                    }

                                </h4>

                                <h2>

                                    {

                                        card.value

                                    }

                                </h2>

                            </div>

                        </div>

                    ))

                }

            </div>

            <div className="report-summary">

                <div>

                    <strong>

                        Today

                    </strong>

                    <p>

                        {

                            reports.today || 0

                        } New Registrations

                    </p>

                </div>

                <div>

                    <strong>

                        This Week

                    </strong>

                    <p>

                        {

                            reports.week || 0

                        } New Applications

                    </p>

                </div>

                <div>

                    <strong>

                        This Month

                    </strong>

                    <p>

                        {

                            reports.month || 0

                        } Total Hiring

                    </p>

                </div>

            </div>

        </section>

    );

};

export default ReportsWidget;