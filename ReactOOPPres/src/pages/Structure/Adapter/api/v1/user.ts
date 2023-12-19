import { useQuery } from '@tanstack/react-query'
import { User1 } from '../../types'
import { mockV1 } from '../../mock.ts'

const getUserData = () => {
  return new Promise<User1>(resolve => {
    setTimeout(() => resolve(mockV1), 500)
  })
}

export const useUserData = () => {
  return useQuery({ queryKey: ['user'], queryFn: getUserData })
}
