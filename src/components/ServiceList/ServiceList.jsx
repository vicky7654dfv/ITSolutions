import React, { useEffect } from 'react';
import styles from './ServiceList.module.css';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'Cloud Architecture',
    desc: 'Scalable cloud solutions designed to optimize your infrastructure and reduce operational costs.',
    count: 120,
  },
  {
    id: 2,
    title: 'Cyber Security',
    desc: 'Advanced threat protection and monitoring to keep your critical business data safe 24/7.',
    count: 85,
  },
  {
    id: 3,
    title: 'Data Analytics',
    desc: 'Turn raw data into actionable insights with our machine learning and AI-driven analytics tools.',
    count: 340,
  },
  {
    id: 4,
    title: 'Web Development',
    desc: 'Full-stack web applications built with the latest reactive technologies and best practices.',
    count: 215,
  }
];

const ServiceList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={styles.serviceContainer} data-aos="fade-in">
      <div className={styles.header}>
        <h2>Our Core Services</h2>
        <p className={styles.subHeader}>Delivering excellence in every line of code.</p>
      </div>

      <div className={styles.gridContainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            {/* Counter Section */}
            <div className={styles.counterWrapper}>
              <span className={styles.plus}>+</span>
              <CountUp 
                end={service.count} 
                duration={2.5} 
                className={styles.counter} 
                enableScrollSpy 
                scrollSpyOnce 
              />
            </div>
            <p className={styles.counterLabel}>Projects Delivered</p>

            <h1>{service.title}</h1>
            <p className={styles.desc}>{service.desc}</p>
            
            <button className={styles.actionBtn} onClick={() => navigate('/Error')}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;