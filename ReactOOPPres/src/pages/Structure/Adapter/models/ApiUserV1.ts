import { ApiUser, User1 } from '../types.ts'
import { mockV1 } from '../mock.ts'

export default class ApiUserV1 implements ApiUser {
  public getUserData(): Promise<User1> {
    return new Promise<User1>(resolve => {
      setTimeout(() => resolve(mockV1), 500)
    })
  }
}
