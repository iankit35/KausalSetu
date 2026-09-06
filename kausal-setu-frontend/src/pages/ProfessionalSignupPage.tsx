import './ProfessionalSignupPage.css'
import { Link } from 'react-router-dom'

export function ProfessionalSignupPage(){
  return (
    <main className="signup-page">

    <section className="info-panel">
      <Link to="/" className="brand">
        <span className="brand-mark"><i className="fa-solid fa-hands-helping"></i></span>
        <span>Sahyog<span>Setu</span></span>
      </Link>

      <div className="info-content">
        <span className="eyebrow">
          <i className="fa-solid fa-user-plus"></i>
          Join the network
        </span>

        <h1>Turn your skills <br></br>into <span>opportunity.</span></h1>

        <p>
          Register as a service professional and connect with customers
          looking for skilled people in their local area.
        </p>

        <div className="steps">
          <div className="step">
            <span className="step-number">01</span>
            <div>
              <strong>Create your profile</strong>
              <span>Add your details and the services you provide.</span>
            </div>
          </div>

          <div className="step">
            <span className="step-number">02</span>
            <div>
              <strong>Get discovered locally</strong>
              <span>Your location helps customers find professionals nearby.</span>
            </div>
          </div>

          <div className="step">
            <span className="step-number">03</span>
            <div>
              <strong>Accept &amp; complete work</strong>
              <span>Manage bookings and receive payments securely.</span>
            </div>
          </div>
        </div>

        <div className="location-note">
          <span className="location-icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <div>
            <strong>Location is permission-based</strong>
            <span>We request your location through your device. No manual address entry.</span>
          </div>
        </div>
      </div>

      <p className="panel-footer">© 2026 KaamSetu</p>
    </section>

    <section className="form-panel">
      <div className="form-container">

        <Link to="/" className="mobile-brand">
          <span className="brand-mark"><i className="fa-solid fa-hands-helping"></i></span>
          <span>Sahyog<span>Setu</span></span>
        </Link>

        <div className="form-header">
          <span className="welcome">PROFESSIONAL REGISTRATION</span>
          <h2>Create your professional account</h2>
          <p>Tell us about yourself and the services you provide.</p>
        </div>

        <form id="signupForm">

          <div className="form-grid">

            <div className="input-group full">
              <label htmlFor="name">Full name</label>
              <div className="input-wrapper">
                <i className="fa-regular fa-user"></i>
                <input id="name" name="name" type="text"
                  placeholder="Enter your full name"
                  autoComplete="name" required/>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <i className="fa-regular fa-envelope"></i>
                <input id="email" name="email" type="email"
                  placeholder="you@example.com"
                  autoComplete="email" required/>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone number</label>
              <div className="input-wrapper">
                <i className="fa-solid fa-phone"></i>
                <input id="phone" name="phone" type="tel"
                  placeholder="+91 98765 43210"
                  autoComplete="tel" required/>
              </div>
            </div>

            <div className="input-group full">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <i className="fa-solid fa-lock"></i>
                <input id="password" name="password" type="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password" required/>
                <button type="button" className="password-toggle"
                  aria-label="Show password">
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>

            <div className="input-group full">
              <label>Service location</label>

              <div className="location-box" id="locationBox">
                <div className="location-box-icon">
                  <i className="fa-solid fa-location-crosshairs"></i>
                </div>

                <div className="location-copy">
                  <strong id="locationTitle">Location permission required</strong>
                  <span id="locationText">
                    Allow location access to set your service area automatically.
                  </span>
                </div>

                <button type="button" className="location-btn" id="locationBtn">
                  <i className="fa-solid fa-location-dot"></i>
                  Allow location
                </button>
              </div>

              <input type="hidden" id="latitude" name="latitude"/>
              <input type="hidden" id="longitude" name="longitude"/>
            </div>

            <div className="input-group full">
              <div className="label-row">
                <label>Service categories</label>
                <span className="selection-count" id="selectionCount">0 selected</span>
              </div>

              <p className="field-help">
                Select every service you are qualified to provide.
              </p>

              <div className="category-grid">

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Electrical"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-bolt"></i></span>
                    <span>Electrical</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Plumbing"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-faucet"></i></span>
                    <span>Plumbing</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Carpentry"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-hammer"></i></span>
                    <span>Carpentry</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Painting"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-paint-roller"></i></span>
                    <span>Painting</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="AC & Appliance Repair"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-snowflake"></i></span>
                    <span>AC &amp; Appliance</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Cleaning"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-broom"></i></span>
                    <span>Cleaning</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="Electronics"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-mobile-screen-button"></i></span>
                    <span>Electronics</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

                <label className="category-option">
                  <input type="checkbox" name="categories" value="General Repair"/>
                  <span className="category-card">
                    <span className="category-icon"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                    <span>General Repair</span>
                    <i className="fa-solid fa-check check-icon"></i>
                  </span>
                </label>

              </div>
            </div>

          </div>

          <div className="verification-note">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Your account may require verification before you can accept bookings.</span>
          </div>

          <button type="submit" className="create-account">
            Create professional account
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="#">Sign in</a>
        </p>

        <p className="terms">
          By creating an account, you agree to our
          <a href="#">Terms of Service</a> and
          <a href="#">Privacy Policy</a>.
        </p>

      </div>
    </section>
  </main>
  );
}