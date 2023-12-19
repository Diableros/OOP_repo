import { User1, User2, UserInfo } from './types'

export const mockV1: User1 = {
  id: 1,
  username: 'john_doe',
  password: 's3cureP@ssw0rd',
  email: 'john_doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  birthdate: new Date(1990, 5, 15), // 15th June 1990
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    country: 'USA'
  },
  phoneNumber: '+1 123 456 7890',
  company: {
    name: 'TechCorp',
    industry: 'Technology',
    role: 'Software Engineer'
  },
  socialProfile: {
    facebook: 'john_doe',
    twitter: 'john_doe',
    linkedIn: 'john_doe',
    instagram: 'john_doe'
  },
  avatarUrl:
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f7/f74721bb64d3872ac89d5b6aad9c90477491a7dd_full.jpg',
  isVerified: true,
  lastLogin: new Date(2023, 9, 1), // 1st October 2023
  isActive: true
}

export const mockV2: User2 = {
  id: 1,
  personal: {
    name: 'John Doe',
    birthdate: new Date(1990, 5, 15), // 15th June 1990
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
      country: 'USA'
    },
    phone: '+1 123 456 7890',
    socialProfile: {
      facebook: 'john_doe',
      twitter: 'john_doe',
      linkedIn: 'john_doe',
      instagram: 'john_doe'
    }
  },
  performance: {
    username: 'john_doe',
    password: 's3cureP@ssw0rd',
    email: 'john_doe@example.com',
    isVerified: true,
    lastLogin: new Date(2023, 9, 1) // 1st October 2023
  }
}

export const userInfoMock: UserInfo = {
  isActive: true,
  avatarUrl:
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f7/f74721bb64d3872ac89d5b6aad9c90477491a7dd_full.jpg'
}
