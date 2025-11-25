import React, { useState } from "react";
import styles from "./FAQ.module.css";
import Header from "../../components/Header/Header"; // Import Header component
import Footer from "../../components/Footer/Footer"; // Import Footer component

export default function FAQ() {
  // State to track the currently open question (categoryIndex-questionIndex)
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    // If the clicked key is already active, close it (set to null), otherwise open it
    setActiveKey(activeKey === key ? null : key);
  };

  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          id: 1,
          q: "What industries do you specialize in?",
          a: "While we provide IT solutions across the board, our core expertise lies in FinTech, Healthcare, E-commerce, and Manufacturing sectors. We build compliance-ready, secure, and scalable architectures tailored to these specific domains."
        },
        {
          id: 2,
          q: "Do you provide post-development support?",
          a: "Absolutely. We offer various Service Level Agreements (SLAs) ranging from standard business hour support to 24/7 mission-critical monitoring and maintenance to ensure your infrastructure never sleeps."
        },
        {
          id: 3,
          q: "How do you handle project confidentiality?",
          a: "We sign a strict Non-Disclosure Agreement (NDA) before the initial discovery phase. Your intellectual property, data, and business logic remain 100% confidential and secure with us."
        }
      ]
    },
    {
      category: "Technical & Development",
      questions: [
        {
          id: 4,
          q: "What technology stacks do you use?",
          a: "We are platform-agnostic but heavily favor modern stacks. For Web: React, Next.js, Node.js, Python/Django. For Mobile: React Native, Flutter. For Cloud: AWS, Azure, and Google Cloud Platform with Kubernetes orchestration."
        },
        {
          id: 5,
          q: "Can you migrate our legacy system to the cloud?",
          a: "Yes, 'Legacy Modernization' is one of our flagship services. We analyze your monolithic architecture and strategically refactor it into microservices, migrating data securely to the cloud with zero data loss."
        },
        {
          id: 6,
          q: "How do you ensure cybersecurity in your applications?",
          a: "Security is integrated into our CI/CD pipeline (DevSecOps). We perform regular penetration testing, static code analysis, and implement OWASP Top 10 protection standards, end-to-end encryption, and multi-factor authentication."
        }
      ]
    },
    {
      category: "Data Science & Analytics",
      questions: [
        {
          id: 7,
          q: "Can you build custom AI models for our business?",
          a: "Yes, we specialize in building custom Machine Learning models using TensorFlow and PyTorch. Whether it's predictive maintenance, customer churn prediction, or Natural Language Processing (NLP) chatbots, we tailor AI to your specific KPIs."
        },
        {
          id: 8,
          q: "How do you handle Big Data processing?",
          a: "We utilize scalable data pipelines using Apache Kafka, Spark, and cloud-native warehousing solutions like Snowflake or AWS Redshift. This ensures real-time processing and visualization of massive datasets without latency."
        }
      ]
    },
    {
      category: "Quality Assurance (QA)",
      questions: [
        {
          id: 9,
          q: "Do you provide automated testing services?",
          a: "Yes, we believe in 'Quality at Speed'. We implement automated testing suites using Selenium, Cypress, and Jest to ensure high test coverage. This allows us to deploy updates frequently without breaking existing functionality."
        },
        {
          id: 10,
          q: "What is your bug fixing policy post-launch?",
          a: "We offer a complimentary warranty period (typically 30-60 days) after deployment where any bugs related to the original scope are fixed at no extra cost. Beyond that, our support packages cover continuous improvements."
        }
      ]
    },
    {
      category: "Project Management",
      questions: [
        {
          id: 11,
          q: "What development methodology do you follow?",
          a: "We strictly follow the Agile Scrum methodology. This involves 2-week sprints, daily stand-ups, and bi-weekly demos, giving you complete visibility and the flexibility to adjust requirements as the market evolves."
        },
        {
          id: 12,
          q: "How is the project cost estimated?",
          a: "We offer two models: 'Time & Material' for evolving projects where scope is flexible, and 'Fixed Price' for projects with well-defined requirements. We provide a detailed breakdown of resources and hours before kickoff."
        }
      ]
    },
    {
      category: "Partnership & Collaboration",
      questions: [
        {
          id: 13,
          q: "Do you work with early-stage startups?",
          a: "We love startups! We have a specialized 'MVP Accelerator' program designed to help startups launch a viable product within 3-4 months, focusing on core features, scalability, and investor-ready architecture."
        },
        {
          id: 14,
          q: "Can we hire a dedicated team from you?",
          a: "Yes, our Staff Augmentation model allows you to hire a dedicated team of developers, designers, and PMs who work exclusively on your project. They integrate seamlessly with your internal processes and tools."
        }
      ]
    }
  ];

  return (
    <>
      <Header /> {/* Add Header component at the start */}
      <div className={styles.faqWrap} data-aos="fade">
        <div className={styles.container}>
          <div className={styles.header}>
            <h4 className={styles.subTitle}>Support Center</h4>
            <h1 className={styles.mainTitle}>Frequently Asked <span className={styles.accent}>Questions</span></h1>
            <p className={styles.description}>
              Navigating the complex world of IT solutions can be daunting. 
              Here are answers to common queries regarding our stack, security, AI capabilities, and partnership models.
            </p>
          </div>

          <div className={styles.faqContent}>
            {faqData.map((section, catIndex) => (
              <div key={catIndex} className={styles.categorySection}>
                <h3 className={styles.catTitle}>{section.category}</h3>
                <div className={styles.accordionGroup}>
                  {section.questions.map((item, qIndex) => {
                    const uniqueKey = `${catIndex}-${qIndex}`;
                    const isActive = activeKey === uniqueKey;

                    return (
                      <div 
                        key={item.id} 
                        className={`${styles.accordionItem} ${isActive ? styles.activeItem : ''}`}
                      >
                        <button 
                          className={styles.accordionHeader} 
                          onClick={() => toggleAccordion(uniqueKey)}
                          aria-expanded={isActive}
                        >
                          <span className={styles.questionText}>{item.q}</span>
                          <span className={styles.icon}>
                            <i className={`fa-solid ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>
                          </span>
                        </button>
                        
                        <div 
                          className={styles.accordionBody}
                          style={{ maxHeight: isActive ? "300px" : "0px" }}
                        >
                          <div className={styles.answerContent}>
                            <p>{item.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component at the end */}
    </>
  );
}