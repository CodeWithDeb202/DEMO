import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero";
import About from "../About/About";

function Landing(){

  return (
    <>
      <Navbar />
      <Hero />
      <About />

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