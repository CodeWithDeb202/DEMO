import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero";
import About from "../About/About";
import Features from "../Features/Features";

function Landing(){

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />

      <section>
        Internship Programs
      </section>

      <section>
        Contact
      </section>
      
    </>
  )

}

export default Landing;