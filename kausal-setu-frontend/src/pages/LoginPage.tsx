import './LoginPage.css'
import {Link} from 'react-router-dom'


export function LoginPage(){
  return (
    <main className="login-page">
      <section className="brand-panel">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <i className="fa-solid fa-hands-helping"></i>
          </span>
          <span>Sahyog<span>Setu</span></span>
        </Link>

        <div className="brand-content">
          <span className="eyebrow">
            <i className="fa-solid fa-shield-halved"></i> Trusted local services
          </span>
          <h1>Skilled people.<br /><span>Real work.</span><br />One platform.</h1>
          <p>
            Connect with verified local professionals, book services, and manage
            your work from one place.
          </p>

          <div className="feature-list">
            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-circle-check"></i>
              </span>
              <div>
                <strong>Verified professionals</strong>
                <span>Find trusted service professionals near you.</span>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <strong>Local &amp; nearby</strong>
                <span>Discover professionals based on your location.</span>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-lock"></i>
              </span>
              <div>
                <strong>Secure payments</strong>
                <span>Pay online and keep your service journey simple.</span>
              </div>
            </div>
          </div>
        </div>

        <p className="panel-footer">© 2026 KaamSetu</p>
      </section>

      <section className="form-panel">
        <div className="form-container">
          <Link to="/" className="mobile-brand">
            <span className="brand-mark">
              <i className="fa-solid fa-hands-helping"></i>
            </span>
            <span>Sahyog<span>Setu</span></span>
          </Link>

          <div className="form-header">
            <span className="welcome">WELCOME BACK</span>
            <h2>Sign in to your account</h2>
            <p>Access your bookings, services and account.</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <i className="fa-regular fa-envelope"></i>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#">Forgot password?</a>
              </div>
              <div className="input-wrapper">
                <i className="fa-solid fa-lock"></i>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  aria-label="Show password"
                >
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit">
              Sign in <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <button type="button" className="google-btn">
            <span className="google-logo">G</span>
            <span>Continue with Google</span>
          </button>

          <div className="registration-links">
            <p>Don't have an account? <Link to="/user-signup">Register as a user</Link></p>
            <p>
              Want to offer your services?
              <Link to="/professional-signup">Register as a professional</Link>
            </p>
          </div>

          <p className="terms">
            By continuing, you agree to our <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}