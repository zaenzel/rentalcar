import React from "react";
import { Animation } from "../../Component/Animation/Animation";
import Banner from "../../Component/Banner/Banner";
import Hero from "../../Component/Hero/Hero";
import SliderTesti from "../../Component/Slider/SliderTesti";
import ValueSection from "../../Component/ValueSection/ValueSection";
import WhyUs from "../../Component/WhyUs/WhyUs";
import Faq from "../../Component/FAQ/Faq";

const Home = () => {
  return (
    <div className="space-y-14 md:space-y-24">
      <Hero />
      <ValueSection />
      <WhyUs />
      <SliderTesti />
      <Banner />
      <Faq />
    </div>
  );
};

export default Home;
