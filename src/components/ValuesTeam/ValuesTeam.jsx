import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ValuesTeam.module.css";
import img1 from "../../assets/About/ValuesTeam/1.webp"
import img2 from "../../assets/About/ValuesTeam/2.webp"
import img3 from "../../assets/About/ValuesTeam/3.webp"
import img4 from "../../assets/About/ValuesTeam/4.webp"

export default function ValuesTeam() {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/Error");
  };

  const values = [
    { title: "Innovation First", desc: "We don't just follow trends; we set them.", icon: "fa-solid fa-lightbulb" },
    { title: "Radical Integrity", desc: "Transparency in every line of code we write.", icon: "fa-solid fa-scale-balanced" },
    { title: "Agile Adaptation", desc: "Speed and flexibility are our core currencies.", icon: "fa-solid fa-bolt" },
    { title: "Ironclad Security", desc: "Protecting data with military-grade protocols.", icon: "fa-solid fa-shield-halved" },
  ];

  const team = [
    { 
      name: "David Kim", 
      role: "Senior Backend Architect", 
      img: img1 
    },
    { 
      name: "Elena Rodriguez", 
      role: "Lead UI/UX Designer", 
      img: img2 
    },
    { 
      name: "Michael Chang", 
      role: "DevOps Lead", 
      img: img3 
    },
    { 
      name: "Priya Patel", 
      role: "Mobile Solutions Head", 
      img: img4 
    },
  ];

  return (
    <div className={styles.vtWrap} data-aos="fade">
      
      {/* --- Values Section --- */}
      <div className={styles.valuesContainer}>
        <div className={styles.valuesContent}>
          <h3 className={styles.heading}>Our Core <span className={styles.accent}>Philosophy</span></h3>
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
              <div className={styles.iconBox}>
                <i className={val.icon}></i>
              </div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.separator} />

      {/* --- Team Section --- */}
      <div className={styles.teamContainer}>
        <div className={styles.teamHeader}>
          <h3 className={styles.heading}>The <span className={styles.accent}>Tech Brains</span></h3>
          <p className={styles.teamSub}>
            Meet the architects, engineers, and visionaries turning complex problems into elegant solutions.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((dev, idx) => (
            <div key={idx} className={styles.devCard}>
              <div className={styles.imgWrapper}>
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