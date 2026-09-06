import './WorkerProfilePage.css'

export function WorkerProfilePage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Worker Profile</span>
    </div>
 
    <div className="profile-card">
      <button className="edit-btn" aria-label="Edit profile" title="Edit profile">
        <i className="fa-solid fa-pen"></i>
      </button>
 
      <div className="profile-header">
        <div className="avatar-wrap">
          <div className="avatar"><i className="fa-solid fa-user"></i></div>
          <span className="avatar-status"></span>
        </div>
 
        <div className="profile-main">
          <div className="name-line">
            <h1>Rahul Kumar</h1>
            <span className="verified-pill"><i className="fa-solid fa-check"></i> Verified</span>
          </div>
          <p className="role-line">Electrical Professional</p>
 
          <div className="stat-row">
            <div className="stat"><i className="fa-solid fa-star"></i> <strong>4.8</strong>&nbsp;rating</div>
            <div className="stat"><i className="fa-solid fa-briefcase"></i> <strong>127</strong>&nbsp;jobs done</div>
            <div className="stat"><i className="fa-solid fa-calendar"></i> Joined&nbsp;<strong>2021</strong></div>
          </div>
        </div>
      </div>
 
      <div className="detail-section">
        <span className="section-label">CONTACT DETAILS</span>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
            <div className="info-text">
              <small>Email</small>
              <strong>rahul.kumar@email.com</strong>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
            <div className="info-text">
              <small>Phone</small>
              <strong>+91 98765 43210</strong>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
            <div className="info-text">
              <small>Address</small>
              <strong>Sector 14, Haridwar, Uttarakhand</strong>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-calendar-check"></i></div>
            <div className="info-text">
              <small>Year Joined</small>
              <strong>2021</strong>
            </div>
          </div>
        </div>
      </div>
 
      <div className="detail-section">
        <span className="section-label">SERVICE CATEGORIES</span>
        <div className="service-tags">
          <span className="service-tag"><i className="fa-solid fa-bolt"></i> Electrical Wiring</span>
          <span className="service-tag"><i className="fa-solid fa-plug"></i> Switchboard Repair</span>
          <span className="service-tag"><i className="fa-solid fa-lightbulb"></i> Lighting Installation</span>
          <span className="service-tag"><i className="fa-solid fa-fan"></i> Appliance Fitting</span>
        </div>
      </div>
    </div>
  </div>
  );
}