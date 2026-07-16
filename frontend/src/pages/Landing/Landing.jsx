import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero";
import About from "../About/About";
import Features from "../Features/Features";
import Programs from '../Programs/Programs';
import Testimonials from '../Testimonials/Testimonials';
import Mentors from '../Mentors/Mentors';
import FAQ from '../FAQ/FAQ';

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
      
    </>
  )

}

export default Landing;