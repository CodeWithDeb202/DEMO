import Navbar from "../../../components/Navbar";
import Hero from "../Hero";
import About from "../About";
// import Features from "../Features";
// import Programs from '../Programs';
// import Mentors from '../Mentors';
// import FAQ from '../FAQ';
// import Testimonials from "../Testimonials";
import Contact from "../Contact";

function Landing() {

  return (
    <>
      <div className="cyber-page">

        <div className="cyber-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Navbar />
        <Hero />
        <About />
        {/* <Features />
        <Programs />
        <Testimonials />
        <Mentors />
        <FAQ /> */}
        <Contact />
      </div>


    </>
  )

}

export default Landing;