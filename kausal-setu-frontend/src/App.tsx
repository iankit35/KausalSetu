import { useState } from 'react'

import {Routes,Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import {LoginPage} from './pages/LoginPage'
import { ProfessionalSignupPage } from './pages/ProfessionalSignupPage'
import { InstantBookingOverlay } from './pages/InstantBookingOverlay'
import { InstantBookingPage } from './pages/InstantBookingPage'
import { UserSignupPage } from './pages/UserSignupPage'
import { BookInspectionPage } from './pages/BookInspectionPage'
import { WorkerProfilePage } from './pages/WorkerProfilePage'
import { InstantBookingRequestPage } from './pages/InstantBookingRequestPage'
import { InspectionAndBookingRequestPage } from './pages/Inspection&BookingRequestPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { InstantBookingStatusPage } from './pages/InstantBookingStatusPage'
import { WorkerWalletPage } from './pages/WorkerWalletPage'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
import { InspectionAndBookingStatusPage } from './pages/Inspection&BookingStatusPage'


function App() {
  const [userRole, setUserRole] = useState('guest');
  return (
    <Routes>
      <Route index element={<HomePage userRole={userRole}/>}/>
      <Route path='/login' element={<LoginPage setUserRole={setUserRole}/>}/>
      <Route path='/professional-signup' element={<ProfessionalSignupPage/>}/>
      <Route path='/instant-booking-overlay' element={<InstantBookingOverlay/>}/>
      <Route path='/instant-booking' element={<InstantBookingPage userRole={userRole}/>}/>
      <Route path='/user-signup' element={<UserSignupPage/>}/>
      <Route path='/book-inspection' element={<BookInspectionPage userRole={userRole}/>}/>
      <Route path='/worker-profile' element={<WorkerProfilePage userRole={userRole}/>}/>
      <Route path='/instant-booking-request' element={<InstantBookingRequestPage/>}/>
      <Route path='/inspection-request' element={<InspectionAndBookingRequestPage/>}/>
      <Route path='/user-profile' element={<UserProfilePage userRole={userRole}/>}/>
      <Route path='/instant-booking-status' element={<InstantBookingStatusPage/>}/>
      <Route path='/worker-wallet' element={<WorkerWalletPage/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboardPage/>}/>
      <Route path='/inspection-status' element={<InspectionAndBookingStatusPage/>}/>
    </Routes>
  )
}

export default App
