import './AdminDashboardPage.css'
import { Header } from '../components/Header'

export function AdminDashboardPage(){
  return (
    <>
    <Header/>
    <aside className="sidebar">
    <div className="brand">
      <span className="brand-mark"><i className="fa-solid fa-hands-helping"></i></span>
      <span>Sahyog<span>Setu</span></span>
    </div>
 
    <span className="sidebar-section-label">MAIN</span>
    <nav className="sidebar-nav">
      <a href="#" className="active"><i className="fa-solid fa-gauge"></i> Dashboard</a>
      <a href="#"><i className="fa-solid fa-users-gear"></i> Manage Workers</a>
      <a href="#"><i className="fa-solid fa-users"></i> Manage Users</a>
      <a href="#"><i className="fa-solid fa-clipboard-list"></i> All Bookings</a>
      <a href="#"><i className="fa-solid fa-triangle-exclamation"></i> Disputes &amp; Issues</a>
      <a href="#"><i className="fa-solid fa-sack-dollar"></i> Payouts</a>
    </nav>
 
    <div className="sidebar-bottom">
      <a href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
    </div>
  </aside>
 
 
  <main className="main">
 
    <div className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back, here's what's happening on the platform today.</p>
      </div>
 
      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notifications">
          <i className="fa-solid fa-bell"></i>
          <span className="dot"></span>
        </button>
        <div className="admin-chip">
          <div className="admin-avatar"><i className="fa-solid fa-user-shield"></i></div>
          <div>
            <strong>Admin</strong>
            <span>Platform Administrator</span>
          </div>
        </div>
      </div>
    </div>
 
    <div className="stat-grid">
      <div className="stat-card">
        <div className="stat-card-top">
          <div className="stat-icon workers"><i className="fa-solid fa-user-tie"></i></div>
          <span className="stat-trend"><i className="fa-solid fa-arrow-up"></i> 8.2%</span>
        </div>
        <div className="stat-value">1,284</div>
        <div className="stat-label">Total Workers</div>
      </div>
 
      <div className="stat-card">
        <div className="stat-card-top">
          <div className="stat-icon users"><i className="fa-solid fa-users"></i></div>
          <span className="stat-trend"><i className="fa-solid fa-arrow-up"></i> 12.4%</span>
        </div>
        <div className="stat-value">9,542</div>
        <div className="stat-label">Total Users</div>
      </div>
 
      <div className="stat-card">
        <div className="stat-card-top">
          <div className="stat-icon bookings"><i className="fa-solid fa-calendar-check"></i></div>
          <span className="stat-trend"><i className="fa-solid fa-arrow-up"></i> 5.6%</span>
        </div>
        <div className="stat-value">312</div>
        <div className="stat-label">Active Bookings</div>
      </div>
 
      <div className="stat-card">
        <div className="stat-card-top">
          <div className="stat-icon payouts"><i className="fa-solid fa-sack-dollar"></i></div>
          <span className="stat-trend"><i className="fa-solid fa-arrow-up"></i> 3.1%</span>
        </div>
        <div className="stat-value">₹8.4L</div>
        <div className="stat-label">Payouts This Month</div>
      </div>
 
      <div className="stat-card">
        <div className="stat-card-top">
          <div className="stat-icon disputes"><i className="fa-solid fa-triangle-exclamation"></i></div>
          <span className="stat-trend down"><i className="fa-solid fa-arrow-down"></i> 2.0%</span>
        </div>
        <div className="stat-value">17</div>
        <div className="stat-label">Open Disputes</div>
      </div>
    </div>

    <div className="content-grid">
      <div className="col-main">
        
        <div className="panel">
          <div className="panel-heading">
            <h3>Bookings Overview — Last 7 Days</h3>
            <a href="#">View report</a>
          </div>
          <div className="chart-bars">
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '55%' }}></div></div>
            <span>Mon</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '70%' }}></div></div>
            <span>Tue</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '45%' }}></div></div>
            <span>Wed</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '85%' }}></div></div>
            <span>Thu</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '62%' }}></div></div>
            <span>Fri</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '95%' }}></div></div>
            <span>Sat</span>
          </div>
          <div className="bar-col">
            <div className="bar-track"><div className="bar-fill" style={{ height: '78%' }}></div></div>
            <span>Sun</span>
          </div>
        </div>
        </div>
 
        
        <div className="panel">
          <div className="panel-heading">
            <h3>Recent Bookings</h3>
            <a href="#">View all</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Worker</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cust-cell">
                    <div className="cust-avatar">OP</div>
                    <div>
                      <strong>Om Prakash</strong>
                      <span>Bareilly</span>
                    </div>
                  </div>
                </td>
                <td>Fan Installation</td>
                <td>Rahul Kumar</td>
                <td>₹199</td>
                <td><span className="status-pill completed"><i className="fa-solid fa-circle"></i> Completed</span></td>
              </tr>
              <tr>
                <td>
                  <div className="cust-cell">
                    <div className="cust-avatar">AY</div>
                    <div>
                      <strong>Ankit Yadav</strong>
                      <span>Rohtak</span>
                    </div>
                  </div>
                </td>
                <td>Inspection Visit</td>
                <td>Amit Singh</td>
                <td>₹750</td>
                <td><span className="status-pill progress"><i className="fa-solid fa-circle"></i> In Progress</span></td>
              </tr>
              <tr>
                <td>
                  <div className="cust-cell">
                    <div className="cust-avatar">PS</div>
                    <div>
                      <strong>Priya Sharma</strong>
                      <span>Haridwar</span>
                    </div>
                  </div>
                </td>
                <td>Electrical Wiring</td>
                <td>Pawan Kumar</td>
                <td>₹450</td>
                <td><span className="status-pill disputed"><i className="fa-solid fa-circle"></i> Disputed</span></td>
              </tr>
              <tr>
                <td>
                  <div className="cust-cell">
                    <div className="cust-avatar">RV</div>
                    <div>
                      <strong>Rakesh Verma</strong>
                      <span>Patna</span>
                    </div>
                  </div>
                </td>
                <td>Plumbing Repair</td>
                <td>Amit Singh</td>
                <td>₹320</td>
                <td><span className="status-pill completed"><i className="fa-solid fa-circle"></i> Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
 
      <div className="col-side">
       
        <div className="panel">
          <div className="panel-heading">
            <h3>Open Disputes</h3>
            <a href="#">View all</a>
          </div>
 
          <div className="list-row">
            <div className="row-icon dispute"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <div className="row-main">
              <strong>Failed negotiation dispute</strong>
              <span>Priya Sharma vs. Pawan Kumar · 2 hours ago</span>
            </div>
          </div>
 
          <div className="list-row">
            <div className="row-icon dispute"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <div className="row-main">
              <strong>Refund request — worker no-show</strong>
              <span>Sunil Mehta vs. Rahul Kumar · 5 hours ago</span>
            </div>
          </div>
 
          <div className="list-row">
            <div className="row-icon dispute"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <div className="row-main">
              <strong>Quality of work complaint</strong>
              <span>Neha Gupta vs. Amit Singh · 1 day ago</span>
            </div>
          </div>
        </div>
 
        
        <div className="panel">
          <div className="panel-heading">
            <h3>Pending Payouts</h3>
            <a href="#">View all</a>
          </div>
 
          <div className="list-row">
            <div className="row-icon payout"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
            <div className="row-main">
              <strong>Rahul Kumar — ₹3,000</strong>
              <span>Requested 2 Sep 2026</span>
            </div>
          </div>
 
          <div className="list-row">
            <div className="row-icon payout"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
            <div className="row-main">
              <strong>Amit Singh — ₹1,850</strong>
              <span>Requested 1 Sep 2026</span>
            </div>
          </div>
 
          <div className="list-row">
            <div className="row-icon payout"><i className="fa-solid fa-arrow-down-to-bracket"></i></div>
            <div className="row-main">
              <strong>Pawan Kumar — ₹2,400</strong>
              <span>Requested 30 Aug 2026</span>
            </div>
          </div>
        </div>
      </div>
 
    </div>
 
  </main>
    </>
  );
}