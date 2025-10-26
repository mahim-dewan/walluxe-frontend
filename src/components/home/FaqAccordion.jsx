import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { api } from "@/lib/api";

const FaqAccordion = async () => {
  const getAccordions = await api.getAccordions();
  const accordions = getAccordions?.data;

  return (
    <div className="my-5">
      <h2 className="title text-center!">FAQs</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {accordions?.map((faq) => (
          <AccordionItem
            value={faq.title}
            key={faq.title}
            className={
              "bg-light my-2 w-full md:w-[70%] mx-auto border-gray rounded-md"
            }
          >
            <AccordionTrigger
              className={
                "cursor-pointer font-inter border-b-0 rounded-bl-none font-semibold text-base md:text-xl lg:text-2xl 2xl:text-4xl"
              }
            >
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 bg-primary rounded-md text-balance  text-light p-2">
              <p className="text-para">{faq.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
