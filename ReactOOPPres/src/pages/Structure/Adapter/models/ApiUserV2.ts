import { mockV2, userInfoMock } from '../mock.ts'
import { User2, UserInfo } from '../types.ts'

export default class ApiUserV2 {
  public getUserData(): Promise<User2> {
    return new Promise<User2>(resolve => {
      setTimeout(() => resolve(mockV2), 500)
    })
  }
  public getUserInfo(): Promise<UserInfo> {
    return new Promise<UserInfo>(resolve => {
      setTimeout(() => resolve(userInfoMock), 500)
    })
  }
}
