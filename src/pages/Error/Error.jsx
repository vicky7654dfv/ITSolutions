import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Log 404 occurrence to analytics
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        {/* Abstract Tech Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.techCircle1}></div>
          <div className={styles.techCircle2}></div>
          <div className={styles.gridLines}></div>
        </div>

        {/* Main Error Content */}
        <div className={styles.mainContent}>
          <div className={styles.errorNumber}>
            <span className={styles.number4}>4</span>
            <div className={styles.zeroContainer}>
              <div className={styles.orbitRing}>
                <div className={styles.dataBit}></div>
              </div>
              <span className={styles.number0}>0</span>
            </div>
            <span className={styles.number4}>4</span>
          </div>

          <h1 className={styles.title}>System Malfunction</h1>
          
          <p className={styles.description}>
            <span className={styles.codePrefix}>&gt; Error: </span> 
            The requested endpoint cannot be resolved. The resource you are looking for 
            may have been deprecated, moved to a new cluster, or simply vanished 
            into the digital ether.
          </p>

          <p className={styles.suggestion}>
            Please re-calibrate your navigation or return to the main dashboard 
            to execute a new query.
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton}
              onClick={handleGoHome}
            >
              <i className="fa-solid fa-house-signal"></i>
              Return Home
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleGoBack}
            >
              <i className="fa-solid fa-arrow-left-long"></i>
              Go Back
            </button>
          </div>
        </div>

        {/* Terminal Status Box */}
        <div className={styles.terminalBox}>
          <div className={styles.terminalHeader}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <span>system_status.log</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.statusItem}>
              <span className={styles.cmd}>&gt; code:</span>
              <span className={styles.valError}>404_NOT_FOUND</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.cmd}>&gt; path:</span>
              <span className={styles.valPath}>{window.location.pathname}</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.cmd}>&gt; time:</span>
              <span className={styles.valTime}>
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;