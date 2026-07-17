import './Programs.css';
import { programsData } from './ProgramsData';

import { motion } from 'framer-motion';
import { FaClock, FaSignal, FaArrowRight } from "react-icons/fa";

import FrontendImage from "../../../assets/images/frontend.png";
import BackendImage from "../../../assets/images/backend.png";
import FullStackImage from "../../../assets/images/fullstack.png";
import UiUxImage from "../../../assets/images/uiux.png";

import SectionHeader from '../../../components/Common/SectionHeader';
import Button from '../../../components/Common/Form/Button';
import Card from '../../../components/Common/CardComponent/Card';

const imageMap = {
    frontend: FrontendImage,
    backend: BackendImage,
    fullstack: FullStackImage,
    uiux: UiUxImage,
}

function Programs() {
    return (
        <>
            <section className="programs">

                <SectionHeader
                    badge="INTERNSHIP PROGRAMS"
                    title="Choose Your Career Path"
                    description="Learn modern technologies by working on practical projects with mentor guidance."
                />

                <div className="programs-grid">
                    {programsData.map((program, index) => (

                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >

                            <Card className="program-card">

                                <img
                                    src={imageMap[program.image]}
                                    alt={program.title}
                                    className="program-image"
                                />

                                <div className="program-content">

                                    <h3>{program.title}</h3>

                                    <div className="program-info">

                                        <span>
                                            <FaClock />
                                            {program.duration}
                                        </span>

                                        <span>
                                            <FaSignal />
                                            {program.level}
                                        </span>

                                    </div>

                                    <div className="technology-list">

                                        {program.technologies.map((tech) => (

                                            <span
                                                key={tech}
                                                className="tech-badge"
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                    <Button
                                        variant="primary"
                                        fullWidth
                                        icon={<FaArrowRight />}
                                    >
                                        Apply Now
                                    </Button>

                                </div>

                            </Card>

                        </motion.div>

                    ))}
                </div>
            </section >
        </>
    )
}

export default Programs;