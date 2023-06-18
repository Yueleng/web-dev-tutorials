import { FC } from "react";

const Login: FC = () => {
  return (
    <div className="login">
      <div className="login-form">
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="button" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
