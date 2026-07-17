import "./Mentors.css";
import { mentorsData } from "./MentorsData";

import { motion } from "framer-motion";

import SectionHeader from "../../../components/Common/SectionHeader";
import Card from "../../../components/Common/CardComponent/Card";

import { FaLinkedin, FaGithub } from "react-icons/fa";


import Mentor1 from "../../../assets/mentors/mentor1.jpg";
import Mentor2 from "../../../assets/mentors/mentor2.jpg";
import Mentor3 from "../../../assets/mentors/mentor3.jpg";
import Mentor4 from "../../../assets/mentors/mentor4.jpg";

const mentorImages = {
    mentor1: Mentor1,
    mentor2: Mentor2,
    mentor3: Mentor3,
    mentor4: Mentor4 
};

function Mentors() {

    return (

        <section className="mentors">

            <SectionHeader

                badge="OUR MENTORS"

                title="Meet Our Expert Mentors"

                description="Learn from experienced software engineers and designers."

            />

            <div className="mentor-grid">

                {

                    mentorsData.map((mentor, index) => (

                        <motion.div key={mentor.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .15 }}>
                            <Card className="mentor-card">


                                <img

                                    src={mentorImages[mentor.image]}

                                    alt={mentor.name}

                                />

                                <h3>

                                    {mentor.name}

                                </h3>

                                <span>

                                    {mentor.designation}

                                </span>

                                <small>

                                    {mentor.experience}

                                </small>

                                <div className="mentor-skills">

                                    {

                                        mentor.skills.map(skill => (

                                            <span key={skill}>

                                                {skill}

                                            </span>

                                        ))

                                    }

                                </div>

                                <div className="mentor-social">

                                    <a

                                        href={mentor.social.linkedin}

                                        target="_blank"

                                        rel="noreferrer"

                                    >

                                        <FaLinkedin />

                                    </a>

                                    <a

                                        href={mentor.social.github}

                                        target="_blank"

                                        rel="noreferrer"

                                    >

                                        <FaGithub />

                                    </a>

                                </div>

                            </Card>
                        </motion.div>

                    ))

                }

            </div>

        </section>

    )

}

export default Mentors;