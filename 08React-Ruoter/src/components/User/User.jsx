import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <div className=' font-mono text-3xl p-8 bg-purple-400 text-blue-300 text-center'> User:{userid} </div>
  );
}

export default User;
