import React from "react";
import Style from "./Contact.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for reaching out to Stackly. Our team will connect with you shortly!");
    // navigate("/success"); // Example navigation
    navigate("/Error");
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/Stackly+Salem",
      "_blank"
    );
  };

  const handleSocialMediaClick = () => {
    navigate("/Error");
  };

  const handlePhoneInput = (e) => {
    // Allow only numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    e.target.value = value;
  };

  return (
    <div data-aos="fade" className={Style.contactContainer}>
      <Header />
      <div className={Style.contactContent}>
        {/* Header Section */}
        <div className={Style.contactHeader}>
          <h1 className={Style.contactTitle}>Let's Build the Future</h1>
          <p className={Style.contactSubtitle}>
            Ready to transform your digital presence? Whether it's enterprise software, 
            cloud solutions, or UI/UX design, Stackly is here to deliver innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className={Style.contactMain}>
          {/* Contact Information */}
          <div className={Style.contactInfo}>
            <h2>Connect With Us</h2>
            <p className={Style.infoIntro}>
              Reach out to our experts for a consultation or visit one of our hubs across India.
            </p>

            <div className={Style.infoCards}>
              {/* HQ Card */}
              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-building-flag"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Headquarters</h3>
                  <p>
                    MMR Complex, Chinna Thirupathi,
                    <br />
                    Near Chinna Muniyappan Kovil,
                    <br />
                    Salem, Tamil Nadu - 636008
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Email Inquiries</h3>
                  <p>
                    <strong>
                      <a href="mailto:info@thestackly.com">info@thestackly.com</a>
                    </strong>
                    <br />
                    <span>Response time: Within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Branch Offices Section (Replaces Important Contacts) */}
            <div className={Style.branchSection}>
              <h3>Our Branch Offices</h3>
              <div className={Style.branchList}>
                
                {/* Bangalore */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Bengaluru</strong>
                    <address>
                      Evolve Studio, 4th Floor, Khata No 10, Begur - Koppa Rd,
                      Suraksha Nagar, Yelenahalli, Begur, Karnataka - 560068
                    </address>
                  </div>
                </div>

                {/* Hyderabad */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Hyderabad</strong>
                    <address>
                      STACKLY, 4th floor, Jayasudha heights, Plot no 459, 
                      100 feet road, Ayyappa society, Madhapur, Telangana - 500081
                    </address>
                  </div>
                </div>

                {/* Chennai */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Chennai</strong>
                    <address>
                      No.9, Ambika Complex, 1st Floor, Gokulam Colony, 
                      Karanaipudhuchery main road, Urapakkam, Tamil Nadu - 603202
                    </address>
                  </div>
                </div>

                 {/* Salem Phase II */}
                 <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Salem (Phase II)</strong>
                    <address>
                      17/5W, ST 1, Kallikadu Angappa Nagar, Omalur, Salem,
                      Tamil Nadu – 636455
                    </address>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media Links */}
            <div className={Style.socialMediaSection}>
              <h3>Follow Our Journey</h3>
              <div className={Style.socialMediaLinks}>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Section */}
          <div className={Style.contactInteractive}>
            {/* Contact Form */}
            <div className={Style.contactFormContainer}>
              <h2>Start a Project</h2>
              <form className={Style.contactForm} onSubmit={handleSubmit}>
                <div className={Style.formRow}>
                  <div className={Style.formGroup}>
                    <label htmlFor="firstName">First Name <span className={Style.required}>*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="lastName">Last Name <span className={Style.required}>*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className={Style.formRow}>
                  <div className={Style.formGroup}>
                    <label htmlFor="email">Email Address <span className={Style.required}>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="9876543210"
                      onInput={handlePhoneInput}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="service">Service Interested In <span className={Style.required}>*</span></label>
                  <select id="service" name="service" autoComplete="service" required>
                    <option value="">Select a service</option>
                    <option value="web-development">Web Application Development</option>
                    <option value="app-development">Mobile App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="message">Project Details <span className={Style.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div className={Style.formGroup}>
                  <label className={Style.checkboxLabel} htmlFor="terms">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms"
                      autoComplete="off"
                      required 
                    />
                    <span>I agree to the privacy policy and terms.</span>
                  </label>
                </div>

                <button type="submit" className={Style.submitButton}>
                  Send Message <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className={Style.mapContainer}>
              <div className={Style.mapHeader}>
                 <h2>Locate Us</h2>
                 <p>Visit our Headquarters</p>
              </div>
              <div className={Style.mapWrapper} onClick={handleMapClick}>
                <div className={Style.mapOverlay}>
                  <div className={Style.mapPlaceholder}>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>View on Google Maps</p>
                    <div className={Style.mapButton}>
                      Open Map
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.65!2d78.1!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM2JzAwLjAiTiA3OMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stackly Headquarters"
                  className={Style.mapIframe}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}