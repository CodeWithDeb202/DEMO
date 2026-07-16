import './Hero.css';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { heroContent } from './HeroData';
import HeroImage from '../../assets/illustrations/hero.svg';

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

function Hero(){
    return(
        <>
            <section className='hero'>

                <div className="hero-container">
                    {/* LEFT */}
                    <div className="hero-left">
                        <motion.span className='hero-badge' variants={fadeUp} initial='hidden' animate='show' custom={0}>{heroContent.badge}</motion.span>
                        <motion.h1 className='hero-title' variants={fadeUp} initial='hidden' animate='show' custom={0.2}>{heroContent.title} {" "} <span>{heroContent.highlight}</span></motion.h1>
                        <motion.p className='hero-description' variants={fadeUp} initial='hidden' animate='show' custom={0.4}>{heroContent.description}</motion.p>
                        <motion.div className='hero-buttons' variants={fadeUp} initial='hidden' animate='show' custom={0.6}>
                            <button className='primary-btn'>
                                {heroContent.primaryButton}
                                <FaArrowRight />
                            </button>

                            <button className='secondary-btn'>
                                <FaPlayCircle />
                                {heroContent.secondaryButton}
                            </button>
                        </motion.div>

                        <motion.div className='hero-stats' variants={fadeUp} initial='hidden' animate='show' custom={0.8}>
                            {heroContent.stats.map((stat) => (
                                <div className='stat-card' key={stat.id}>
                                    <h2>{stat.value}</h2>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT */}
                    <motion.div className='hero-right' initial={{opacity: 0, x: 80}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}}>
                        <motion.img src={HeroImage} alt='Hero illustration' animate={{y: [0, -15, 0]}} transition={{duration: 4, repeat: Infinity, ease:'easeInOut'}} />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Hero;