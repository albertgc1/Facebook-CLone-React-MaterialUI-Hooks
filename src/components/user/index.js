import React, { useContext } from 'react'
import CardProfile from './card'
import { Context } from '../../server/Context'

const Profile = () => {
    const { userAuth } = useContext(Context)
    return (
        <CardProfile user={userAuth} />
    )
}
 
export default Profile
