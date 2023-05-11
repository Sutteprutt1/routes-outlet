import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <p>Enter your username and password to log in</p>
      <input type="text" id="username" placeholder="Username" className="input-field" />
      <input type="password" id="password" placeholder="Password" className="input-field" />
      <button className="login-button">Log in</button>
      <button className="cancel-button">Cancel</button>
    </form>
  );
}

export default LoginForm;