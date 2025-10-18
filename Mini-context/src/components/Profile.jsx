import React, {useContext, useState} from 'react'
import { UserContext } from '../context/userContext';
function Profile() {
    const {user} = useContext(UserContext);
    
    if(!user) return <div>Plz Login</div>

    return <div>Welcome {user}</div> 
   
}

export default Profile
