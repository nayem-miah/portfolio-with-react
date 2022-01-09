import Layout from "./ChildComponents/Layout";
import HeroBar from "./ChildComponents/HeroBar";
import AboutSection from "./ChildComponents/AboutSection";
import ExperineceSection from "./ChildComponents/ExperineceSection";
import Percent_work from "./ChildComponents/Percent_work";
import ServiceSection from "./ChildComponents/ServiceSection";
import Header from "./ChildComponents/Header";
import PortfolioSection from "./ChildComponents/PortfolioSection";
import PaymentSection from "./ChildComponents/PaymentSection";
import Testimonials from "./ChildComponents/Testimonials";
import BlogSection from "./ChildComponents/BlogSection";
import NewsLetter from "./ChildComponents/NewsLetter";
import Footer from "./ChildComponents/Footer";

const Home = () => {
  return (
    <>
      {/* Header Bar */}

      <Header></Header>

      {/* <!-- Layout --> */}

      <Layout></Layout>

      {/* <!-- Hero Bar --> */}

      <HeroBar></HeroBar>

      {/* About Us */}

      <AboutSection></AboutSection>

      {/* <!-- EXPERIENCE --> */}

      <ExperineceSection></ExperineceSection>

      {/* <!-- percent_work Start --> */}

      <Percent_work></Percent_work>

      {/* <!-- Service --> */}

      <ServiceSection></ServiceSection>

      {/* portfolio Start */}

      <PortfolioSection></PortfolioSection>

      {/* TESTIMONIALS section */}

      <Testimonials></Testimonials>

      {/* Payment Section */}

      <PaymentSection></PaymentSection>

      {/* Blog Section */}

      <BlogSection></BlogSection>

      {/* NEWSLETTER */}

      <NewsLetter></NewsLetter>

      {/* Footer */}

      <Footer></Footer>




    </>
  );
};

export default Home;
