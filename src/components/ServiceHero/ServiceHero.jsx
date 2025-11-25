import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServiceHero.module.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    title: "Enterprise Software Development",
    desc: "Scalable, secure, and high-performance software tailored to your business needs."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    title: "Cybersecurity & Risk Management",
    desc: "Protecting your digital assets with next-gen security protocols and real-time monitoring."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    title: "Cloud Infrastructure Solutions",
    desc: "Seamless migration and management of cloud architectures for ultimate flexibility."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "AI & Data Analytics",
    desc: "Transforming raw data into actionable insights using machine learning algorithms."
  }
];

export default function ServiceHero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNav = () => {
    navigate("/Error");
  };

  return (
    <div className={styles.heroWrap}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.image})` }}
        >
          <div className={styles.content}>
            <h1 className={styles.heading}>{slide.title}</h1>
            <p className={styles.description}>{slide.desc}</p>
            <div className={styles.btnGroup}>
              <button onClick={handleNav} className={styles.primaryBtn}>
                Get Started
              </button>
              <button onClick={handleNav} className={styles.secondaryBtn}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}