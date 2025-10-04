import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import SmartCity from "@/components/SmartCity";
import Leadership from "@/components/Leadership";
import WhoWeAre from "@/components/WhoWeAre";
import AboutCity from "@/components/AboutCity";
import Services from "@/components/Services";
import Tourism from "@/components/Tourism";
import YouTubeVideos from "@/components/YouTubeVideos";
import Notifications from "@/components/Notifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <SmartCity />
        <Leadership />
        <WhoWeAre />
        <AboutCity />
        <Services />
        <Tourism />
        <YouTubeVideos />
        <Notifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
