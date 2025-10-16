import React, { useState } from 'react';
import Techmlogorgb from '../images/Techmlogorgb.svg';

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Logged in' : 'Registered'} successfully!`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
backgroundImage: `linear-gradient(135deg, #151111bb, #f7f4ea), url(${Techmlogorgb})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain', // or 'cover' for full coverage
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div style={{
        maxWidth: 400,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        padding: 30
      }}>
        <h2 style={{
          color: '#b71c1c',
          fontWeight: '700',
          letterSpacing: 1.5,
          marginBottom: 20,
          textAlign: 'center'
        }}>
          {isLogin ? 'IT SUPPORT' : 'Create Your Account'}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label" style={{ color: '#b71c1c', fontWeight: '600' }}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#b71c1c', fontWeight: '600' }}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#b71c1c', fontWeight: '600' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label" style={{ color: '#b71c1c', fontWeight: '600' }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="btn btn-warning w-100"
            style={{ fontWeight: 'bold', fontSize: 16 }}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 15, color: '#b71c1c' }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={toggleForm}
            style={{
              border: 'none',
              background: 'none',
              color: '#ffeb3b',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            {isLogin ? 'Create Account' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
