import React from 'react'
import HeadBanner from '../../components/services/Profile/HeadBanner'
import Packages from '../../components/services/Profile/Packages'
import ProfileCard from '../../components/services/Profile/ProfileCard'

const Profile = () => {
  return (
     <div className='pt-16 w-4/5 mx-auto text-left flex gap-8 flex-col'> 
     <HeadBanner/>
     <div className='flex'>
     <ProfileCard/>
     <Packages/>
     </div>
     </div>
  )
}

export default Profile