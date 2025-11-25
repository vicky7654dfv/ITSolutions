import React, { useState } from "react";
import Style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/Header/logo.webp"; // Ensure you have this image

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else if (name === "password") {
      setForm({ ...form, [name]: value });
      setRules(validatePassword(value));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!Object.values(rules).every(Boolean)) {
      alert("Password does not meet all security requirements");
      return;
    }
    alert(`Welcome to Stackly!\nAccount created for: ${form.name}`);
    navigate("/Error"); 
  };

  const handleGoogleLogin = () => {
    navigate("/Error");
  };

  const handleFacebookLogin = () => {
    navigate("/Error");
  };

  return (
    <div className={Style.mainWrapper}>
      <Header />
      <div className={Style.signUpWrap}>
        {/* Page Heading */}
        <div className={Style.pageHeading}>
          <h1>Join the Innovation Hub</h1>
          <p>Create your developer account to access premium IT solutions and cloud tools.</p>
        </div>

        <div className={Style.signUpContainer}>
          {/* Image/Branding Section */}
          <div className={Style.imageSection}>
            <div className={Style.imageContent}>
              <div className={Style.logoWrapper}>
                <img 
                  src={logo} 
                  alt="Stackly IT Solutions" 
                  className={Style.logoImage}
                />
              </div>
              <div className={Style.imageOverlay}>
                <h3>Build the Future</h3>
                <p>
                  Join thousands of developers and businesses transforming ideas into reality with Stackly.
                </p>
                <div className={Style.featureList}>
                  <span><i className="fa-solid fa-code"></i> Modern Tech Stack</span>
                  <span><i className="fa-solid fa-shield-halved"></i> Enterprise Security</span>
                  <span><i className="fa-solid fa-cloud"></i> Cloud Integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className={Style.formSection}>
            <form className={Style.signUpForm} onSubmit={handleSubmit}>
              <h2>Create Account</h2>
              
              <div className={Style.formGroup}>
                <label htmlFor="name">Full Name <span className={Style.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={Style.inputField}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.formGroup}>
                <label htmlFor="email">Work Email <span className={Style.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className={Style.inputField}
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.formGroup}>
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className={Style.inputField}
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className={Style.formGroup}>
                <label htmlFor="password">Password <span className={Style.required}>*</span></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  className={Style.inputField}
                  placeholder="Create strong password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Requirements */}
              {form.password && (
                <div className={Style.passwordRequirements}>
                  <p className={Style.reqTitle}>Security Check:</p>
                  <div className={Style.reqGrid}>
                    <span className={rules.length ? Style.valid : Style.invalid}>
                      {rules.length ? '✓' : '○'} 8+ Chars
                    </span>
                    <span className={rules.upper ? Style.valid : Style.invalid}>
                      {rules.upper ? '✓' : '○'} Uppercase
                    </span>
                    <span className={rules.lower ? Style.valid : Style.invalid}>
                      {rules.lower ? '✓' : '○'} Lowercase
                    </span>
                    <span className={rules.number ? Style.valid : Style.invalid}>
                      {rules.number ? '✓' : '○'} Number
                    </span>
                    <span className={rules.special ? Style.valid : Style.invalid}>
                      {rules.special ? '✓' : '○'} Symbol
                    </span>
                  </div>
                </div>
              )}

              <div className={Style.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password <span className={Style.required}>*</span></label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  className={Style.inputField}
                  placeholder="Repeat password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={Style.submitBtn}>
                Register Account <i className="fa-solid fa-arrow-right"></i>
              </button>

              {/* Social Login Section */}
              <div className={Style.socialLogin}>
                <div className={Style.divider}>
                  <span>Or continue with</span>
                </div>
                
                <div className={Style.socialButtons}>
                  <button 
                    type="button" 
                    className={Style.socialBtn}
                    onClick={handleGoogleLogin}
                    aria-label="Sign up with Google"
                  >
                    <svg className={Style.socialIcon} viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                  
                  <button 
                    type="button" 
                    className={Style.socialBtn}
                    onClick={handleFacebookLogin}
                    aria-label="Sign up with Facebook"
                  >
                    <svg className={Style.socialIcon} viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
              
              <div className={Style.loginLinkWrapper}>
                <p>Already a member?</p>
                <button
                  type="button"
                  className={Style.loginBtn}
                  onClick={() => navigate("/Login")}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}