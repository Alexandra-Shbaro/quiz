import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const SignupPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      onClose();
    }
  };

  return (
    <div className="popup">
      <h2>Sign Up</h2>
      <input 
        type="text" 
        placeholder="Create a username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SignupPopup;
