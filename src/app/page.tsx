import LandingPage from "@/components/LandingPage";
import { GoogleAnalytics } from "@next/third-parties/google";

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-1GEYSSXF39" />
      <LandingPage />
    </>
  );
}

export default Home;
