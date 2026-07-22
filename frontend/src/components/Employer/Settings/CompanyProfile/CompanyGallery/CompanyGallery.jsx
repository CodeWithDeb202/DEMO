import "./CompanyGallery.css";

import {

    FaImages,

    FaTrash,

    FaPlus

} from "react-icons/fa";

function CompanyGallery({

    company,

    setCompany

}) {

    const handleUpload = (e) => {

        const files = Array.from(e.target.files);

        if (!files.length) return;

        const images = files.map((file) => ({

            id: Date.now() + Math.random(),

            file,

            preview: URL.createObjectURL(file)

        }));

        setCompany({

            ...company,

            gallery: [

                ...(company.gallery || []),

                ...images

            ]

        });

    };

    const removeImage = (id) => {

        setCompany({

            ...company,

            gallery: company.gallery.filter(

                (item) => item.id !== id

            )

        });

    };

    return (

        <div className="company-gallery">

            <div className="gallery-header">

                <h2>

                    Company Gallery

                </h2>

                <label className="gallery-upload-btn">

                    <FaPlus />

                    Upload Images

                    <input

                        type="file"

                        hidden

                        multiple

                        accept="image/*"

                        onChange={handleUpload}

                    />

                </label>

            </div>

            {

                company.gallery?.length ? (

                    <div className="gallery-grid">

                        {

                            company.gallery.map((image) => (

                                <div

                                    key={image.id}

                                    className="gallery-card"

                                >

                                    <img

                                        src={image.preview}

                                        alt="Company"

                                    />

                                    <button

                                        onClick={() =>

                                            removeImage(image.id)

                                        }

                                    >

                                        <FaTrash />

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                ) : (

                    <div className="gallery-empty">

                        <FaImages />

                        <p>

                            No Images Uploaded

                        </p>

                    </div>

                )

            }

        </div>

    );

}

export default CompanyGallery;