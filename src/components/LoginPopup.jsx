const LoginPopup = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleLogin = () => {
      if (username.trim() && password.trim()) {
        dispatch(login({ username, password }));
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
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default LoginPopup;
  