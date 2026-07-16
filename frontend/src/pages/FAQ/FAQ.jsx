import "./FAQ.css";

import SectionHeader from "../../components/Common/SectionHeader/SectionHeader";

import Accordion from "../../components/Common/Accordion/Accordion";

import { faqData } from "./FAQData";

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