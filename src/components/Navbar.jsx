import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, username, totalPoints } = useSelector((state) => state.user);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  return (
    <nav className="navbar">
      <h1>Quizzlet</h1>
      <div>
        {isLoggedIn ? (
          <>
            <span>{username} - {totalPoints} Points</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setShowLoginPopup(true)}>Login</button>
            <button onClick={() => setShowSignupPopup(true)}>Signup</button>
          </>
        )}
      </div>

      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}

      {showSignupPopup && <SignupPopup onClose={() => setShowSignupPopup(false)} />}
    </nav>
  );
};

export default Navbar;
