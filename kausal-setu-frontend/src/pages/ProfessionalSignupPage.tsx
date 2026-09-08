import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProfessionalSignupPage.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL

const CATEGORY_OPTIONS = [
  { value: 'Electrical', icon: 'fa-bolt', label: 'Electrical' },
  { value: 'Plumbing', icon: 'fa-faucet', label: 'Plumbing' },
  { value: 'Carpentry', icon: 'fa-hammer', label: 'Carpentry' },
  { value: 'Painting', icon: 'fa-paint-roller', label: 'Painting' },
  { value: 'AC & Appliance Repair', icon: 'fa-snowflake', label: 'AC & Appliance' },
  { value: 'Cleaning', icon: 'fa-broom', label: 'Cleaning' },
  { value: 'Electronics', icon: 'fa-mobile-screen-button', label: 'Electronics' },
  { value: 'General Repair', icon: 'fa-screwdriver-wrench', label: 'General Repair' },
]

type LocationStatus = 'idle' | 'requesting' | 'granted' | 'denied'

export function ProfessionalSignupPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const [coords, setCoords] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  })
  const [locationStatus, setLocationStatus] = useState<LocationStatus>('idle')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleCategory = (value: string) => {
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )
  }

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('denied')
      return
    }
    setLocationStatus('requesting')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
        setLocationStatus('granted')
      },
      () => setLocationStatus('denied'),
      { timeout: 8000 }
    )
  }

  const locationTitle = {
    idle: 'Location permission required',
    requesting: 'Requesting location…',
    granted: 'Location added',
    denied: 'Location permission denied',
  }[locationStatus]

  const locationText = {
    idle: 'Allow location access to set your service area automatically.',
    requesting: 'Please respond to your browser\'s location permission prompt.',
    granted: 'Your current location will be used as your service area.',
    denied: 'Please enable location access in your browser settings to continue.',
  }[locationStatus]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (categories.length === 0) {
      setError('Select at least one service category')
      return
    }
    if (locationStatus !== 'granted' || coords.latitude === null || coords.longitude === null) {
      setError('Please allow location access to continue')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/api/auth/register/worker`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          serviceCategories: categories,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Signup failed. Please try again.')
        return
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('profile', JSON.stringify(data.profile))
      navigate('/worker-profile')
    } catch (err) {
      console.error('sign up failed',err)
      setError('Could not reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="signup-page">

      <section className="info-panel">
        <Link to="/" className="brand">
          <span className="brand-mark"><i className="fa-solid fa-hands-helping"></i></span>
          <span>Sahyog<span>Setu</span></span>
        </Link>

        <div className="info-content">
          <span className="eyebrow">
            <i className="fa-solid fa-user-plus"></i>
            Join the network
          </span>

          <h1>Turn your skills <br></br>into <span>opportunity.</span></h1>

          <p>
            Register as a service professional and connect with customers
            looking for skilled people in their local area.
          </p>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <strong>Create your profile</strong>
                <span>Add your details and the services you provide.</span>
              </div>
            </div>

            <div className="step">
              <span className="step-number">02</span>
              <div>
                <strong>Get discovered locally</strong>
                <span>Your location helps customers find professionals nearby.</span>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div>
                <strong>Accept &amp; complete work</strong>
                <span>Manage bookings and receive payments securely.</span>
              </div>
            </div>
          </div>

          <div className="location-note">
            <span className="location-icon">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <strong>Location is permission-based</strong>
              <span>We request your location through your device. No manual address entry.</span>
            </div>
          </div>
        </div>

        <p className="panel-footer">© 2026 KaamSetu</p>
      </section>

      <section className="form-panel">
        <div className="form-container">

          <Link to="/" className="mobile-brand">
            <span className="brand-mark"><i className="fa-solid fa-hands-helping"></i></span>
            <span>Sahyog<span>Setu</span></span>
          </Link>

          <div className="form-header">
            <span className="welcome">PROFESSIONAL REGISTRATION</span>
            <h2>Create your professional account</h2>
            <p>Tell us about yourself and the services you provide.</p>
          </div>

          <form id="signupForm" onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="input-group full">
                <label htmlFor="name">Full name</label>
                <div className="input-wrapper">
                  <i className="fa-regular fa-user"></i>
                  <input id="name" name="name" type="text"
                    placeholder="Enter your full name"
                    autoComplete="name" value={form.name} onChange={handleChange} required/>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email address</label>
                <div className="input-wrapper">
                  <i className="fa-regular fa-envelope"></i>
                  <input id="email" name="email" type="email"
                    placeholder="you@example.com"
                    autoComplete="email" value={form.email} onChange={handleChange} required/>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone number</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-phone"></i>
                  <input id="phone" name="phone" type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel" value={form.phone} onChange={handleChange} required/>
                </div>
              </div>

              <div className="input-group full">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-lock"></i>
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    autoComplete="new-password" value={form.password} onChange={handleChange} required/>
                  <button type="button" className="password-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((prev) => !prev)}>
                    <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="input-group full">
                <label>Service location</label>

                <div className="location-box" id="locationBox">
                  <div className="location-box-icon">
                    <i className="fa-solid fa-location-crosshairs"></i>
                  </div>

                  <div className="location-copy">
                    <strong id="locationTitle">{locationTitle}</strong>
                    <span id="locationText">{locationText}</span>
                  </div>

                  <button type="button" className="location-btn" id="locationBtn"
                    onClick={requestLocation}
                    disabled={locationStatus === 'requesting' || locationStatus === 'granted'}>
                    <i className={`fa-solid ${locationStatus === 'granted' ? 'fa-check' : 'fa-location-dot'}`}></i>
                    {locationStatus === 'granted' ? 'Location added' : 'Allow location'}
                  </button>
                </div>

                <input type="hidden" id="latitude" name="latitude" value={coords.latitude ?? ''} readOnly/>
                <input type="hidden" id="longitude" name="longitude" value={coords.longitude ?? ''} readOnly/>
              </div>

              <div className="input-group full">
                <div className="label-row">
                  <label>Service categories</label>
                  <span className="selection-count" id="selectionCount">{categories.length} selected</span>
                </div>

                <p className="field-help">
                  Select every service you are qualified to provide.
                </p>

                <div className="category-grid">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <label className="category-option" key={cat.value}>
                      <input
                        type="checkbox"
                        name="categories"
                        value={cat.value}
                        checked={categories.includes(cat.value)}
                        onChange={() => toggleCategory(cat.value)}
                      />
                      <span className="category-card">
                        <span className="category-icon"><i className={`fa-solid ${cat.icon}`}></i></span>
                        <span>{cat.label}</span>
                        <i className="fa-solid fa-check check-icon"></i>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            <div className="verification-note">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Your account may require verification before you can accept bookings.</span>
            </div>

            {error && <p style={{ color: '#c34a3f', fontSize: '12px', fontWeight: 600, margin: '10px 0 0' }}>{error}</p>}

            <button type="submit" className="create-account" disabled={loading}>
              {loading ? 'Creating account…' : <>Create professional account <i className="fa-solid fa-arrow-right"></i></>}
            </button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="terms">
            By creating an account, you agree to our
            <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy</a>.
          </p>

        </div>
      </section>
    </main>
  );
}