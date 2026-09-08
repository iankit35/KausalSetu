import './HomePage.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

type HomePageProps = {
  userRole:string
}
export function HomePage({userRole}:HomePageProps){
  return (
    <> 
    <Header userRole={userRole}/>
  <main>
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          <i className="fa-solid fa-shield-halved"></i>
          Trusted local service network
        </span>

        <h1 className="hero-title">Get skilled professionals<br></br><span>when you need them.</span></h1>

        <p className="hero-text">
          Book trusted local professionals for everyday work,
          or request an inspection when you are not sure what you need.
        </p>

        <div className="hero-actions">
          <Link to="/instant-booking-overlay" className="primary-action">
            <span className="action-icon"><i className="fa-solid fa-bolt"></i></span>
            <span>
              <strong>Instant Booking</strong>
              <small>For fixed &amp; standard services</small>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          <Link to="/book-inspection" className="secondary-action">
            <span className="action-icon"><i className="fa-solid fa-clipboard-check"></i></span>
            <span>
              <strong>Book Inspection</strong>
              <small>Get your work assessed for ₹49</small>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <i className="fa-solid fa-circle-check"></i>
            <span>Verified professionals</span>
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Professionals near you</span>
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span>Secure online payments</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-top">
            <span>Professionals near you</span>
            <span className="live-dot"><i className="fa-solid fa-circle"></i> Live</span>
          </div>

          <div className="mini-professional">
            <div className="mini-avatar avatar-one">RK</div>
            <div className="mini-info">
              <strong>Rahul Kumar</strong>
              <span><i className="fa-solid fa-bolt"></i> Electrical Professional</span>
            </div>
            <div className="mini-distance">1.2 km</div>
          </div>

          <div className="mini-professional">
            <div className="mini-avatar avatar-two">AS</div>
            <div className="mini-info">
              <strong>Amit Singh</strong>
              <span><i className="fa-solid fa-faucet"></i> Plumbing Professional</span>
            </div>
            <div className="mini-distance">2.4 km</div>
          </div>

          <div className="mini-professional">
            <div className="mini-avatar avatar-three">PK</div>
            <div className="mini-info">
              <strong>Pawan Kumar</strong>
              <span><i className="fa-solid fa-hammer"></i> Carpentry Professional</span>
            </div>
            <div className="mini-distance">3.1 km</div>
          </div>

          <div className="map-placeholder">
            <div className="map-grid"></div>
            <div className="map-pin pin-one"><i className="fa-solid fa-location-dot"></i></div>
            <div className="map-pin pin-two"><i className="fa-solid fa-location-dot"></i></div>
            <div className="map-pin pin-three"><i className="fa-solid fa-location-dot"></i></div>
            <div className="your-location"><span></span> Your location</div>
          </div>
        </div>

        <div className="floating-badge">
          <div className="badge-icon"><i className="fa-solid fa-star"></i></div>
          <div>
            <strong>4.8/5</strong>
            <span>Average rating</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <span>© 2026 KaamSetu</span>
    <span>Built for local communities &amp; worker cooperatives</span>
  </footer>
  <Footer/>
    </>
  );
}