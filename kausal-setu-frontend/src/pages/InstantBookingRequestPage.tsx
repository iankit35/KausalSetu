import './InstantBookingRequestPage.css'

export function InstantBookingRequestPage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Booking Requests</span>
    </div>
 
    <div className="top-row">
      <h1>Booking Request</h1>
      <span className="request-badge" id="requestBadge"><i className="fa-solid fa-bell"></i> 1 New Request</span>
    </div>
 
    
    <div className="request-card" id="requestCard">
      <div className="request-header">
        <h2>Om Prakash</h2>
        <span className="distance-chip"><i className="fa-solid fa-route"></i> 2.4 km away</span>
      </div>
 
      <div className="request-address">
        <i className="fa-solid fa-location-dot"></i>
        <span>New Market, House No. 117, Bareilly</span>
      </div>
 
      <div className="request-service">
        <span className="service-name"><i className="fa-solid fa-fan"></i> Fan Installation</span>
        <span className="service-price"><i className="fa-solid fa-indian-rupee-sign"></i>199</span>
      </div>
 
      <div className="request-actions">
        <button className="reject-btn" id="rejectBtn">Reject</button>
        <button className="accept-btn" id="acceptBtn">Accept</button>
      </div>
    </div>
 
    
    <div className="status-message reject-message" id="rejectMessage" hidden>
      <i className="fa-solid fa-circle-xmark"></i>
      <span>You rejected this request.</span>
    </div>
 
    
    <div className="tracking-card" id="trackingCard">
      <span className="section-label">JOB PROGRESS</span>
 
      <div className="timeline">
        <div className="timeline-step done" id="step1">
          <div className="step-marker"><i className="fa-solid fa-check"></i></div>
          <div className="step-content">
            <strong>You accepted the request</strong>
          </div>
        </div>
 
        <div className="timeline-step active" id="step2">
          <div className="step-marker"><i className="fa-solid fa-wallet"></i></div>
          <div className="step-content">
            <strong>Waiting for payment</strong>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> <span id="paymentTimer">09:54</span></span>
          </div>
        </div>
 
        <div className="timeline-step" id="step3">
          <div className="step-marker"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="step-content">
            <strong>Go to customer location</strong>
            <span className="step-timer"><i className="fa-regular fa-clock"></i> <span id="travelTimer">29:46</span></span>
            <br></br>
            <button className="step-btn" id="arrivedBtn" disabled>
              <i className="fa-solid fa-location-dot"></i>
              <span>Arrived <small>(click to pause the timer)</small></span>
            </button>
          </div>
        </div>
 
        <div className="timeline-step" id="step4">
          <div className="step-marker"><i className="fa-solid fa-flag-checkered"></i></div>
          <div className="step-content">
            <strong>Complete the job</strong>
            <button className="step-btn" id="completeBtn" disabled>
              <i className="fa-solid fa-check-double"></i>
              <span>Completed <small>(be eligible to withdraw money)</small></span>
            </button>
          </div>
        </div>
      </div>
 
      <div className="withdraw-message" id="withdrawMessage" hidden>
        <i className="fa-solid fa-circle-check"></i>
        <span>Job completed — you're now eligible to withdraw money.</span>
      </div>
    </div>
 
  </div>
  );
}