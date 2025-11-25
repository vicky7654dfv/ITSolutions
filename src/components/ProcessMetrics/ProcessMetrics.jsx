import React from "react";
import styles from "./ProcessMetrics.module.css";

export default function ProcessMetrics() {
  return (
    <div className={styles.metricsContainer}>
      <div className={styles.splitLayout}>
        {/* Left Side: Census Data */}
        <div className={styles.censusSection}>
          <h3 className={styles.subTitle}>Client Census & Reach</h3>
          <p className={styles.introText}>
            Our analytical approach to business development ensures we understand the demographics and needs of the digital population.
          </p>
          
          <div className={styles.statGrid}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>120+</span>
              <span className={styles.statLabel}>Enterprise Clients</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>End Users Impacted</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Retention Rate</span>
            </div>
          </div>
        </div>

        {/* Right Side: Process */}
        <div className={styles.processSection}>
          <h3 className={styles.subTitle}>Business Development Process</h3>
          <div className={styles.timeline}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h4>Discovery Phase</h4>
                <p>We analyze your business infrastructure and market requirements.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h4>Strategic Planning</h4>
                <p>Formulating a roadmap with defined milestones and tech stack.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h4>Agile Execution</h4>
                <p>Iterative development with regular feedback loops.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h4>Optimization</h4>
                <p>Continuous monitoring and performance scaling post-launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}