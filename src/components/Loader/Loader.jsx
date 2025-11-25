import React, { useState, useEffect } from 'react';
import styles from "./Loader.module.css";
import logo from "../../assets/Header/logo.webp"; 

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate system initialization (3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Return null only after the fade-out transition would have finished
  // However, for React to render the fade-out class, we keep it in DOM briefly
  // Note: logic handled by CSS opacity/pointer-events mainly
  if (!isVisible) {
     // Optional: You can return null here if you want it removed from DOM 
     // completely after state change, but usually we let CSS handle the visual fade 
     // and then unmount in a parent wrapper. For this standalone, we return the 
     // div with the fadeOut class.
  }

  return (
    <div className={`${styles.loaderWrap} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContainer}>
        <div className={styles.logoBox}>
          <img 
            src={logo} 
            alt="TheStackly System" 
            className={styles.logo}
          />
        </div>
        
        <div className={styles.loaderBarContainer}>
          <div className={styles.loaderProgress}></div>
        </div>
        
        <div className={styles.textContainer}>
          <p className={styles.loadingText}>Initializing System Protocols...</p>
          <span className={styles.blinkCursor}>_</span>
        </div>
      </div>
    </div>
  );
}