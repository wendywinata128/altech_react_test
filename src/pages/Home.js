import { useState } from "react";
import Footer from "../components/Footer";
import HomeContactSection from "../components/home/ContactSection";
import Hero from "../components/home/Hero";
import LoginModal from "../components/home/LoginModal";
import HomePricingSection from "../components/home/PricingSection";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showLoginModal, setLoginModal] = useState(false)
  return (
    <div className="flex flex-col gap-8 md:gap-24">
      <Navbar onLoginClicked={() => setLoginModal(true)}/>
      <Hero/>
      <HomePricingSection/>
      <HomeContactSection/>
      <Footer/>
      <LoginModal show={showLoginModal} onCloseDialog={() => setLoginModal(false)}/>
    </div>
  );
}
