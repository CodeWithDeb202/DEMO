import "./TemplateEditor.css";

import { useState } from "react";

import {

    FaSave,
    FaPaperPlane,
    FaCopy,
    FaTrash,
    FaUndo,
    FaRedo,
    FaCode,
    FaEye,
    FaBold,
    FaItalic,
    FaUnderline,
    FaListUl,
    FaLink

} from "react-icons/fa";

function TemplateEditor() {

    const [templateName, setTemplateName] = useState("Interview Invitation");

    const [subject, setSubject] = useState(

        "Interview Invitation - {{companyName}}"

    );

    const [body, setBody] = useState(

`Hi {{candidateName}},

Congratulations!

You have been shortlisted for the interview.

Interview Date : {{interviewDate}}

Interview Time : {{interviewTime}}

Regards,
{{companyName}}`
    );

    const [previewMode, setPreviewMode] = useState(false);

    return (

        <div className="template-editor">

            <div className="editor-header">

                <div>

                    <h2>

                        Email Template Editor

                    </h2>

                    <p>

                        Create and customize reusable employer email templates.

                    </p>

                </div>

                <div className="editor-actions">

                    <button>

                        <FaUndo />

                    </button>

                    <button>

                        <FaRedo />

                    </button>

                    <button>

                        <FaCopy />

                    </button>

                    <button className="danger">

                        <FaTrash />

                    </button>

                </div>

            </div>

            <div className="editor-form">

                <div className="form-group">

                    <label>

                        Template Name

                    </label>

                    <input

                        type="text"

                        value={templateName}

                        onChange={(e) =>

                            setTemplateName(e.target.value)

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Subject Line

                    </label>

                    <input

                        type="text"

                        value={subject}

                        onChange={(e) =>

                            setSubject(e.target.value)

                        }

                    />

                </div>

            </div>

            <div className="editor-toolbar">

                <button><FaBold /></button>

                <button><FaItalic /></button>

                <button><FaUnderline /></button>

                <button><FaListUl /></button>

                <button><FaLink /></button>

                <button
                    onClick={() => setPreviewMode(!previewMode)}
                >
                    {

                        previewMode

                        ?

                        <FaCode />

                        :

                        <FaEye />

                    }

                </button>

            </div>

            {

                previewMode

                ?

                <div className="preview-box">

                    <pre>

                        {body}

                    </pre>

                </div>

                :

                <textarea

                    value={body}

                    onChange={(e) =>

                        setBody(e.target.value)

                    }

                    rows={16}

                />

            }

            <div className="editor-footer">

                <span>

                    Characters : {body.length}

                </span>

                <div>

                    <button className="draft">

                        <FaSave />

                        Save Draft

                    </button>

                    <button className="publish">

                        <FaPaperPlane />

                        Publish Template

                    </button>

                </div>

            </div>

        </div>

    );

}

export default TemplateEditor;