import Container from "../common/Container";
import Section from "../common/Section";

const AboutSection = () => {
  return (
    <Section className="bg-background py-20">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="flex flex-col font-baloo text-primary font-bold uppercase tracking-wide">
            <span className="text-3xl md:text-5xl lg:text-7xl">
                Growing a
            </span>
            <span className="text-3xl md:text-5xl lg:text-7xl">
                Greener Future,
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl">
                One Meal at a Time
            </span>
          </h2>

          <p className="mt-8 font-inter text-lg text-gray-700">
            At Greenate, we believe that great food shouldn’t come at the cost of the planet. That’s why we are committed to sourcing responsibly, reducing waste, and promoting sustainable farming. Every product we offer is crafted with care—ensuring that what’s good for you is also good for nature.
          </p>

        </div>

      </Container>
    </Section>
  );
};

export default AboutSection;