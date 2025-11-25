import React from "react";
import styles from "./ServiceGrid.module.css";

export default function ServiceGrid() {
  const services = [
    { icon: "fa-solid fa-code", title: "Web Development", text: "Full-stack solutions using React, Node.js, and Python." },
    { icon: "fa-solid fa-mobile-screen", title: "App Development", text: "Native and Cross-platform mobile applications." },
    { icon: "fa-solid fa-database", title: "Data Science", text: "Advanced analytics and big data processing." },
    { icon: "fa-solid fa-cloud-arrow-up", title: "Cloud Services", text: "AWS, Azure, and Google Cloud management." },
    { icon: "fa-solid fa-shield-halved", title: "Cyber Security", text: "Penetration testing and security auditing." },
    { icon: "fa-solid fa-robot", title: "AI Integration", text: "Chatbots, automation, and predictive models." },
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
            <div className={styles.iconBox}>
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}