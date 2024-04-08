"use client";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Rules from "@/components/Rules/Rules";
import Statistics from "@/components/Statistics/Statistics";
import WorkingHours from "@/components/WorkingHours/WorkingHours";
import { GoogleAnalytics } from "@next/third-parties/google";

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-1GEYSSXF39" />
      <Hero />
      <Statistics />
      <Gallery />
      <Rules />
      <WorkingHours />
    </>
  );
};

export default Home;
