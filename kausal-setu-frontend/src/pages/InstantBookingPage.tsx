import './InstantBookingPage.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export function InstantBookingPage(){
  return (
    <>
    <Header/>
    <main className="booking-page">
    <div className="page-container">

      <section className="page-header">

        <div className="breadcrumb">
          <span>Home</span>
          <i className="fa-solid fa-chevron-right"></i>
          <span>Instant Booking</span>
        </div>

        <div className="header-content">
          <div>
            <span className="page-label">
              <i className="fa-solid fa-bolt"></i>
              Instant Booking
            </span>

            <h1>Choose a professional</h1>

            <p>
              Available professionals for your selected service near your location.
            </p>
          </div>

          <div className="service-selected">
            <span className="service-icon">
              <i className="fa-solid fa-bolt"></i>
            </span>

            <div>
              <small>Selected service</small>
              <strong>Electrical</strong>
            </div>
          </div>
        </div>

      </section>


      <section className="booking-option">

        <label className="checkbox-wrapper">

          <input type="checkbox" checked/>

          <span className="custom-checkbox">
            <i className="fa-solid fa-check"></i>
          </span>

          <span className="option-content">
            <strong>Try another professional if this request is rejected</strong>

            <small>
              If the selected professional rejects your request, we'll automatically
              pass it to another available professional nearby.
            </small>
          </span>

        </label>

        <span className="recommended">
          Recommended
        </span>

      </section>


      <section className="results-header">

        <div>
          <h2>Available professionals</h2>
          <p>Showing professionals closest to your location.</p>
        </div>

        <button className="filter-btn">
          <i className="fa-solid fa-sliders"></i>
          Filter
        </button>

      </section>


      <section className="professionals-grid">

        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/rahul.jpg" alt=""/>
              <span className="online-dot"></span>
            </div>

            <div className="profile-info">
              <div className="name-row">
                <h3>Rahul Kumar</h3>
                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>

              <p>Electrical Service Professional</p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <strong>4.9</strong>
                <span>(126 reviews)</span>
              </div>
            </div>

          </div>


          <div className="card-details">

            <div className="detail">
              <i className="fa-solid fa-location-dot"></i>
              <span>1.2 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>340+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Wiring</span>
            <span>Switch Repair</span>
            <span>Installation</span>
          </div>


          <div className="card-bottom">

            <div className="price">
              <small>Starting from</small>
              <strong>₹199</strong>
            </div>

            <Link to="">
            <button className="confirm-btn">
              Confirm Booking
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            </Link>
          </div>

        </article>


        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/amit.jpg" alt=""/>
              <span className="online-dot"></span>
            </div>

            <div className="profile-info">
              <div className="name-row">
                <h3>Amit Kumar</h3>
                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>

              <p>Electrical Service Professional</p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <strong>4.8</strong>
                <span>(98 reviews)</span>
              </div>
            </div>

          </div>


          <div className="card-details">

            <div className="detail">
              <i className="fa-solid fa-location-dot"></i>
              <span>2.4 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>275+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Wiring</span>
            <span>Fan Repair</span>
            <span>Installation</span>
          </div>


          <div className="card-bottom">

            <div className="price">
              <small>Starting from</small>
              <strong>₹199</strong>
            </div>

            <button className="confirm-btn">
              Confirm Booking
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>


        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/suresh.jpg" alt=""/>
              <span className="online-dot"></span>
            </div>

            <div className="profile-info">
              <div className="name-row">
                <h3>Suresh Yadav</h3>
                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>

              <p>Electrical Service Professional</p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <strong>4.7</strong>
                <span>(84 reviews)</span>
              </div>
            </div>

          </div>


          <div className="card-details">

            <div className="detail">
              <i className="fa-solid fa-location-dot"></i>
              <span>3.1 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>210+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Wiring</span>
            <span>MCB Repair</span>
            <span>Maintenance</span>
          </div>


          <div className="card-bottom">

            <div className="price">
              <small>Starting from</small>
              <strong>₹249</strong>
            </div>

            <button className="confirm-btn">
              Confirm Booking
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>


       
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/vikash.jpg" alt=""/>
              <span className="online-dot"></span>
            </div>

            <div className="profile-info">
              <div className="name-row">
                <h3>Vikash Singh</h3>
                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>

              <p>Electrical Service Professional</p>

              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <strong>4.6</strong>
                <span>(71 reviews)</span>
              </div>
            </div>

          </div>


          <div className="card-details">

            <div className="detail">
              <i className="fa-solid fa-location-dot"></i>
              <span>4.3 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>180+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Lighting</span>
            <span>Switch Repair</span>
            <span>Maintenance</span>
          </div>


          <div className="card-bottom">

            <div className="price">
              <small>Starting from</small>
              <strong>₹199</strong>
            </div>

            <button className="confirm-btn">
              Confirm Booking
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>

      </section>

    </div>

  </main>
  <Footer/>
  </>
  );
}