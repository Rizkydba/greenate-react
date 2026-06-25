import { useState } from "react";

import Container from "../common/Container";
import Section from "../common/Section";

import sustainabilityImage from "../../assets/images/sustainability.png";

const accordionItems = [
  {
    title: "100% Organic & Non-GMO",
    description:
      "We partner with ethical farmers who grow food without harmful chemicals.",
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "We use sustainable packaging to reduce environmental impact while keeping products fresh.",
  },
  {
    title: "Carbon-Neutral Practices",
    description:
      "Our production and delivery process is designed to reduce carbon emissions.",
  },
  {
    title: "Zero-Waste Initiative",
    description:
      "We continuously improve our production process to minimize food waste.",
  },
];

const SustainabilitySection = () => {
  const [active, setActive] = useState(0);

  return (
    <Section className="bg-background py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Image */}
          <div>
            <img
              src={sustainabilityImage}
              alt="Sustainability"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">

            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-5 text-left bg-secondary rounded-2xl"
                >
                  <span className="font-inter text-lg font-semibold">
                    {item.title}
                  </span>

                  <span className="text-2xl font-bold">
                    {active === index ? "−" : "+"}
                  </span>
                </button>

                {active === index && (
                  <div className="px-5 pb-5">
                    <p className="font-inter text-gray-600">
                      {item.description}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
};

export default SustainabilitySection;