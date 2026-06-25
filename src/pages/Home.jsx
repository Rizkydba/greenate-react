import HomeNavbar from "../components/layout/HomeNavbar";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutSection from "../components/home/AboutSection";
import SustainabilitySection from "../components/home/SustainabilitySection";
import JoinMovement from "../components/home/JoinMovement";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <SustainabilitySection />
      <JoinMovement />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;