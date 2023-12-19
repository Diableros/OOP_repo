import { useUserData, useUserInfo } from './api/v2/user.ts'
import UserCardAdapter from './components/UserCardAdapter.tsx'

const AdapterFC = () => {
  const { data: userData } = useUserData()
  const { data: userInfo } = useUserInfo()

  if (!userData || !userInfo) return 'загрузка...'


  const { id, personal, performance } = userData

  const { isActive, avatarUrl } = userInfo


  return (
      <UserCardAdapter
          id={id}
          personal={personal}
          performance={performance}
          isActive={isActive}
          avatarUrl={avatarUrl}
      />
  )
}

export default AdapterFC
