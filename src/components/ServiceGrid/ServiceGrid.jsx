import React from "react";
import styles from "./ServiceGrid.module.css";

// Importing Assets (REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS)
import webImg from "../../assets/Services/ServiceGrid/1.webp";
import appImg from "../../assets/Services/ServiceGrid/2.webp";
import dataImg from "../../assets/Services/ServiceGrid/3.webp";
import cloudImg from "../../assets/Services/ServiceGrid/4.webp";
import securityImg from "../../assets/Services/ServiceGrid/5.webp";
import aiImg from "../../assets/Services/ServiceGrid/6.webp";

export default function ServiceGrid() {
  const services = [
    { 
      image: webImg, 
      title: "Web Development", 
      text: "Full-stack solutions using React, Node.js, and Python." 
    },
    { 
      image: appImg, 
      title: "App Development", 
      text: "Native and Cross-platform mobile applications." 
    },
    { 
      image: dataImg, 
      title: "Data Science", 
      text: "Advanced analytics and big data processing." 
    },
    { 
      image: cloudImg, 
      title: "Cloud Services", 
      text: "AWS, Azure, and Google Cloud management." 
    },
    { 
      image: securityImg, 
      title: "Cyber Security", 
      text: "Penetration testing and security auditing." 
    },
    { 
      image: aiImg, 
      title: "AI Integration", 
      text: "Chatbots, automation, and predictive models." 
    },
  ];

  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <h2>Our Core Expertise</h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* New Image Wrapper Structure */}
            <div className={styles.imageWrapper}>
              <img 
                src={service.image} 
                alt={service.title} 
                className={styles.serviceImage} 
              />
            </div>
            
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}