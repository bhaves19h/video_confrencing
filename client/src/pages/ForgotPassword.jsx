import React, { useState } from 'react';
import '../styles/Forgot.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your registered email.');
      return;
    }

    // Simulate sending reset link
    setTimeout(() => {
      setMessage('Password reset link has been sent. Check your registered email.');
      setEmail('');
    }, 800);
  };

  return (
    <div className="forgotContainer">
      <h2>Forgot Password</h2>
      <p>Enter your registered email to reset your password.</p>
      
      <form onSubmit={handleReset}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p className="resetMessage">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
