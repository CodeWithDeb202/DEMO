import './Features.css';

import { motion } from 'framer-motion';
import { featuresData } from './FeaturesData';
import {
    FaLaptopCode,
    FaUserTie,
    FaCertificate,
    FaBriefcase,
    FaTasks,
    FaUsers,
} from 'react-icons/fa';

const iconMap = {
    project: FaLaptopCode,
    mentor: FaUserTie,
    certificate: FaCertificate,
    placement: FaBriefcase,
    task: FaTasks,
    team: FaUsers,
};

function Features() {
    return (
        <>
            <section className="features">
                <div className="section-header">
                    <span>WHY CHOOSE US</span>

                    <h2>Why Choose Tech Monster?</h2>
                    <p>
                        Everything you need to become an industry-ready developer in one
                        platform.
                    </p>
                </div>

                <div className="features-grid">
                    {featuresData.map((feature, index) => {

                        const Icon = iconMap[feature.icon];

                        return (
                            <motion.div 
                                key={feature.id}
                                className="feature-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                            >
                                <div className="features-icon">
                                    <Icon />
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>
                                
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </>
    )
};

export default Features;