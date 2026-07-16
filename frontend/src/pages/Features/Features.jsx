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
import SectionHeader from '../../components/Common/SectionHeader/SectionHeader';
import Card from '../../components/Common/Card/Card';

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
                <SectionHeader
                    badge={"WHY CHOOSE US"}
                    title={"Why Choose Tech Monster?"}
                    description={"Everything you need to become an industry-ready developer in one platform."}
                />

                <div className="features-grid">
                    {featuresData.map((feature, index) => {

                        const Icon = iconMap[feature.icon];

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                            >
                                <Card className="feature-card">

                                    <div className="features-icon">
                                        <Icon />
                                    </div>

                                    <h3>{feature.title}</h3>

                                    <p>{feature.description}</p>

                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </>
    )
};

export default Features;