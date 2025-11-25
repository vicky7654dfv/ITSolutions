import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FoundersGrid.module.css";

const founders = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "CEO & Co-Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in Cloud Architecture."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Tech evangelist specializing in AI and Machine Learning."
  },
  {
    id: 3,
    name: "James Carter",
    role: "COO",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
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