import React from 'react';
import Style from "./Banner1.module.css";
import { Link } from 'react-router-dom';
import bgVid from "../../assets/HomePage1/vid1.mp4"

export default function Banner1() {
  return (
    <div data-aos="fade" className={Style.bannerContainer}>
      <video src={bgVid}
        autoPlay
        muted
        loop
        playsInline
        className={Style.backgroundVideo}
      />
      <div className={Style.content}>
        <h1 className={Style.title}>TechSolutions Inc.</h1>
        <p className={Style.paragraph}>
          Innovating the future with cutting-edge technology solutions. 
          Committed to delivering excellence through innovative IT services 
          and client-focused digital transformation.
        </p>
        <Link to="/Services" className={Style.ctaButton}>Explore Services</Link>
      </div>
    </div>
  );
}