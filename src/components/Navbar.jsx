import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, username, totalPoints } = useSelector((state) => state.user);

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
            <button>Login</button>
            <button>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
