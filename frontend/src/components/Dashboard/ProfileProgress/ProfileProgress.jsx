import "./ProfileProgress.css";

const ProfileProgress = ({ user = {} }) => {

    const checklist = [

        {
            label: "Basic Information",
            completed:
                !!user?.firstName &&
                !!user?.lastName &&
                !!user?.phone
        },

        {
            label: "Profile Photo",
            completed: !!user?.profileImage
        },

        {
            label: "Resume Uploaded",
            completed: !!user?.resume
        },

        {
            label: "Education",
            completed:
                user?.education?.length > 0
        },

        {
            label: "Experience",
            completed:
                user?.experience?.length > 0
        },

        {
            label: "Skills",
            completed:
                user?.skills?.length > 0
        },

        {
            label: "Social Links",
            completed:
                !!user?.socialLinks?.linkedin ||
                !!user?.socialLinks?.github
        }

    ];

    const completedItems = checklist.filter(

        item => item.completed

    ).length;

    const percentage = Math.round(

        (completedItems / checklist.length) * 100

    );

    return (

        <div className="profile-progress-card">

            <div className="progress-header">

                <h3>

                    Profile Completion

                </h3>

                <span>

                    {percentage}%

                </span>

            </div>

            <div className="progress-bar">

                <div

                    className="progress-fill"

                    style={{

                        width: `${percentage}%`

                    }}

                />

            </div>

            <div className="progress-list">

                {

                    checklist.map((item, index) => (

                        <div

                            key={index}

                            className="progress-item"

                        >

                            <span>

                                {

                                    item.completed

                                        ?

                                        "✅"

                                        :

                                        "⭕"

                                }

                            </span>

                            <p>

                                {item.label}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default ProfileProgress;