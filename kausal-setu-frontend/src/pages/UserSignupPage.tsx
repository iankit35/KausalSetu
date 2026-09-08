import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export function UserSignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    const getLocation = () =>
      new Promise<{ longitude?: number; latitude?: number }>((resolve) => {
        if (!navigator.geolocation) return resolve({})
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve({ longitude: pos.coords.longitude, latitude: pos.coords.latitude }),
          () => resolve({}),
          { timeout: 4000 }
        )
      })

    try {
      const { longitude, latitude } = await getLocation()

      const res = await fetch(`${API_BASE}/api/auth/register/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, longitude, latitude }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Signup failed. Please try again.')
        return
      }

      setSuccess('Account created successfully! Redirecting to login...')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      console.error('sign up failed', err)
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
                  <input id="password" name="password" type="password"
                    placeholder="Create a strong password"
                    autoComplete="new-password" value={form.password} onChange={handleChange} required/>
                </div>
              </div>
            </div>

            {error && <p style={{ color: '#c34a3f', fontSize: '12px', fontWeight: 600, marginTop: '4px' }}>{error}</p>}
            {success && <p style={{ color: '#2f9e44', fontSize: '12px', fontWeight: 600, marginTop: '4px' }}>{success}</p>}

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