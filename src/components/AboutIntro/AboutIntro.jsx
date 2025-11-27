import React from "react";
import styles from "./AboutIntro.module.css";
import img from "../../assets/About/About intro/img.webp"
export default function AboutIntro() {
  return (
    <div className={styles.introWrap} data-aos="fade">
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h4 className={styles.subHeading}>Who We Are</h4>
          <h1 className={styles.mainHeading}>Architecting the <span className={styles.accent}>Digital Future</span></h1>
          <p className={styles.description}>
            TheStackly was born from a simple idea: technology should be an enabler, not a barrier. 
            Established in 2020, we have grown from a small garage startup into a premier IT solutions provider. 
            We specialize in transforming legacy systems into agile, scalable, and secure digital ecosystems.
          </p>
          <p className={styles.description}>
            Our headquarters serves as a hub of innovation, where lines of code turn into 
            lifelines for businesses worldwide.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img 
            src={img} 
            alt="TheStackly Headquarters" 
            className={styles.buildingImg} 
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </div>
  );
}