import React, { useEffect } from 'react';
import styles from './AboutSection.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import img1 from "../../assets/HomePage2/AboutSection/1.webp"
import img2 from "../../assets/HomePage2/AboutSection/2.webp"

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={styles.aboutContainer} data-aos="fade-up">
      <div className={styles.contentWrapper}>
        
        {/* Left Side: IT Details */}
        <div className={styles.textColumn}>
          <h2>Why Choose Our IT Expertise?</h2>
          <p>
            In a rapidly evolving digital landscape, we provide the stability 
            and innovation your business needs. Our team specializes in 
            cloud architecture, cybersecurity, and scalable software development.
          </p>
          <p>
            We don't just fix problems; we engineer growth. From optimizing 
            your existing infrastructure to deploying next-gen AI solutions, 
            we are your partners in technical excellence.
          </p>
        </div>

        {/* Right Side: Floating Images */}
        <div className={styles.imageColumn}>
          {/* Image 1: Top floating */}
          <div className={`${styles.imgBox} ${styles.floatFast}`}>
            <img 
              src={img1} 
              alt="Cybersecurity lock" 
            />
          </div>

          {/* Image 2: Bottom floating (offset) */}
          <div className={`${styles.imgBox} ${styles.floatSlow}`}>
            <img 
              src={img2} 
              alt="Global network" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;