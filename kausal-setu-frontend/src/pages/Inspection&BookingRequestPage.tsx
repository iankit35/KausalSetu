import './Inspection&BookingRequestPage.css'


export function InspectionAndBookingRequestPage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Inspection &amp; Booking Requests</span>
    </div>
 
    <div className="top-row">
      <h1>Inspection &amp; Booking Request</h1>
      <span className="request-badge"><i className="fa-solid fa-bell"></i> 1 New Request</span>
    </div>
 
    
    <div className="request-card">
      <div className="request-header">
        <h2>Om Prakash</h2>
        <span className="distance-chip"><i className="fa-solid fa-route"></i> 3.5 km away</span>
      </div>
 
      <div className="request-address">
        <i className="fa-solid fa-location-dot"></i>
        <span>Ekta Colony, House No. 23, Rohtak</span>
      </div>
 
      <div className="request-service">
        <span className="service-name"><i className="fa-solid fa-magnifying-glass"></i> Inspection Visit</span>
        <span className="service-price"><i className="fa-solid fa-indian-rupee-sign"></i>49</span>
      </div>
 
      <div className="request-actions">
        <button className="reject-btn">Reject</button>
        <button className="accept-btn">Accept</button>
      </div>
    </div>
 
    
    <div className="tracking-card">
      <span className="tracking-note"><i className="fa-solid fa-eye-slash"></i> Hidden until the worker accepts the request</span>
      <span className="section-label">JOB PROGRESS</span>
 
      <div className="timeline">
 
        <div className="timeline-step done">
          <div className="step-marker"><i className="fa-solid fa-check"></i></div>
          <div className="step-content">
            <strong>You accepted the inspection request</strong>
          </div>
        </div>
 
        <div className="timeline-step active">
          <div className="step-marker"><i className="fa-solid fa-wallet"></i></div>
          <div className="step-content">
            <strong>Waiting for customer to pay ₹49</strong>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 09:46</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-check"></i></div>
          <div className="step-content">
            <strong>Customer paid</strong>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="step-content">
            <strong>Go to customer location</strong>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> 29:41</span>
            <br></br>
            <button className="step-btn" disabled>
              <i className="fa-solid fa-location-dot"></i>
              <span>Arrived <small>(click to stop timer and proceed)</small></span>
            </button>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-file-invoice-dollar"></i></div>
          <div className="step-content">
            <strong>Enter negotiated amount</strong>
            <div className="amount-input">
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <input type="number" placeholder="0" disabled/>
            </div>
            <span className="amount-hint">Enter 0 for failed negotiation</span>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-check"></i></div>
          <div className="step-content">
            <strong>Waiting for customer to pay negotiated amount</strong>
          </div>
        </div>
 
        <div className="timeline-step">
          <div className="step-marker"><i className="fa-solid fa-flag-checkered"></i></div>
          <div className="step-content">
            <strong>Complete the job</strong>
            <button className="step-btn" disabled>
              <i className="fa-solid fa-check-double"></i>
              <span>Completed <small>(be eligible to withdraw money)</small></span>
            </button>
          </div>
        </div>
 
      </div>
    </div>
 
  </div>
  );
}