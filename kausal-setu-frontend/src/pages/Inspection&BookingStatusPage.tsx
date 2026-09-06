import './Inspection&BookingStatusPage.css'


export function InspectionAndBookingStatusPage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Inspection &amp; Booking</span>
    </div>
 
    <div className="top-row">
      <h1>Inspection &amp; Booking Status</h1>
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
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 09:54</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-magnifying-glass-dollar"></i></div>
          <div className="step-content">
            <strong>Inspection fee</strong>
            <div className="step-action-row">
              <button className="step-btn"><i className="fa-solid fa-indian-rupee-sign"></i> Pay ₹49</button>
              <span className="non-refundable">(non-refundable)</span>
            </div>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 29:54</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="step-content">
            <strong>Professional is on the way</strong>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-location-dot"></i></div>
          <div className="step-content">
            <strong>Arrived</strong>
            <span className="step-sub">Negotiation is in progress</span>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 14:24</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-handshake"></i></div>
          <div className="step-content">
            <div className="step-top-row">
              <strong>Negotiated amount</strong>
              <span className="amount-pill"><i className="fa-solid fa-indian-rupee-sign"></i>750</span>
            </div>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 08:32</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-wallet"></i></div>
          <div className="step-content">
            <strong>Complete your payment</strong>
            <div className="step-action-row">
              <button className="step-btn"><i className="fa-solid fa-indian-rupee-sign"></i> Pay ₹750</button>
            </div>
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
      <h2>No active inspection request</h2>
      <p>You don't have any ongoing inspection or booking right now. Request an inspection to get started.</p>
      <button className="empty-cta"><i className="fa-solid fa-magnifying-glass"></i> Book Inspection</button>
    </div>
 
  </div>
  );
}