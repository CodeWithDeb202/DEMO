import Navbar from "../../../components/Navbar";
import Hero from "../Hero";
import About from "../About";
import Features from "../Features";
import Programs from '../Programs';
import Mentors from '../Mentors';
import Contact from "../Contact";
import FAQ from '../FAQ';
import Testimonials from "../Testimonials";

function Landing(){

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Programs />
      <Testimonials />
      <Mentors />
      <FAQ />
      <Contact />

      
    </>
  )

}

export default Landing;