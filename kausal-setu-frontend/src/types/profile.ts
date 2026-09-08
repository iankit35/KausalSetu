
// types/profile.ts
export type UserRole = 'worker' | 'user' | 'admin'

export interface BaseProfile {
  _id: string
  name: string
  email: string
  phone: string
  role: UserRole
}

export interface WorkerProfile extends BaseProfile {
  role: 'worker'
  address?: string
  serviceCategories: string[]
  rating: number
  jobsCompleted: number
  yearJoined: number
  walletBalance: number
  verified: boolean
  location: {
    type: 'Point'
    coordinates: [number, number]
  }
}

export interface UserProfile extends BaseProfile {
  role: 'user'
  address?: string
  location?: {
    type: 'Point'
    coordinates: [number, number]
  }
}

export interface AdminProfile extends BaseProfile {
  role: 'admin'
}

export type Profile = WorkerProfile | UserProfile | AdminProfile