import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ValuesTeam.module.css";

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
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" 
    },
    { 
      name: "Elena Rodriguez", 
      role: "Lead UI/UX Designer", 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
    },
    { 
      name: "Michael Chang", 
      role: "DevOps Lead", 
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1887&auto=format&fit=crop" 
    },
    { 
      name: "Priya Patel", 
      role: "Mobile Solutions Head", 
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop" 
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