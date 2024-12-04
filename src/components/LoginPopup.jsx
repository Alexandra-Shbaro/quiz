import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      onClose();
    }
  };

  return (
    <div className="popup">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginPopup;
