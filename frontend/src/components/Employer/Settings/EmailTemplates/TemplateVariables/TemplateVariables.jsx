import "./TemplateVariables.css";

import { useState } from "react";

import {

    FaSearch,
    FaCopy,
    FaPlus,
    FaTag

} from "react-icons/fa";

function TemplateVariables() {

    const [search, setSearch] = useState("");

    const variables = [

        {
            category: "Candidate",
            name: "{{candidateName}}",
            sample: "Debabrata Andia",
            required: true
        },

        {
            category: "Candidate",
            name: "{{candidateEmail}}",
            sample: "deb@gmail.com",
            required: true
        },

        {
            category: "Company",
            name: "{{companyName}}",
            sample: "Tech Monster Pvt. Ltd.",
            required: true
        },

        {
            category: "Company",
            name: "{{companyAddress}}",
            sample: "Bhubaneswar",
            required: false
        },

        {
            category: "Interview",
            name: "{{interviewDate}}",
            sample: "25 July 2026",
            required: true
        },

        {
            category: "Interview",
            name: "{{interviewTime}}",
            sample: "10:00 AM",
            required: true
        },

        {
            category: "Interview",
            name: "{{meetingLink}}",
            sample: "https://meet.google.com/...",
            required: false
        },

        {
            category: "Offer",
            name: "{{salary}}",
            sample: "₹6,00,000 / Year",
            required: false
        },

        {
            category: "Certificate",
            name: "{{certificateId}}",
            sample: "CERT-2026-001",
            required: false
        }

    ];

    const filtered = variables.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="template-variables">

            <div className="variables-header">

                <div>

                    <h2>

                        Template Variables

                    </h2>

                    <p>

                        Insert dynamic values into your email templates.

                    </p>

                </div>

                <button>

                    <FaPlus />

                    Custom Variable

                </button>

            </div>

            <div className="variables-search">

                <FaSearch />

                <input

                    type="text"

                    placeholder="Search variable..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>

            <div className="variables-grid">

                {

                    filtered.map((item,index)=>(

                        <div

                            key={index}

                            className="variable-card"

                        >

                            <div className="variable-top">

                                <span className="category">

                                    <FaTag />

                                    {item.category}

                                </span>

                                <span

                                    className={
                                        item.required
                                        ?
                                        "required"
                                        :
                                        "optional"
                                    }

                                >

                                    {

                                        item.required

                                        ?

                                        "Required"

                                        :

                                        "Optional"

                                    }

                                </span>

                            </div>

                            <h4>

                                {item.name}

                            </h4>

                            <p>

                                Sample :

                                <strong>

                                    {item.sample}

                                </strong>

                            </p>

                            <button>

                                <FaCopy />

                                Copy Variable

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TemplateVariables;