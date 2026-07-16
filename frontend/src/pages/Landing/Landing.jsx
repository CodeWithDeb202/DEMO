import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero";
import About from "../About/About";
import Features from "../Features/Features";
import Programs from '../Programs/Programs';

function Landing(){

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Programs />

      <section>
        Contact
      </section>
      
    </>
  )

}

export default Landing;