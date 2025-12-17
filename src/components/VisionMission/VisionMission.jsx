import React from "react";
import styles from "./VisionMission.module.css";

// Importing Assets (REPLACE WITH YOUR ACTUAL IMAGES)
import visionImg from "../../assets/About/VisionMission/1.webp";
import missionImg from "../../assets/About/VisionMission/2.webp";

export default function VisionMission() {
  return (
    <div className={styles.vmWrap} data-aos="fade">
      <div className={styles.container}>
        
        {/* Vision Card */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img 
              src={visionImg} 
              alt="Our Vision" 
              className={styles.cardImage} 
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the world’s most trusted partner in digital transformation, 
              building a future where technology empowers every business to 
              operate with unlimited potential and zero boundaries.
            </p>
          </div>
        </div>

        {/* Tech Divider */}
        <div className={styles.divider}>
          <div className={styles.dividerGlow}></div>
        </div>

        {/* Mission Card */}
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img 
              src={missionImg} 
              alt="Our Mission" 
              className={styles.cardImage} 
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              To engineer robust, scalable, and secure IT solutions that drive 
              efficiency. We commit to continuous innovation, ensuring our 
              clients stay ahead of the curve in an ever-evolving digital landscape.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}