import { useQuery } from '@tanstack/react-query'
import { User2, UserInfo } from '../../types'
import { mockV2, userInfoMock } from '../../mock.ts'

const getUserData = () => {
  return new Promise<User2>(resolve => {
    setTimeout(() => resolve(mockV2), 500)
  })
}

export const useUserData = () => {
  return useQuery({ queryKey: ['user'], queryFn: getUserData })
}

const getUserInfo = () => {
  return new Promise<UserInfo>(resolve => {
    setTimeout(() => resolve(userInfoMock), 500)
  })
}

export const useUserInfo = () => {
  return useQuery({ queryKey: ['user-info'], queryFn: getUserInfo })
}
