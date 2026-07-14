import Navbar from "../../components/common/Navbar";
import Capabilities from "../../components/landing/Capabilties/Capabilites";
import Hero from "../../components/landing/Hero/Hero";
import Problem from "../../components/landing/Problem/Problem";
import Showcase from "../../components/landing/Showcase/Showcase";
import HowItWorks from "../../components/landing/HowItWorks/HowItWorks";
import Companies from "../../components/landing/Companies/Companies"
import FAQ from "../../components/landing/FAQ/FAQ";
import CTA from "../../components/landing/CTA/CTA";
import Footer from "../../components/common/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities/>
      <Showcase/>
      <HowItWorks/>
      <Companies />
      <FAQ />
      <CTA/>
      <Footer />
      {/* <Problem /> */}
    </>
  );
};

export default LandingPage;