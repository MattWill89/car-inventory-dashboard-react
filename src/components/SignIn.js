import React, { useState } from 'react';
import '../assets/styles/SignIn.css'; // Import CSS file

const SignIn = ({ onSignIn, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic
    onSignIn(email, password);
    
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p style={{color: "red", textAlign: "center"}}>{ errorMessage }</p>
    </div>
  );
};

export default SignIn;
