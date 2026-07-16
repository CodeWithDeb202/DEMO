import "./Contact.css";

import { motion } from "framer-motion";

import SectionHeader from "../../components/Common/SectionHeader/SectionHeader";
import Button from "../../components/Common/Button/Button";

import { contactInfo } from "./ContactData";

function Contact() {

  return (

    <section className="contact">

      <SectionHeader
        badge="CONTACT US"
        title="Let's Build Your Career Together"
        description="Have questions? Contact our team. We are always happy to help."
      />

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          {contactInfo.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="info-card"
              >

                <Icon className="info-icon" />

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.value}</p>

                </div>

              </div>

            );

          })}

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <Button
            variant="primary"
            fullWidth
          >
            Send Message
          </Button>

        </motion.form>

      </div>

    </section>

  );

}

export default Contact;