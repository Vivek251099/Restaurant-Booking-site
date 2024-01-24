import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Reservations from "../components/Reservations";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservations />
      <Footer />
    </>
  );
};

export default Home;
