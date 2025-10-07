import FeaturedDoctorsSection from "./FeaturedDoctorsSection";
import HeroSection from "./HeroSection";
import "./Home.scss";
import SpecialtiesSection from "./SpecialtiesSection";
import Statistics from "./Statistics";
function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <SpecialtiesSection />
      <FeaturedDoctorsSection />
    </>
  );
}

export default Home;
