import { Link } from "react-router-dom";
import Container from "../common/Container";
import Section from "../common/Section";
import Heading from "../common/Heading";

import product from "../../assets/images/product-1.png";

const products = [
  {
    id: 1,
    image: product,
    badge: "100% Organic",
    title: "Spinach Trottole",
    description: "Organic spinach trottole pasta 500gr",
    linkUrlCart: "/shop",
    linkUrlBuy: "/shop",
  },
  {
    id: 2,
    image: product,
    badge: "100% Organic",
    title: "Spinach Trottole",
    description: "Organic spinach trottole pasta 500gr",
    linkUrlCart: "/shop",
    linkUrlBuy: "/shop",
  },
  {
    id: 3,
    image: product,
    badge: "100% Organic",
    title: "Spinach Trottole",
    description: "Organic spinach trottole pasta 500gr",
    linkUrlCart: "/shop",
    linkUrlBuy: "/shop",
  },
];

const FeaturedProducts = () => {
  return (
    <Section className="bg-background py-20">
      <Container>

        <Heading
          title="Product Highlight"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl bg-secondary shadow-md"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-70 lg:h-90 w-full object-contain p-8 lg:p-18 rounded-3xl bg-white"
                />
                <span className="max-w-24 text-center absolute bottom-0 right-0 rounded-2xl rounded-tr-none rounded-bl-none bg-[#67874e] px-4 py-2 text-sm text-white font-inter">
                  {product.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-inter text-2xl font-bold font-black text-center">
                  {product.title}
                </h3>

                <p className="font-inter mt-3 text-gray-600 text-center">
                  {product.description}
                </p>

                <div className="mt-6 flex gap-4">

                  <Link
                    to={product.linkUrlCart}
                    className="flex-1 rounded-lg bg-white py-3 font-inter text-center text-primary"
                  >
                    Add to Cart
                  </Link>

                  <Link
                    to={product.linkUrlBuy}
                    className="flex-1 rounded-lg bg-primary py-3 font-inter text-center text-white"
                  >
                    Buy Now
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default FeaturedProducts;