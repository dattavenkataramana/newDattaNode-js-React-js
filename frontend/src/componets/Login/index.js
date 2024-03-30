import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return; 
    }
    if (!password) {
      setPasswordError("Password is required");
      return;  
    }

    try {
      const res = await axios.post('http://localhost:3001/api/login', { email, password });
      const jwtToken = res.data;  
      if (jwtToken) {
        localStorage.setItem('token', jwtToken); 
        navigate('/home');  
        console.log("Login successful");
        console.log(res.data)
      }
    } catch (err) {
      console.error(err);
      console.log("Error occurred during login");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            name="email"  
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </div>
        <div>
          <label className="label" htmlFor="password">Password:</label>
          <input
            className="input"
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
        </div>
        <div>
          <input type="radio" />
          <p>Accept rules and requirements</p>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p>--------------------</p>
        <button type="button" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default Login;
