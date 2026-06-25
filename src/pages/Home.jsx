import HomeNavbar from "../components/layout/HomeNavbar";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutSection from "../components/home/AboutSection";
import SustainabilitySection from "../components/home/SustainabilitySection";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <SustainabilitySection />
    </>
  );
};

export default Home;