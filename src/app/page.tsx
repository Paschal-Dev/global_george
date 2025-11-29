"use client";
import React, { useEffect } from "react";
import HeroSection from "./home/hero-section";
import About from "./home/about";
import WhyChooseUs from "./home/why-choose-us";
import Objectives from "./home/objectives";
import Footer from "./layout/footer";
import MeetTheTeam from "./home/meet-the-team";

export default function Home() {
  useEffect(() => {
    document.title =
      "Global George Investment Limited - Your Home To Financial Freedom";
  }, []);

  return (
    <section style={{
      display: 'none',
    }}>
      <HeroSection />
      <About />
      <Objectives />
      <WhyChooseUs />
      <MeetTheTeam />
      <Footer />
    </section>
  );
}
