import "./AvatarUpload.css";

import { showToast } from "../../../../utils/toast";

import { useRef } from "react";

import {

    FaCamera,

    FaTrash,

    FaUserCircle

} from "react-icons/fa";

function AvatarUpload({

    image,

    onChange,

    size = 150,

    maxSize = 2

}) {

    const inputRef = useRef();

    const handleFile = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {

            return showToast.info("Only image allowed");

        }

        if (file.size > maxSize * 1024 * 1024) {

            return showToast.info(

                `Maximum ${maxSize}MB allowed`

            );

        }

        const preview = URL.createObjectURL(file);

        onChange({

            file,

            preview

        });

    };

    const removeImage = () => {

        onChange(null);

        if (inputRef.current) {

            inputRef.current.value = "";

        }

    };

    return (

        <div className="avatar-upload">

            <div

                className="avatar-preview"

                style={{

                    width: size,

                    height: size

                }}

            >

                {

                    image ?

                        <img

                            src={image.preview}

                            alt="Avatar"

                        />

                        :

                        <FaUserCircle

                            className="avatar-placeholder"

                        />

                }

                <button

                    type="button"

                    className="camera-btn"

                    onClick={() =>

                        inputRef.current.click()

                    }

                >

                    <FaCamera />

                </button>

            </div>

            <input

                ref={inputRef}

                type="file"

                accept="image/*"

                hidden

                onChange={handleFile}

            />

            <div className="avatar-actions">

                <button

                    type="button"

                    onClick={() =>

                        inputRef.current.click()

                    }

                >

                    Upload

                </button>

                {

                    image &&

                    <button

                        type="button"

                        className="danger"

                        onClick={removeImage}

                    >

                        <FaTrash />

                        Remove

                    </button>

                }

            </div>

        </div>

    );

}

export default AvatarUpload;