import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
    return (
      <form>
          <h2>Login</h2>
          <p>Enter your username and password to log in</p>
          <input type="text" id='username' placeholder='username' />
          <input type="password" id='password' placeholder='Password' />
          <button>Log in</button>
          <button>Cancel</button>
      </form>
    )
  }
  
  export default LoginForm