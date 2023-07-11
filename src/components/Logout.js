import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;