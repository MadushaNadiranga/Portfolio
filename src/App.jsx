import LogoSection from "./sections/LogoSection";
import NavBar from "./componants/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperinceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AboutMe from "./sections/AboutMe";


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
        <AboutMe />
        <Contact />
        <Footer />
    </>
  );
};

export default App;
