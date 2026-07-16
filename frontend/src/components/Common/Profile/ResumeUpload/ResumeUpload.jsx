import "./ResumeUpload.css";

import { useRef } from "react";

import {
    FaFilePdf,
    FaCloudUploadAlt,
    FaTrash,
    FaEye
} from "react-icons/fa";

function ResumeUpload({

    file,

    onChange,

    maxSize = 2

}) {

    const inputRef = useRef();

    const handleFile = (selectedFile) => {

        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf") {

            return alert("Only PDF files are allowed.");

        }

        if (selectedFile.size > maxSize * 1024 * 1024) {

            return alert(`Maximum ${maxSize}MB allowed.`);

        }

        onChange(selectedFile);

    };

    const onInputChange = (e) => {

        handleFile(e.target.files[0]);

    };

    const onDrop = (e) => {

        e.preventDefault();

        handleFile(e.dataTransfer.files[0]);

    };

    return (

        <div className="resume-upload">

            <div

                className="resume-dropzone"

                onClick={() => inputRef.current.click()}

                onDragOver={(e) => e.preventDefault()}

                onDrop={onDrop}

            >

                <FaCloudUploadAlt className="upload-icon" />

                <h4>Upload Resume</h4>

                <p>

                    Drag & Drop PDF here

                </p>

                <span>

                    or Click to Browse

                </span>

            </div>

            <input

                type="file"

                hidden

                ref={inputRef}

                accept=".pdf"

                onChange={onInputChange}

            />

            {

                file &&

                <div className="resume-card">

                    <div className="resume-info">

                        <FaFilePdf className="pdf-icon"/>

                        <div>

                            <h5>{file.name}</h5>

                            <small>

                                {(file.size/1024/1024).toFixed(2)} MB

                            </small>

                        </div>

                    </div>

                    <div className="resume-actions">

                        <a

                            href={URL.createObjectURL(file)}

                            target="_blank"

                            rel="noreferrer"

                        >

                            <FaEye/>

                        </a>

                        <button

                            type="button"

                            onClick={() => onChange(null)}

                        >

                            <FaTrash/>

                        </button>

                    </div>

                </div>

            }

        </div>

    );

}

export default ResumeUpload;