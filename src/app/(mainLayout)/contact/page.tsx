import Container from "@/components/shared/Container";
import React from "react";
import { ArrowRight } from "lucide-react";
import github from "../../../assets/icons/github.png";
import linkedin from "../../../assets/icons/linkedin.png";
import facebook from "../../../assets/icons/facebook.webp";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/app/home/SectionHeader";
import ContactForm from "./components/ContactForm";
const ContactPage = () => {
  const socialLinks = [
    {
      path: "https://github.com/alhabib5565",
      name: "GitHub",
      subTitle: "Profile On GitHub",
      image: github,
    },
    {
      path: "https://www.linkedin.com/in/alhabib5565/",
      name: "Linkedin",
      subTitle: "Connect with me",
      image: linkedin,
    },
    {
      path: "https://web.facebook.com/profile.php?viewas=100000686899395&id=100071110307696",
      name: "Facebook",
      subTitle: "Connect with me",
      image: facebook,
    },
  ];
  return (
    <div>
      <Container>
        <SectionHeader
          title="Contact Me"
          description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="flex-1 ">
            <ContactForm />
          </div>
          {/* divider */}
          <div className="flex md:flex-col items-center justify-center gap-3 w-full md:w-4 mx-auto  ">
            <span className="border border-primary w-20 md:w-0 h-0 md:h-20"></span>
            <span>OR</span>
            <span className="border border-primary w-20 md:w-0 h-0 md:h-20"></span>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="border rounded-md p-4 flex gap-2 group"
              >
                <div
                  className="h-[55px] w-[55px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: "rgba(66, 180, 255, 0.15)" }}
                >
                  <Image height={35} width={35} src={item.image} alt="" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">{item.name}</h4>
                  <p className="flex items-center gap-1 bg--500">
                    <span className="text-[16px">{item.subTitle}</span>
                    <ArrowRight size={13} className="mt-1 text-primary" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
