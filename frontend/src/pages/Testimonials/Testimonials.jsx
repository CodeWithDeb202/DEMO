import "./Testimonials.css";

import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";

import SectionHeader from "../../components/Common/SectionHeader/SectionHeader";

import { testimonialsData } from "./TestimonialsData";

function Testimonials() {

  return (

    <section className="testimonials">

      <SectionHeader
        badge="TESTIMONIALS"
        title="What Our Interns Say"
        description="Real feedback from students who completed internships at Tech Monster."
      />

      <div className="testimonial-grid">

        {testimonialsData.map((item, index) => (

          <motion.div

            key={item.id}

            className="testimonial-card"

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{
              delay: index * 0.15
            }}

          >

            <div className="testimonial-header">

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>{item.name}</h3>

                <span>

                  {item.role}

                </span>

              </div>

            </div>

            <div className="rating">

              {

                [...Array(item.rating)].map((_, i) => (

                  <FaStar key={i} />

                ))

              }

            </div>

            <p>"{item.review}"</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Testimonials;