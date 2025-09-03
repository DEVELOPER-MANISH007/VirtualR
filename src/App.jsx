import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featuresection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Price from "./Components/price";
import  Testimonials from "./Components/testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
   <>
   <Navbar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <Hero/>
   <Featuresection/>
   <Workflow/>
   <Price/>
   <Testimonials/>
   <Footer/>
   </div>
   </>
  );
};

export default App;
