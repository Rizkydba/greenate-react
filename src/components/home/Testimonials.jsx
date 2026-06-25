import Container from "../common/Container";
import Section from "../common/Section";
import Heading from "../common/Heading";

import avatar from "../../assets/images/testimonial.png";

const testimonials = [
  {
    id: 1,
    image: avatar,
    name: "Sarah Johnson",
    position: "Nutritionist",
    review:
      "Greenate has completely changed the way I shop for healthy food. Fresh, delicious, and sustainable!",
  },
  {
    id: 2,
    image: avatar,
    name: "Michael Lee",
    position: "Chef",
    review:
      "Amazing quality and beautiful products. I highly recommend Greenate to everyone.",
  },
  {
    id: 3,
    image: avatar,
    name: "Emily Carter",
    position: "Food Blogger",
    review:
      "Healthy food with great taste. I love supporting brands that care about the environment.",
  },
];

const Testimonials = () => {
  return (
    <Section className="bg-white py-20">
      <Container>

        <Heading
          title="What They Say"
         />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-18">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center lg:relative rounded-3xl bg-secondary p-8 shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="static lg:absolute lg:top-[-50px] lg:left-1/2 lg:-translate-x-1/2  h-20 w-20 rounded-xl object-cover"
              />

              <h3 className="font-inter mt-5 text-center font-semibold">
                {item.name}
              </h3>

              <p className="font-inter text-center text-sm text-gray-500">
                {item.position}
              </p>

              <div className="my-4 text-center text-yellow-500">
                ★★★★★
              </div>

              <p className="font-inter text-center text-gray-600">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default Testimonials;