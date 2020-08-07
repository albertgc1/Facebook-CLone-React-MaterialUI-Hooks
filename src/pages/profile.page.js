import React from 'react'
import Profile from '../components/user'

const container = {
    width: '100%',
    marginTop: 70,
    textAlign: '-webkit-center'
}

const ProfilePage = () => {
    return (
        <div style={container}>
            <Profile />
        </div>
    )
}
 
export default ProfilePage