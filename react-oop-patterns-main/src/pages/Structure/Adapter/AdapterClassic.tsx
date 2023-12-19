import { useUserData } from './api/class/user.ts'
import UserCard from './components/UserCard.tsx'

const AdapterClassic = () => {
  const { data } = useUserData()

  if (!data) return 'загрузка...'

  const {
    id,
    username,
    password,
    email,
    firstName,
    lastName,
    birthdate,
    address,
    phoneNumber,
    socialProfile,
    isVerified,
    lastLogin,
    isActive,
    avatarUrl
  } = data

  return (
    <UserCard
      id={id}
      username={username}
      password={password}
      email={email}
      firstName={firstName}
      lastName={lastName}
      birthdate={birthdate}
      address={address}
      phoneNumber={phoneNumber}
      socialProfile={socialProfile}
      isVerified={isVerified}
      lastLogin={lastLogin}
      avatarUrl={avatarUrl}
      isActive={isActive}
    />
  )
}

export default AdapterClassic
