import HomeNavbar from "../components/layout/HomeNavbar";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Home;