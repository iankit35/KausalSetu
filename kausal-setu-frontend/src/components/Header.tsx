// Header.tsx
import { NavLink } from 'react-router-dom'
import { Drawer } from './Drawer'
import { useState } from 'react'

type UserRole = 'guest' | 'user' | 'worker' | 'admin';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // TODO: replace with real auth state, e.g. const { role } = useAuth()
  const userRole: UserRole = 'admin';

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="brands">
          <span className="brands-mark">
            <i className="fa-solid fa-hands-helping"></i>
          </span>
          <span>
            Sahyog<span>Setu</span>
          </span>
        </NavLink>

        <div className="nav-location">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <small>Your location</small>
            <strong>Patna, Bihar</strong>
          </div>
          <i className="fa-solid fa-chevron-down chevron"></i>
        </div>

        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a service or professional" />
        </div>

        <nav className="nav-links">
          <NavLink to="/how-it-works">How it works</NavLink>
          <NavLink to="/become-pro">Become a professional</NavLink>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="profile-btn"
            aria-label="Account"
          >
            <i className={`fa-solid ${userRole === 'guest' ? 'fa-user' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </header>

      <Drawer role={userRole} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}