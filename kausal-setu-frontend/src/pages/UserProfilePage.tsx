import { useEffect, useState } from 'react'
import type { WorkerProfile } from '../types/profile'
import { Header } from '../components/Header'

const API_BASE = import.meta.env.VITE_API_BASE_URL

type UserProfilePageProps = {
  userRole:string
}
export function UserProfilePage({userRole}:UserProfilePageProps){
  const [profile, setProfile] = useState<WorkerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    fetch(`${API_BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data.profile))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading…</p>
  if (!profile) return <p>Could not load your profile.</p>

  return (
    <>
    <Header userRole={userRole}/>
    <div className="page-wrap">
    <div className="breadcrumb">
      <span>Dashboard</span>
      <i className="fa-solid fa-chevron-right"></i>
      <span>User Profile</span>
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
            <h1>{profile.name}</h1>
            <span className="verified-pill"><i className="fa-solid fa-check"></i> Verified</span>
          </div>
          <p className="role-line">Electrical Professional</p>
        </div>
      </div>
 
      <div className="detail-section">
        <span className="section-label">CONTACT DETAILS</span>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
            <div className="info-text">
              <small>Email</small>
              <strong>{profile.email}</strong>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
            <div className="info-text">
              <small>Phone</small>
              <strong>{profile.phone}</strong>
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
    </div>
  </div>
    </>
  );
}