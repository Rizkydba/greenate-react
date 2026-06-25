import Container from "../components/common/Container";
import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <Section>
      <Container>
        <Heading
          title="Greenate"
          subtitle="Frontend Technical Test"
        />

        <div className="flex justify-center">
          <Button>
            Explore Products
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Home;