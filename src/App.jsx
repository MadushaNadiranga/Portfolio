import LogoSection from "./sections/LogoSection";
import NavBar from "./componants/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperinceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        <ExperinceSection/>
        <TechStack/>
        <Testimonials />
    </>
  );
};

export default App;
