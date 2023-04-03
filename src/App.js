import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import UpcomingExamination from "./components/UpcomingExamination";
import Slider from "./components/Slider";
import GrayServiesSection from "./components/GrayServiesSection";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <HomeBanner />
      <UpcomingExamination />
      <Slider />
      <GrayServiesSection />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
