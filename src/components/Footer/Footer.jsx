import React from "react";
import Style from "./Footer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useCategory } from "../CategoryContext/CategoryContext";
import logo from "../../assets/Header/logo.webp"; 

export default function Footer() {
  const { setActiveCategory } = useCategory();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    sessionStorage.setItem("scrollToTop", "true");
    setActiveCategory(category);
    navigate("/");
  };

  const handleQuickLinkClick = (e, path) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate(path);
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate("/Error");
  };

  return (
    <>
      <div className={Style.footerWrap}>
        {/* Box 1: Brand Info */}
        <div className={Style.box}>
          <div className={Style.logoContainer}>
            {/* Logo Image Replaces Icon + Text */}
            <img src={logo} alt="TheStackly Logo" className={Style.logoImg} />
          </div>
          <p>
            Empowering businesses with cutting-edge IT solutions. From 
            scalable development to advanced analytics, we engineer 
            digital transformation for the future of your enterprise.
          </p>
          <button 
            className={Style.aboutBtn}
            onClick={(e) => handleQuickLinkClick(e, "/About")}
          >
            Discover Our Story <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Box 2: Quick Links */}
        <div className={Style.box}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                href="#/About"
                onClick={(e) => handleQuickLinkClick(e, "/About")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#/Services"
                onClick={(e) => handleQuickLinkClick(e, "/Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#/Dashboard"
                onClick={(e) => handleQuickLinkClick(e, "/Dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#/SignUp"
                onClick={(e) => handleQuickLinkClick(e, "/SignUp")}
              >
                SignUp
              </a>
            </li>
          </ul>
        </div>

        {/* Box 3: Service Categories */}
        <div className={Style.box}>
          <h4>Service Categories</h4>
          <ul>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Development");
                }}
                className={Style.categoryLink}
              >
                Development
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Mobile");
                }}
                className={Style.categoryLink}
              >
                Mobile Solutions
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("Analytics");
                }}
                className={Style.categoryLink}
              >
                Data Analytics
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("IoT");
                }}
                className={Style.categoryLink}
              >
                IoT Integration
              </a>
            </li>
          </ul>
        </div>

        {/* Box 4: Headquarters */}
        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul className={Style.contactInfo}>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, 
                Salem, Tamil Nadu 636008
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 98765 43210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              info@thestackly.com
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              Mon - Fri: 09:00 AM - 07:00 PM
            </li>
          </ul>
        </div>

        {/* Box 5: Connect */}
        <div className={Style.box}>
          <h4>Connect With Us</h4>
          <p>
            Join our tech community. Follow us for industry insights, 
            updates on new stacks, and company news.
          </p>
          <div className={Style.media}>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#/Error"
              onClick={handleErrorLink}
              className={Style.socialLink}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter}>
        <hr />
        <p>
          © 2025 TheStackly Solutions. All rights reserved. 
          Innovating for a better digital tomorrow.
        </p>
      </div>
    </>
  );
}