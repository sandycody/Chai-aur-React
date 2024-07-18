import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    
    const { user } = useContext(UserContext);

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user["username"]}</div>
    // We can use [] notation and provide the states in string but otherwise using dot notation we can directly use it
}

export default Profile;
