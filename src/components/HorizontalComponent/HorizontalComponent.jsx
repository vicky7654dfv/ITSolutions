import { useState, useEffect } from 'react';
import styles from './HorizontalComponent.module.css';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/HorizontalComponent/1.webp"
import img2 from "../../assets/HorizontalComponent/2.webp"
import img3 from "../../assets/HorizontalComponent/3.webp"
import img4 from "../../assets/HorizontalComponent/4.webp"
import img5 from "../../assets/HorizontalComponent/5.webp"
import img6 from "../../assets/HorizontalComponent/6.webp"
import img7 from "../../assets/HorizontalComponent/7.webp"
import img8 from "../../assets/HorizontalComponent/8.webp"

const HorizontalComponent = () => {
  const [isPaused, setIsPaused] = useState(false);

  const servicesData = [
    {
      id: 1,
      title: "Cloud Solutions",
      image: img1
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      image: img2
    },
    {
      id: 3,
      title: "Cybersecurity",
      image: img3
    },
    {
      id: 4,
      title: "Web Development",
      image: img4
    },
    {
      id: 5,
      title: "Mobile Apps",
      image: img5
    },
    {
      id: 6,
      title: "Data Analytics",
      image: img6
    },
    {
      id: 7,
      title: "IoT Solutions",
      image: img7
    },
    {
      id: 8,
      title: "Blockchain",
      image: img8
    }
  ];

  const duplicatedServices = [...servicesData, ...servicesData];

  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our IT Services</h2>
        <p className={styles.subtitle}>
          Discover our comprehensive range of cutting-edge technology solutions and services
        </p>
      </div>

      <div 
        className={styles.scrollContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`${styles.scrollTrack} ${isPaused ? styles.paused : ''}`}
        >
          {duplicatedServices.map((service, index) => (
            <div key={`${service.id}-${index}`} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.content}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <div className={styles.viewButton} onClick={()=>{navigate("/Error")}}>Learn More</div>
                  </div>
                </div>
                <div className={styles.glowEffect}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalComponent;