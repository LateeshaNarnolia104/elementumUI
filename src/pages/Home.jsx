import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProgressSection from "../Components/ProgressSection";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import CursorBlob from "../Components/CursorBlob";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <CursorBlob/>
      <Navbar />
      <Hero />
      <ProgressSection/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Home;