import './InstantBookingStatusPage.css'

export function InstantBookingStatusPage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Instant Booking</span>
    </div>
 
    <div className="top-row">
      <h1>Instant Booking Status</h1>
      <a href="#" className="history-link"><i className="fa-solid fa-clock-rotate-left"></i> Booking History</a>
    </div>
 
    
    <div className="tracking-card">
      <div className="timeline">
 
        <div className="timeline-step active">
          <div className="step-marker"><i className="fa-solid fa-paper-plane"></i></div>
          <div className="step-content">
            <strong>You sent the request</strong>
            <span className="step-sub">Waiting for a professional to accept</span>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 14:39</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-check"></i></div>
          <div className="step-content">
            <strong>Request accepted</strong>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-wallet"></i></div>
          <div className="step-content">
            <div className="step-top-row">
              <strong>Complete your payment</strong>
              <span className="step-timestamp">₹399</span>
            </div>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 09:54</span>
            <br></br>
            <button className="step-btn"><i className="fa-solid fa-indian-rupee-sign"></i> Pay ₹399</button>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="step-content">
            <strong>Professional is on the way</strong>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 29:36</span>
            <div className="refund-note">
              <i className="fa-solid fa-circle-info"></i>
              <span>If the professional does not arrive before the countdown ends, you can request a refund.</span>
            </div>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-location-dot"></i></div>
          <div className="step-content">
            <strong>Arrived</strong>
          </div>
        </div>
 
      </div>
 
      <div className="raise-issue">
        <i className="fa-solid fa-circle-question"></i>
        <span>Facing a problem? <a href="#">Raise an issue</a></span>
      </div>
    </div>
 
    
    <div className="empty-state">
      <div className="empty-icon"><i className="fa-solid fa-calendar-xmark"></i></div>
      <h2>No active bookings</h2>
      <p>You don't have any ongoing booking right now. Book a trusted professional to get started.</p>
      <button className="empty-cta"><i className="fa-solid fa-bolt"></i> Book a Service</button>
    </div>
 
  </div>
  );
}