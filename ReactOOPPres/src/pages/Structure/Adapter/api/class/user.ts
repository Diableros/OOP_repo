import { useQuery } from '@tanstack/react-query'

import ApiUserAdapter from '../../models/ApiUserAdapter.ts'

const apiAdapter = new ApiUserAdapter()
export const useUserData = () => {
  return useQuery({
    queryKey: ['user-class'],
    queryFn: () => apiAdapter.getUserData()
  })
}
