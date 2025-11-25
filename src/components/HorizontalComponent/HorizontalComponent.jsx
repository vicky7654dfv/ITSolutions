import { useState, useEffect } from 'react';
import styles from './HorizontalComponent.module.css';
import { useNavigate } from 'react-router-dom';

const HorizontalComponent = () => {
  const [isPaused, setIsPaused] = useState(false);

  const servicesData = [
    {
      id: 1,
      title: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 5,
      title: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      title: "IoT Solutions",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 8,
      title: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
    }
  ];

  // Duplicate the array to create seamless loop
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