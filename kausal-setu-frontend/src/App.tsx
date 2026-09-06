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


function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/professional-signup' element={<ProfessionalSignupPage/>}/>
      <Route path='/instant-booking-overlay' element={<InstantBookingOverlay/>}/>
      <Route path='/instant-booking' element={<InstantBookingPage/>}/>
      <Route path='/user-signup' element={<UserSignupPage/>}/>
      <Route path='/book-inspection' element={<BookInspectionPage/>}/>
      <Route path='/worker-profile' element={<WorkerProfilePage/>}/>
      <Route path='/instant-booking-request' element={<InstantBookingRequestPage/>}/>
      <Route path='/inspection-request' element={<InspectionAndBookingRequestPage/>}/>
      <Route path='/user-profile' element={<UserProfilePage/>}/>
      <Route path='/instant-booking-status' element={<InstantBookingStatusPage/>}/>
      <Route path='/worker-wallet' element={<WorkerWalletPage/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboardPage/>}/>
    </Routes>
  )
}

export default App
