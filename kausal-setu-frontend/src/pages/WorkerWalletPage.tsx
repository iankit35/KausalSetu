import './WorkerWalletPage.css'



export function WorkerWalletPage(){
  return (
    <div className="page-wrap">
 
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>Wallet</span>
    </div>
 
    <h1>My Wallet</h1>
 
    
    <div className="balance-card">
      <div className="balance-top">
        <span className="balance-label"><i className="fa-solid fa-wallet"></i> Available Balance</span>
        <span className="bank-chip"><i className="fa-solid fa-building-columns"></i> HDFC •••• 4821</span>
      </div>
 
      <div className="balance-amount"><i className="fa-solid fa-indian-rupee-sign"></i>4,250</div>
 
      <div className="balance-actions">
        <button className="withdraw-btn"><i className="fa-solid fa-arrow-down-to-bracket"></i> Withdraw Money</button>
        <span className="balance-note">Usually credited within 24 hours</span>
      </div>
    </div>
 
    
    <div className="stat-row">
      <div className="stat-card">
        <div className="stat-icon earnings"><i className="fa-solid fa-sack-dollar"></i></div>
        <div className="stat-text">
          <small>Lifetime Earnings</small>
          <strong>₹86,400</strong>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon jobs"><i className="fa-solid fa-briefcase"></i></div>
        <div className="stat-text">
          <small>Total Work Completed</small>
          <strong>142 jobs</strong>
        </div>
      </div>
    </div>
 
    
    <div className="section-card">
      <div className="section-heading">
        <h3>Withdrawal History</h3>
        <a href="#">View all</a>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
        <div className="row-main">
          <strong>Withdrawal to HDFC •••• 4821</strong>
          <span>2 Sep 2026, 6:42 PM</span>
        </div>
        <div className="row-end">
          <span className="row-amount debit">− ₹3,000</span>
          <span className="status-pill completed"><i className="fa-solid fa-circle"></i> Completed</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
        <div className="row-main">
          <strong>Withdrawal to HDFC •••• 4821</strong>
          <span>28 Aug 2026, 11:05 AM</span>
        </div>
        <div className="row-end">
          <span className="row-amount debit">− ₹1,500</span>
          <span className="status-pill processing"><i className="fa-solid fa-circle"></i> Processing</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
        <div className="row-main">
          <strong>Withdrawal to HDFC •••• 4821</strong>
          <span>19 Aug 2026, 4:20 PM</span>
        </div>
        <div className="row-end">
          <span className="row-amount debit">− ₹2,200</span>
          <span className="status-pill completed"><i className="fa-solid fa-circle"></i> Completed</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
        <div className="row-main">
          <strong>Withdrawal to HDFC •••• 4821</strong>
          <span>10 Aug 2026, 9:12 AM</span>
        </div>
        <div className="row-end">
          <span className="row-amount debit">− ₹900</span>
          <span className="status-pill failed"><i className="fa-solid fa-circle"></i> Failed</span>
        </div>
      </div>
    </div>
 
    
    <div className="section-card">
      <div className="section-heading">
        <h3>Completed Work History</h3>
        <a href="#">View all</a>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-fan"></i></div>
        <div className="row-main">
          <strong>Fan Installation</strong>
          <span>Om Prakash · 2 Sep 2026</span>
        </div>
        <div className="row-end">
          <span className="row-amount credit">+ ₹199</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
        <div className="row-main">
          <strong>Inspection Visit</strong>
          <span>Ankit Yadav · 30 Aug 2026</span>
        </div>
        <div className="row-end">
          <span className="row-amount credit">+ ₹750</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-bolt"></i></div>
        <div className="row-main">
          <strong>Electrical Wiring</strong>
          <span>Priya Sharma · 27 Aug 2026</span>
        </div>
        <div className="row-end">
          <span className="row-amount credit">+ ₹450</span>
        </div>
      </div>
 
      <div className="list-row">
        <div className="row-icon"><i className="fa-solid fa-faucet"></i></div>
        <div className="row-main">
          <strong>Plumbing Repair</strong>
          <span>Rakesh Verma · 19 Aug 2026</span>
        </div>
        <div className="row-end">
          <span className="row-amount credit">+ ₹320</span>
        </div>
      </div>
    </div>
 
    
    <div className="raise-issue">
      <i className="fa-solid fa-circle-question"></i>
      <span>Facing a problem? <a href="#">Raise an issue</a></span>
    </div>
 
  </div>
  );
}