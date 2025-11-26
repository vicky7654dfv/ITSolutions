import React, { useEffect } from 'react';
import styles from './PollSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pollData = [
  {
    id: 1,
    question: "Which technology will impact your business most in 2026?",
    totalVotes: 1240,
    options: [
      { label: "Artificial Intelligence (AI)", percentage: 65 },
      { label: "Cybersecurity Mesh", percentage: 25 },
      { label: "Cloud-Native Platforms", percentage: 10 },
    ]
  },
  {
    id: 2,
    question: "What is your primary IT challenge today?",
    totalVotes: 850,
    options: [
      { label: "Data Privacy & Compliance", percentage: 45 },
      { label: "Talent Shortage", percentage: 30 },
      { label: "Legacy System Integration", percentage: 25 },
    ]
  }
];

const PollSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className={styles.pollContainer} data-aos="fade-in">
      <div className={styles.header}>
        <h2>Community Insights</h2>
        <p>See what other industry leaders are saying.</p>
      </div>

      <div className={styles.pollGrid}>
        {pollData.map((poll) => (
          <div key={poll.id} className={styles.pollCard}>
            <h3>{poll.question}</h3>
            <p className={styles.voteCount}>{poll.totalVotes} votes cast</p>
            
            <div className={styles.resultsWrapper}>
              {poll.options.map((option, index) => (
                <div key={index} className={styles.resultRow}>
                  <div className={styles.labelGroup}>
                    <span>{option.label}</span>
                    <span className={styles.percentage}>{option.percentage}%</span>
                  </div>
                  <div className={styles.progressBarBg}>
                    <div 
                      className={styles.progressBarFill} 
                      style={{ width: `${option.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.statusTag}>Voted</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PollSection;