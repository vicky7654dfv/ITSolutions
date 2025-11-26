import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from '../../components/HeroSection/HeroSection'; 
import AboutSection from '../../components/AboutSection/AboutSection';
import ServiceList from '../../components/ServiceList/ServiceList';
import PollSection from '../../components/PollSection/PollSection';

const HomePage2 = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceList />
        <PollSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage2;