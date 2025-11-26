import React, { useEffect } from 'react';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import vid2 from "../../assets/HomePage2/vid2.mp4"

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={styles.heroContainer} data-aos="fade-in">
      {/* Background Video */}
      <video src={vid2} autoPlay loop muted className={styles.videoBg} />
      {/* Overlay for readability */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Innovative IT Solutions <br /> for Your Business</h1>
        <p>
          Empowering your digital transformation with cutting-edge technology 
          and expert strategies tailored to your goals.
        </p>
        
        <div className={styles.btnGroup}>
          <button className={styles.primaryBtn} onClick={() => navigate('/Error')}>
            Get Started
          </button>
          <button className={styles.secondaryBtn} onClick={() => navigate('/Error')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;