import Navbar from "../../../components/Navbar";
import Hero from "../Hero";
import About from "../About";
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
        <Contact />
      </div>


    </>
  )

}

export default Landing;