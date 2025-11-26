import React, { useEffect } from 'react';
import styles from './AboutSection.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

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
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
              alt="Cybersecurity lock" 
            />
          </div>

          {/* Image 2: Bottom floating (offset) */}
          <div className={`${styles.imgBox} ${styles.floatSlow}`}>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
              alt="Global network" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;