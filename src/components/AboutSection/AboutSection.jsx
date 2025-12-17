import React, { useEffect } from 'react';
import styles from './AboutSection.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
// Ensure these paths are correct in your project
import img1 from "../../assets/HomePage2/AboutSection/1.webp";
import img2 from "../../assets/HomePage2/AboutSection/2.webp";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={styles.aboutContainer} data-aos="fade-up">
      {/* Background Tech Grid overlay */}
      <div className={styles.techGrid}></div>

      <div className={styles.contentWrapper}>
        
        {/* Left Side: IT Details */}
        <div className={styles.textColumn}>
          <div className={styles.badge}>Innovation First</div>
          <h2>Why Choose Our <span className={styles.highlight}>IT Expertise?</span></h2>
          <p>
            In a rapidly evolving digital landscape, we provide the stability 
            and innovation your business needs. Our team specializes in 
            <span className={styles.techText}> cloud architecture</span>, 
            <span className={styles.techText}> cybersecurity</span>, and 
            <span className={styles.techText}> scalable software development</span>.
          </p>
          <p>
            We don't just fix problems; we engineer growth. From optimizing 
            your existing infrastructure to deploying next-gen AI solutions, 
            we are your partners in technical excellence.
          </p>
          
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <h3>99%</h3>
              <span>Uptime</span>
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <span>Support</span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Images & Connection */}
        <div className={styles.imageColumn}>
          
          {/* THE CONNECTING WIRE (Animated SVG) */}
          <svg className={styles.connectionLine} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Path */}
            <path 
              d="M50 50 C 150 50, 150 350, 350 350" 
              stroke="url(#gradientWire)" 
              strokeWidth="3" 
              strokeLinecap="round"
              className={styles.wirePath}
            />
            {/* The Gradient Definition */}
            <defs>
              <linearGradient id="gradientWire" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Animated Data Dot */}
            <circle r="4" fill="#fff" className={styles.dataDot}>
              <animateMotion 
                dur="3s" 
                repeatCount="indefinite" 
                path="M50 50 C 150 50, 150 350, 350 350" 
              />
            </circle>
          </svg>

          {/* Image 1: Top floating */}
          <div className={`${styles.imgBox} ${styles.floatFast}`}>
            <div className={styles.scanline}></div>
            <img 
              src={img1} 
              alt="Cybersecurity lock" 
            />
            <div className={styles.cornerDecor}></div>
          </div>

          {/* Image 2: Bottom floating (offset) */}
          <div className={`${styles.imgBox} ${styles.floatSlow}`}>
            <div className={styles.scanline}></div>
            <img 
              src={img2} 
              alt="Global network" 
            />
             <div className={styles.cornerDecor}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;