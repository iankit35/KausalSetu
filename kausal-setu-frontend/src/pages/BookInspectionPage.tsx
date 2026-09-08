import './BookInspectionPage.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

type BookInspectionPageProps = {
  userRole:string
}
export function BookInspectionPage({userRole}:BookInspectionPageProps){
  return (
    <>
    <Header userRole={userRole}/>
    <main className="inspection-page">

    <div className="page-container">

      <section className="page-header">

        <div className="breadcrumb">
          <span>Home</span>
          <i className="fa-solid fa-chevron-right"></i>
          <span>Book Inspection</span>
        </div>

        <div className="header-content">

          <div>
            <span className="page-label">
              <i className="fa-solid fa-magnifying-glass"></i>
              Professional Inspection
            </span>

            <h1>Book an inspection</h1>

            <p>
              Choose a professional to inspect your work and provide a quotation.
            </p>
          </div>

          <div className="inspection-fee">
            <span className="fee-icon">
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </span>

            <div>
              <small>Inspection & Visit Fee</small>
              <strong>₹49</strong>
            </div>
          </div>

        </div>

      </section>


      <section className="inspection-info">

        <div className="info-icon">
          <i className="fa-solid fa-clipboard-check"></i>
        </div>

        <div className="info-content">
          <strong>How inspection works</strong>

          <p>
            Select a professional and pay the ₹49 inspection fee. They will visit
            your location, assess the work, and provide a quotation before any
            major work begins.
          </p>
        </div>

      </section>


      <section className="search-section">

        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search by name or service..."
          />
        </div>

        <button className="filter-btn">
          <i className="fa-solid fa-sliders"></i>
          Filter
        </button>

      </section>


      <section className="results-header">

        <div>
          <h2>Available professionals</h2>
          <p>Professionals available for inspection near your location.</p>
        </div>

        <span className="result-count">16 professionals</span>

      </section>


      
      <section className="professionals-grid">
        <article className="professional-card">
          <div className="card-top">
            <div className="profile-image">
              <img src="workers/rahul.jpg" alt=""/>
              <span className="verified-dot">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            <div className="profile-info">
              <div className="name-row">
                <h3>Rahul Kumar</h3>
                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                  Verified
                </span>
              </div>

              <p>Electrical & General Repair Professional</p>

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
            <span>Electrical</span>
            <span>Wiring</span>
            <span>General Repair</span>
          </div>


          <div className="inspection-bottom">
            <div className="inspection-price">
              <small>Inspection fee</small>
              <strong>₹49</strong>
            </div>

            <button className="confirm-btn">
              Confirm Inspection
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>


        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/amit.jpg" alt=""/>
              <span className="verified-dot">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>

            <div className="profile-info">

              <div className="name-row">
                <h3>Amit Kumar</h3>

                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                  Verified
                </span>
              </div>

              <p>Plumbing & Maintenance Professional</p>

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
              <span>2.1 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>275+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Plumbing</span>
            <span>Pipe Repair</span>
            <span>Maintenance</span>
          </div>


          <div className="inspection-bottom">

            <div className="inspection-price">
              <small>Inspection fee</small>
              <strong>₹49</strong>
            </div>

            <button className="confirm-btn">
              Confirm Inspection
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>


        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/suresh.jpg" alt=""/>
              <span className="verified-dot">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>

            <div className="profile-info">

              <div className="name-row">
                <h3>Suresh Yadav</h3>

                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                  Verified
                </span>
              </div>

              <p>Carpentry & Furniture Professional</p>

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
              <span>2.8 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>210+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>Carpentry</span>
            <span>Furniture</span>
            <span>Woodwork</span>
          </div>


          <div className="inspection-bottom">

            <div className="inspection-price">
              <small>Inspection fee</small>
              <strong>₹49</strong>
            </div>

            <button className="confirm-btn">
              Confirm Inspection
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </article>


        
        <article className="professional-card">

          <div className="card-top">

            <div className="profile-image">
              <img src="workers/vikash.jpg" alt=""/>
              <span className="verified-dot">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>

            <div className="profile-info">

              <div className="name-row">
                <h3>Vikash Singh</h3>

                <span className="verified">
                  <i className="fa-solid fa-circle-check"></i>
                  Verified
                </span>
              </div>

              <p>AC & Appliance Repair Professional</p>

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
              <span>3.4 km away</span>
            </div>

            <div className="detail">
              <i className="fa-solid fa-briefcase"></i>
              <span>180+ services</span>
            </div>

          </div>


          <div className="skills">
            <span>AC Repair</span>
            <span>Appliances</span>
            <span>Maintenance</span>
          </div>


          <div className="inspection-bottom">

            <div className="inspection-price">
              <small>Inspection fee</small>
              <strong>₹49</strong>
            </div>

            <button className="confirm-btn">
              Confirm Inspection
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