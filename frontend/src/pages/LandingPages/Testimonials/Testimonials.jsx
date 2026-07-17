import "./Testimonials.css";
import { testimonialsData } from "./TestimonialsData";

import { motion } from "framer-motion";

import SectionHeader from "../../../components/Common/SectionHeader";

import Rating from "../../../components/Common/CardComponent/Rating";
import Card from "../../../components/Common/CardComponent/Card";

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15
            }}
          >
            <Card className="testimonial-card">


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

              <Rating rating={item.rating} />

              <p>"{item.review}"</p>

            </Card>
          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Testimonials;