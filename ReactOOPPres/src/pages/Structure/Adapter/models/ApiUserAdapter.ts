import ApiUserV2 from './ApiUserV2.ts'
import { ApiUser, User1 } from '../types.ts'

export default class ApiUserAdapter implements ApiUser {
  constructor(private apiUserV2 = new ApiUserV2()) {}

  public async getUserData(): Promise<User1> {
    const [
      {
        id,
        personal: { name, birthdate, address, phone, socialProfile },
        performance: { username, password, email, isVerified, lastLogin }
      },
      { isActive, avatarUrl }
    ] = await Promise.all([
      this.apiUserV2.getUserData(),
      this.apiUserV2.getUserInfo()
    ])

    const [firstName, lastName] = name.split(' ')
    return await new Promise(resolve => {
      resolve({
        id,
        username,
        password,
        email,
        firstName,
        lastName,
        birthdate,
        address,
        phoneNumber: phone,
        socialProfile,
        isVerified,
        lastLogin,
        isActive,
        avatarUrl
      })
    })
  }
}
