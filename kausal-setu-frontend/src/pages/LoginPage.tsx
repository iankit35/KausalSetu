import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './LoginPage.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL // e.g. http://localhost:4000

type Role = 'worker' | 'user' | 'admin'

interface LoginResponse {
  token: string
  profile: {
    id: string
    name: string
    email: string
    role: Role
  }
}

const ROLE_ROUTES: Record<Role, string> = {
  worker: '/worker-profile',
  user: '/user-profile',
  admin: '/admin-dashboard',
}

type LoginPageProps = {
  setUserRole: (value:string) => void
}
export function LoginPage({setUserRole}:LoginPageProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data: LoginResponse | { error: string } = await res.json()

      if (!res.ok || !('profile' in data)) {
        setError('error' in data ? data.error : 'Login failed. Please try again.')
        return
      }

      setUserRole(data.profile.role)
      localStorage.setItem('token', data.token)
      localStorage.setItem('profile', JSON.stringify(data.profile))
      navigate(ROLE_ROUTES[data.profile.role] || '/')

    } catch (err) {
      console.error('login failed',err)
      setError('Could not reach the server. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <section className="brand-panel">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <i className="fa-solid fa-hands-helping"></i>
          </span>
          <span>Sahyog<span>Setu</span></span>
        </Link>

        <div className="brand-content">
          <span className="eyebrow">
            <i className="fa-solid fa-shield-halved"></i> Trusted local services
          </span>
          <h1>Skilled people.<br /><span>Real work.</span><br />One platform.</h1>
          <p>
            Connect with verified local professionals, book services, and manage
            your work from one place.
          </p>

          <div className="feature-list">
            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-circle-check"></i>
              </span>
              <div>
                <strong>Verified professionals</strong>
                <span>Find trusted service professionals near you.</span>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <strong>Local &amp; nearby</strong>
                <span>Discover professionals based on your location.</span>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">
                <i className="fa-solid fa-lock"></i>
              </span>
              <div>
                <strong>Secure payments</strong>
                <span>Pay online and keep your service journey simple.</span>
              </div>
            </div>
          </div>
        </div>

        <p className="panel-footer">© 2026 SahyogSetu</p>
      </section>

      <section className="form-panel">
        <div className="form-container">
          <Link to="/" className="mobile-brand">
            <span className="brand-mark">
              <i className="fa-solid fa-hands-helping"></i>
            </span>
            <span>Sahyog<span>Setu</span></span>
          </Link>

          <div className="form-header">
            <span className="welcome">WELCOME BACK</span>
            <h2>Sign in to your account</h2>
            <p>Access your bookings, services and account.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <i className="fa-regular fa-envelope"></i>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#">Forgot password?</a>
              </div>
              <div className="input-wrapper">
                <i className="fa-solid fa-lock"></i>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? 'Signing in…' : <>Sign in <i className="fa-solid fa-arrow-right"></i></>}
            </button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <button type="button" className="google-btn">
            <span className="google-logo">G</span>
            <span>Continue with Google</span>
          </button>

          <div className="registration-links">
            <p>Don't have an account? <Link to="/user-signup">Register as a user</Link></p>
            <p>
              Want to offer your services?
              <Link to="/professional-signup">Register as a professional</Link>
            </p>
          </div>

          <p className="terms">
            By continuing, you agree to our <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}