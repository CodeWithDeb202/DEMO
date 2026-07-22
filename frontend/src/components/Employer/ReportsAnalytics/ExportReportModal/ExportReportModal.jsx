import "./ExportReportModal.css";

import {
    FaFilePdf,
    FaFileExcel,
    FaFileCsv,
    FaTimes
} from "react-icons/fa";

function ExportReportModal({

    open,

    onClose,

    onExport

}) {

    if (!open) return null;

    const formats = [

        {
            name: "PDF",
            icon: <FaFilePdf />,
            color: "#dc2626"
        },

        {
            name: "Excel",
            icon: <FaFileExcel />,
            color: "#16a34a"
        },

        {
            name: "CSV",
            icon: <FaFileCsv />,
            color: "#2563eb"
        }

    ];

    return (

        <div className="export-report-overlay">

            <div className="export-report-modal">

                <div className="export-report-header">

                    <h2>

                        Export Analytics Report

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        <FaTimes />

                    </button>

                </div>

                <p className="export-report-description">

                    Choose your preferred export format.

                </p>

                <div className="export-report-grid">

                    {

                        formats.map((item) => (

                            <button

                                key={item.name}

                                className="export-report-card"

                                onClick={() => onExport(item.name)}

                            >

                                <span

                                    className="export-icon"

                                    style={{

                                        color: item.color

                                    }}

                                >

                                    {item.icon}

                                </span>

                                <h4>

                                    {item.name}

                                </h4>

                            </button>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default ExportReportModal;