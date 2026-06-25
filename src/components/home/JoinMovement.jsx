import { Link } from "react-router-dom";

import Container from "../common/Container";
import Section from "../common/Section";
import Heading from "../common/Heading";

const JoinMovement = () => {
  return (
    <Section className="relative bg-background rounded-br-full rounded-bl-full  py-20">
      {/* Overlay */}
      <div className="absolute w-full h-full top-0 z-[-1] bg-white"></div>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
            
         <Heading
          title="Join the movement"
         />

          <p className="mt-6 font-inter text-lg font-light text-gray-700">
            By choosing Greenate, you're not just nourishing your body—
            you're taking a stand for a healthier planet.
            Let's make sustainable eating the new standard, together.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 font-inter font-light text-white transition hover:opacity-90 shadow-[0_4px_14px_0_var(--tw-shadow-color)] shadow-primary"
            >
            Learn More
         </Link>

        </div>
      </Container>
    </Section>
  );
};

export default JoinMovement;