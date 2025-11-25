import React from "react";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <div className={styles.vmWrap} data-aos="fade">
      <div className={styles.container}>
        
        {/* Vision Card */}
        <div className={styles.card}>
          <div className={styles.iconBox}>
            <i className="fa-regular fa-eye"></i>
          </div>
          <div className={styles.content}>
            <h3>Our Vision</h3>
            <p>
              To be the world’s most trusted partner in digital transformation, 
              building a future where technology empowers every business to 
              operate with unlimited potential and zero boundaries.
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Mission Card */}
        <div className={styles.card}>
          <div className={styles.iconBox}>
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div className={styles.content}>
            <h3>Our Mission</h3>
            <p>
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