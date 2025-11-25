import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCareers.module.css";

export default function ProjectCareers() {
  const navigate = useNavigate();
  // State to trigger fade animation on numbers after component mount
  const [loadStats, setLoadStats] = useState(false);

  useEffect(() => {
    // Small delay to ensure fade effect is visible
    setTimeout(() => {
      setLoadStats(true);
    }, 200);
  }, []);

  const handleApply = () => {
    navigate("/Error");
  };

  const jobs = [
    { title: "Senior React Developer", type: "Full Time", loc: "Remote" },
    { title: "DevOps Engineer", type: "Contract", loc: "On-site" },
    { title: "UI/UX Designer", type: "Full Time", loc: "Hybrid" },
  ];

  return (
    <div className={styles.careerContainer}>
      {/* Project Counters */}
      <div className={styles.counterSection}>
        <div className={styles.counterItem}>
          <h2 className={`${styles.count} ${loadStats ? styles.visible : ''}`}>250+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className={styles.counterItem}>
          <h2 className={`${styles.count} ${loadStats ? styles.visible : ''}`}>50+</h2>
          <p>Awards Won</p>
        </div>
        <div className={styles.counterItem}>
          <h2 className={`${styles.count} ${loadStats ? styles.visible : ''}`}>100%</h2>
          <p>Client Satisfaction</p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Job Opportunities */}
      <div className={styles.jobSection}>
        <h3 className={styles.jobHeading}>Join TheStackly</h3>
        <p className={styles.jobSub}>Explore career opportunities to work with the best in IT.</p>
        
        <div className={styles.jobList}>
          {jobs.map((job, idx) => (
            <div key={idx} className={styles.jobCard}>
              <div className={styles.jobInfo}>
                <h4>{job.title}</h4>
                <span>{job.type} • {job.loc}</span>
              </div>
              <button onClick={handleApply} className={styles.applyBtn}>
                Apply Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}