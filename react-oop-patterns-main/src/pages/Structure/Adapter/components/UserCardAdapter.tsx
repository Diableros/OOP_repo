import { User2, UserInfo } from '../types.ts'
import UserCard from './UserCard.tsx'

const UserCardAdapter = ({
  performance,
  id,
  personal,
  avatarUrl,
  isActive
}: User2 & UserInfo) => {
  const [firstName, lastName] = personal.name.split(' ')

  return (
    <UserCard
      id={id}
      username={performance.username}
      password={performance.password}
      email={performance.email}
      firstName={firstName}
      lastName={lastName}
      birthdate={personal.birthdate}
      address={personal.address}
      phoneNumber={personal.phone}
      socialProfile={personal.socialProfile}
      isVerified={performance.isVerified}
      lastLogin={performance.lastLogin}
      avatarUrl={avatarUrl}
      isActive={isActive}
    />
  )
}

export default UserCardAdapter
