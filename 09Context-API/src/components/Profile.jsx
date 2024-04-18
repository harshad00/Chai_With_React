import React, {useContext} from 'react';
import UserContext from '../context/UseContext';
function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return (
    <div>
        please login
      
    </div>
  );
  return <div>Welecome {user.username   } {user.password} {user.name} </div> 
}

export default Profile;
