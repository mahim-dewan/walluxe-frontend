import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";

const faqs = [
  {
    question: "What is a media wall/feature wall?",
    answer:
      "A media wall is a visually striking wall designed to display videos, images, or interactive content, often used in offices, lobbies, or events. A feature wall is a wall that stands out with unique design, materials, textures, or lighting to enhance the aesthetics of a space.",
  },
  {
    question: "What types of walls do you design?",
    answer:
      "We design:\n- Digital media walls (LED, LCD, or projection-based)\n- Custom feature walls with wood, stone, metal, or acrylic finishes\n- Interactive walls for events or corporate spaces",
  },
  {
    question: "How long does the installation take?",
    answer:
      "Installation time varies based on the wall type and size. Typically, a standard feature wall takes 3–7 days, while a media wall with integrated technology may take 1–2 weeks including testing and calibration.",
  },
  {
    question: "Do you provide design consultation?",
    answer:
      "Yes! We offer full design consultation, including concept sketches, material selection, and layout recommendations tailored to your space.",
  },
  {
    question: "Can the wall content be updated?",
    answer:
      "For media walls, yes. You can update images, videos, or interactive content easily via our user-friendly management system. Feature walls are static but can be customized for seasonal or branding changes.",
  },
  {
    question: "Are your walls suitable for both homes and commercial spaces?",
    answer:
      "Absolutely! We create walls for:\n- Offices and corporate lobbies\n- Event venues and showrooms\n- Residential living rooms or home theaters",
  },
  {
    question: "What is the cost of a media or feature wall?",
    answer:
      "Pricing depends on size, materials, and technology. We provide custom quotes after an initial consultation to ensure the solution fits your budget and vision.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide optional maintenance packages to ensure your media wall or feature wall remains in perfect condition, including screen calibration, cleaning, and software updates.",
  },
  {
    question: "Can you work with existing walls or do you build new ones?",
    answer:
      "We can do both! Our team evaluates your current space and advises whether to retrofit or construct a new wall for optimal results.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us with your requirements. We will schedule a consultation, discuss your vision, and provide a detailed plan and quote for your wall project.",
  },
];

const FaqAccordion = () => {
  return (
    <div className="my-5">
      <h2 className="title text-center!">FAQs</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {faqs.map((faq) => (
          <AccordionItem
            value={faq.question}
            key={faq.question}
            className={
              "bg-light my-2 w-full md:w-[70%] mx-auto border-gray rounded-md"
            }
          >
            <AccordionTrigger
              className={
                "cursor-pointer font-inter border-b-0 rounded-bl-none font-semibold text-base md:text-xl lg:text-2xl 2xl:text-4xl"
              }
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 bg-primary rounded-md text-balance  text-light p-2">
              <p className="text-para">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
