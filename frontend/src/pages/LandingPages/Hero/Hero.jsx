import './Hero.css';

import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle, FaShieldAlt } from 'react-icons/fa';
import { heroContent } from './HeroData';
import HeroImage from '../../../assets/logo/logo.png';

import Button from '../../../components/Common/Form/Button';
import Card from '../../../components/Common/CardComponent/Card';


const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: 'easeOut',
        },
    }),
};

function Hero() {
    return (
        <>
            <section className='hero' id='home'>


                <div id="hero-container">
                    {/* LEFT */}
                    <div id="hero-left">
                        <motion.span id='hero-badge' variants={fadeUp} initial='hidden' animate='show' custom={0}>{heroContent.badge}</motion.span>
                        <motion.h1 id='hero-title' variants={fadeUp} initial='hidden' animate='show' custom={0.2}>{heroContent.title} <span> <FaShieldAlt /></span> <span>{heroContent.highlight}</span></motion.h1>
                        <motion.p id='hero-description' variants={fadeUp} initial='hidden' animate='show' custom={0.4}>{heroContent.description}</motion.p>
                        <motion.div id='hero-buttons' variants={fadeUp} initial='hidden' animate='show' custom={0.6}>
                            <Button variant="primary" icon={<FaArrowRight />}>
                                Apply Internship
                            </Button>

                            <Button variant='secondary' icon={<FaPlayCircle />}>
                                {heroContent.secondaryButton}
                            </Button>
                        </motion.div>

                        <motion.div className='hero-stats' variants={fadeUp} initial='hidden' animate='show' custom={0.8}>
                            {heroContent.stats.map((stat) => (
                                <Card className='stat-card' key={stat.id}>
                                    <h2>{stat.value}</h2>
                                    <p>{stat.label}</p>
                                </Card>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT */}
                    <motion.div id='hero-right' initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <motion.img src={HeroImage} alt='Hero image' animate={{ y: [0, -30, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Hero;