// Drawer.tsx
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Drawer.css'

type UserRole = 'worker' | 'user' | 'admin' | 'guest';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  role: UserRole;
  name?: string;
}

interface NavItem {
  to: string;
  icon: string;
  label: string;
}

const NAV_ITEMS: Record<Exclude<UserRole, 'guest'>, NavItem[]> = {
  worker: [
    { to: '/worker-profile', icon: 'fa-user', label: 'Profile' },
    { to: '/worker-wallet', icon: 'fa-wallet', label: 'Wallet & Earnings' },
    { to: '/instant-booking-request', icon: 'fa-calendar-check', label: 'Booking Requests' },
    { to: '/inspection-request', icon: 'fa-magnifying-glass', label: 'Inspection Requests' },
  ],
  user: [
    { to: '/user-profile', icon: 'fa-user', label: 'Profile' },
    { to: '/instant-booking-status', icon: 'fa-calendar-check', label: 'Instant Booking Status' },
    { to: '/inspection-status', icon: 'fa-magnifying-glass', label: 'Inspection & Booking Status' },
  ],
  admin: [
    { to: '/admin-dashboard', icon: 'fa-gauge', label: 'Dashboard' },
    { to: '/admin-workers', icon: 'fa-users-gear', label: 'Manage Workers' },
    { to: '/admin-users', icon: 'fa-users', label: 'Manage Users' },
    { to: '/admin-bookings', icon: 'fa-clipboard-list', label: 'All Bookings' },
    { to: '/admin-disputes', icon: 'fa-triangle-exclamation', label: 'Disputes & Issues' },
    { to: '/admin-payouts', icon: 'fa-sack-dollar', label: 'Payouts' },
  ],
};

// Links a guest can still browse without logging in
const GUEST_BROWSE_LINKS: NavItem[] = [
  { to: '/how-it-works', icon: 'fa-circle-info', label: 'How it works' },
  { to: '/become-pro', icon: 'fa-user-plus', label: 'Become a professional' },
];

const ROLE_TITLES: Record<Exclude<UserRole, 'guest'>, string> = {
  worker: 'Service Professional',
  user: 'Customer',
  admin: 'Administrator',
};

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, role, name = 'Rahul Kumar' }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const isGuest = role === 'guest';

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />

      <aside className={`menu-drawer ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
        <button type="button" className="drawer-close" onClick={onClose} aria-label="Close menu">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {isGuest ? (
          <>
            <div className="drawer-guest">
              <div className="profile-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <h3>Welcome</h3>
              <p>Log in to book trusted professionals near you.</p>
            </div>

            <div className="drawer-guest-actions">
              <Link to="/login" className="guest-login-btn" onClick={onClose}>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Log In</span>
              </Link>
              <Link to="/signup" className="guest-signup-btn" onClick={onClose}>
                <span>Create an Account</span>
              </Link>
            </div>

            <nav className="drawer-menu drawer-menu-guest">
              {GUEST_BROWSE_LINKS.map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </>
        ) : (
          <>
            <div className="drawer-profile">
              <div className="profile-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <h3>{name}</h3>
                <p>{ROLE_TITLES[role]}</p>
              </div>
            </div>

            <nav className="drawer-menu">
              {NAV_ITEMS[role].map((item) => (
                <Link key={item.to} to={item.to} onClick={onClose}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="logout"
              onClick={() => {
                onClose();
                // Handle actual logout logic here
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </>
        )}
      </aside>
    </>
  );
};