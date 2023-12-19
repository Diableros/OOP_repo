interface Address {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

interface Company {
  name: string
  industry: string
  role: string
}

interface SocialProfile {
  facebook?: string
  twitter?: string
  linkedIn?: string
  instagram?: string
}

export interface User1 {
  id: number
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
  birthdate: Date
  address: Address
  phoneNumber: string
  company?: Company
  socialProfile: SocialProfile
  avatarUrl?: string
  isVerified: boolean
  lastLogin: Date
  isActive: boolean
}

export interface User2 {
  id: number
  personal: {
    name: string
    middleName?: string
    birthdate: Date
    address: Address
    phone: string
    socialProfile: SocialProfile
  }
  performance: {
    username: string
    password: string
    email: string
    isVerified: boolean
    lastLogin: Date
  }
}

export interface UserInfo {
  isActive: boolean
  avatarUrl?: string
}

export interface ApiUser {
  getUserData(): Promise<User1>
}
