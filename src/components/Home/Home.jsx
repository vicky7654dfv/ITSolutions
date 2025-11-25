import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Transforming Businesses with 
              <span className={styles.highlight}> Cutting-Edge</span> IT Solutions
            </h1>
            <p className={styles.heroDescription}>
              We deliver innovative technology solutions that drive digital transformation, 
              enhance operational efficiency, and propel your business into the future. 
              From cloud computing to artificial intelligence, we're your trusted partner 
              in navigating the digital landscape.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/Services" className={styles.primaryButton}>
                Explore Our Services
              </Link>
              <Link to="/Contact" className={styles.secondaryButton}>
                Get In Touch
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="IT Solutions Preview" 
                  className={styles.videoPlaceholder}
                />
                <div className={styles.playButtonOverlay}>
                  <a 
                    href="https://youtu.be/COZvELJFf5g?si=Opid2y6tIVsWnsbM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.playButton}
                  >
                    <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </a>
                </div>
              </div>
              <p className={styles.videoCaption}>
                Watch how we transformed a legacy system into a modern cloud infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>Why Choose Our IT Solutions?</h2>
            <p className={styles.featuresSubtitle}>
              We combine technical expertise with business acumen to deliver solutions that matter
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3 className={styles.featureTitle}>Innovation Driven</h3>
              <p className={styles.featureDescription}>
                Stay ahead with cutting-edge technologies and innovative approaches to problem-solving.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3 className={styles.featureTitle}>Enterprise Security</h3>
              <p className={styles.featureDescription}>
                Robust security measures to protect your data and ensure compliance with industry standards.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Fast Deployment</h3>
              <p className={styles.featureDescription}>
                Rapid implementation and deployment without compromising on quality or performance.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3 className={styles.featureTitle}>24/7 Support</h3>
              <p className={styles.featureDescription}>
                Round-the-clock technical support and maintenance services for uninterrupted operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            <p className={styles.ctaDescription}>
              Let's discuss how our IT solutions can drive your business forward. 
              Schedule a free consultation with our experts today.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/Contact" className={styles.ctaPrimaryButton}>
                Start Your Project
              </Link>
              <Link to="/Error" className={styles.ctaSecondaryButton}>
                Learn More About Error Handling
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;