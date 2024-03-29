import { FC, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";

const Login: FC = () => {
  const { login } = useAuth();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    const result = await login(username, password);
    if (result) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }, [username, password, login, navigate]);

  return (
    <div className="login">
      {showErrorMessage && (
        <div className="errorMessage">
          Authentication Failed. Please check your credentials.
        </div>
      )}
      <div className="login-form">
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
