import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ValuesTeam.module.css";

// Team Images
import img1 from "../../assets/About/ValuesTeam/1.webp";
import img2 from "../../assets/About/ValuesTeam/2.webp";
import img3 from "../../assets/About/ValuesTeam/3.webp";
import img4 from "../../assets/About/ValuesTeam/4.webp";

// Values Images
import innovationImg from "../../assets/About/Philosophy/1.webp";
import integrityImg from "../../assets/About/Philosophy/2.webp";
import agileImg from "../../assets/About/Philosophy/3.webp";
import securityImg from "../../assets/About/Philosophy/4.webp";

export default function ValuesTeam() {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/Error");
  };

  const values = [
    { 
      title: "Innovation First", 
      desc: "We don't just follow trends; we set them.", 
      image: innovationImg 
    },
    { 
      title: "Radical Integrity", 
      desc: "Transparency in every line of code we write.", 
      image: integrityImg 
    },
    { 
      title: "Agile Adaptation", 
      desc: "Speed and flexibility are our core currencies.", 
      image: agileImg 
    },
    { 
      title: "Ironclad Security", 
      desc: "Protecting data with military-grade protocols.", 
      image: securityImg 
    },
  ];

  const team = [
    { name: "David Kim", role: "Senior Backend Architect", img: img1 },
    { name: "Elena Rodriguez", role: "Lead UI/UX Designer", img: img2 },
    { name: "Michael Chang", role: "DevOps Lead", img: img3 },
    { name: "Priya Patel", role: "Mobile Solutions Head", img: img4 },
  ];

  return (
    <div className={styles.vtWrap} data-aos="fade">
      
      {/* Background Connecting Dots Grid (Applied only to top area visually) */}
      <div className={styles.dotsBackground}></div>

      {/* --- Values Section (Home Style) --- */}
      <div className={styles.valuesContainer}>
        
        {/* Connecting Line Visual */}
        <div className={styles.connectionLine}></div>

        <div className={styles.valuesContent}>
          <h3 className={styles.heading}>
            Our Core <span className={styles.accent}>Philosophy</span>
          </h3>
          <p className={styles.para}>
            At TheStackly, we believe that technology is only as powerful as the values that drive it. 
            Our culture is the operating system of our company—built on a kernel of trust, 
            compiled with creativity, and deployed with passion.
          </p>
          <p className={styles.para}>
            We don't just build software; we engineer experiences that stand the test of time 
            and scale with your ambition.
          </p>
          <button onClick={handleNav} className={styles.primaryBtn}>
            Explore Our Culture <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.valueImageWrapper}>
                <img 
                  src={val.image} 
                  alt={val.title} 
                  className={styles.valueImage} 
                />
              </div>
              <div className={styles.cardTextContent}>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.separatorContainer}>
        <div className={styles.separatorLine}></div>
        <div className={styles.separatorDot}></div>
      </div>

      {/* --- Team Section (Original Style) --- */}
      <div className={styles.teamContainer}>
        <div className={styles.teamHeader}>
          <h3 className={styles.heading}>
            The <span className={styles.accent}>Tech Brains</span>
          </h3>
          <p className={styles.teamSub}>
            Meet the architects, engineers, and visionaries turning complex problems into elegant solutions.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((dev, idx) => (
            <div key={idx} className={styles.devCard}>
              <div className={styles.teamImageWrapper}>
                <img src={dev.img} alt={dev.name} />
              </div>
              <div className={styles.devInfo}>
                <h4>{dev.name}</h4>
                <p className={styles.role}>{dev.role}</p>
                <div className={styles.socials}>
                  <button onClick={handleNav}><i className="fa-brands fa-linkedin"></i></button>
                  <button onClick={handleNav}><i className="fa-brands fa-github"></i></button>
                  <button onClick={handleNav}><i className="fa-brands fa-x-twitter"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.teamAction}>
           <button onClick={handleNav} className={styles.secondaryBtn}>
             View Full Team
           </button>
        </div>
      </div>

    </div>
  );
}