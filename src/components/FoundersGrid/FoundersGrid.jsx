import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FoundersGrid.module.css";
import img1 from "../../assets/About/FoundersGrid/1.webp"
import img2 from "../../assets/About/FoundersGrid/2.webp"
import img3 from "../../assets/About/FoundersGrid/3.webp"

const founders = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "CEO & Co-Founder",
    img: img1,
    bio: "Visionary leader with 15+ years in Cloud Architecture."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    img: img2,
    bio: "Tech evangelist specializing in AI and Machine Learning."
  },
  {
    id: 3,
    name: "James Carter",
    role: "COO",
    img: img3,
    bio: "Operations expert ensuring seamless global delivery."
  }
];

export default function FoundersGrid() {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/Error");
  };

  return (
    <div className={styles.foundersWrap} data-aos="fade">
      <div className={styles.header}>
        <h2>Meet The <span className={styles.accent}>Leadership</span></h2>
        <div className={styles.line}></div>
      </div>
      
      <div className={styles.grid}>
        {founders.map((person) => (
          <div key={person.id} className={styles.card}>
            <img src={person.img} alt={person.name} className={styles.photo} />
            <div className={styles.infoOverlay}>
              <h3>{person.name}</h3>
              <span className={styles.role}>{person.role}</span>
              <p className={styles.bio}>{person.bio}</p>
              <button onClick={handleLink} className={styles.profileBtn}>
                View Profile <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}