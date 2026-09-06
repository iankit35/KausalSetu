import './InstantBookingOverlay.css'
import { Link } from 'react-router-dom'

export function InstantBookingOverlay(){
  return (
    <div className="booking-overlay">
  <div className="booking-modal">
    <Link to="/">
    <button className="close-btn" aria-label="Close">
      <i className="fa-solid fa-xmark"></i>
    </button>
    </Link>
    

    <div className="modal-header">
      <span className="modal-icon">
        <i className="fa-solid fa-bolt"></i>
      </span>

      <div>
        <h2>Instant Booking</h2>
        <p>Select a service to find available professionals nearby.</p>
      </div>
    </div>

    <div className="service-section">
      <label>Select a service</label>

      <div className="service-grid">

      <Link to="/instant-booking">
          <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-bolt"></i>
          </span>
          <span>
            <strong>Electrical</strong>
            <small>Wiring, switches & repairs</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>
      </Link>
        <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-faucet-drip"></i>
          </span>
          <span>
            <strong>Plumbing</strong>
            <small>Leaks, taps & pipes</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>

        <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-hammer"></i>
          </span>
          <span>
            <strong>Carpentry</strong>
            <small>Furniture & woodwork</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>

        <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-snowflake"></i>
          </span>
          <span>
            <strong>AC & Appliance</strong>
            <small>Repair & maintenance</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>

        <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-paint-roller"></i>
          </span>
          <span>
            <strong>Painting</strong>
            <small>Walls & touch-up work</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>

        <button className="service-card">
          <span className="service-card-icon">
            <i className="fa-solid fa-broom"></i>
          </span>
          <span>
            <strong>Cleaning</strong>
            <small>Home & community cleaning</small>
          </span>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </button>

      </div>
    </div>

    <div className="modal-note">
      <i className="fa-solid fa-circle-info"></i>
      <span>Instant Booking is available for standard services with predictable pricing.</span>
    </div>

  </div>
</div>
  );
}