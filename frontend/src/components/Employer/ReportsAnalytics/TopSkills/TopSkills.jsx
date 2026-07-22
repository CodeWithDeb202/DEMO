import "./TopSkills.css";

import {
    FaCode,
    FaChartBar
} from "react-icons/fa";

function TopSkills({

    skills = []

}) {

    const highest = Math.max(

        ...skills.map(skill => skill.count),

        1

    );

    return (

        <div className="top-skills">

            <div className="top-skills-header">

                <h2>

                    Top Skills

                </h2>

                <p>

                    Most demanded skills among applicants

                </p>

            </div>

            <div className="top-skills-list">

                {

                    skills.map((skill,index)=>(

                        <div

                            key={skill.name || index}

                            className="top-skill-card"

                        >

                            <div className="skill-left">

                                <div className="skill-icon">

                                    <FaCode/>

                                </div>

                                <div>

                                    <h4>

                                        {skill.name}

                                    </h4>

                                    <span>

                                        <FaChartBar/>

                                        {skill.count} Candidates

                                    </span>

                                </div>

                            </div>

                            <div className="skill-progress">

                                <div

                                    className="skill-progress-fill"

                                    style={{

                                        width:`${(skill.count/highest)*100}%`

                                    }}

                                />

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TopSkills;