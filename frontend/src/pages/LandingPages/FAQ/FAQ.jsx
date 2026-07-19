import "./FAQ.css";
import { faqData } from "./FAQData";

import SectionHeader from "../../../components/Common/SectionHeader";
import Accordion from "../../../components/Common/CardComponent/Accordion";


function FAQ() {

  return (

    <section className="faq">

      <SectionHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our internship programs."
      />

      <div className="faq-container">

        {faqData.map((item) => (

          <Accordion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />

        ))}

      </div>

    </section>

  );

}

export default FAQ;