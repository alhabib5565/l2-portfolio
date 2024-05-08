import Container from "@/components/shared/Container";
import React from "react";
import SectionHeader from "./SectionHeader";
import ContactForm from "../contact/components/ContactForm";

const ContactMe = () => {
  return (
    <div className="py-[50px]">
      <Container>
        <SectionHeader
          title="Contact Me"
          description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactMe;
