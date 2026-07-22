import "./TopColleges.css";

import {
    FaUniversity,
    FaUsers,
    FaAward
} from "react-icons/fa";

function TopColleges({

    colleges = []

}) {

    return (

        <div className="top-colleges">

            <div className="top-colleges-header">

                <h2>

                    Top Colleges

                </h2>

                <p>

                    Highest performing colleges based on hiring

                </p>

            </div>

            <div className="top-colleges-list">

                {

                    colleges.map((college, index) => (

                        <div

                            className="top-college-card"

                            key={college.id || index}

                        >

                            <div className="college-rank">

                                #{index + 1}

                            </div>

                            <div className="college-info">

                                <h3>

                                    <FaUniversity />

                                    {college.name}

                                </h3>

                                <div className="college-meta">

                                    <span>

                                        <FaUsers />

                                        {college.students} Students

                                    </span>

                                    <span>

                                        <FaAward />

                                        {college.selected} Selected

                                    </span>

                                </div>
                            </div>

                            <div className="college-rate">

                                <h2>

                                    {college.rate}%

                                </h2>

                                <small>

                                    Selection Rate

                                </small>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TopColleges;