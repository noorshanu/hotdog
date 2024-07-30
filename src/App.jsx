import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import DexMark from "./components/DexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Navbar />
        <Hero />
</section>
    
        <BorderSec />
        <AboutUs />
        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  "  >
        

          <h1 className=" text-3xl sm:text-6xl font-bold text-[#793220] font-dream" data-aos="zoom-in-up"
          data-aos-duration="1500">
            Tokenomics
          </h1>

      
        </div>
        <Taxs />

        <DexMark/>
        {/* <ChooseHero /> */}
        <HowToBuy />
        <div className=" pt-4">
          {/* <Faq /> */}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
