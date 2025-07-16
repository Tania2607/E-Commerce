import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
       localStorage.setItem("RegisterUser" , JSON.stringify({
          email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    name: formData.name
       }))
       
      console.log('Sign up:', formData);
      setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    toast.success("User Signup Successful")
    } else {
     const getUser =  localStorage.getItem("RegisterUser")
     const User = JSON.parse(getUser)
     if (formData.email == User.email && formData.password == User.password)
     {
      localStorage.setItem("LoginUser", JSON.stringify({
        email : formData.email,
        password : formData.password
      }))
      
      toast.success("User Login Successful")
      navigate("/")
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
     }
     else{
      toast.error("Login UnSuccessful")
     }
    
      // console.log('Login:', { email: formData.email, password: formData.password });
      
    }
   
  };

  
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-form-wrapper">
            <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
            <p className="login-subtitle">
              {isSignUp ? 'Join our community today' : 'Sign in to your account'}
            </p>
            
            <form onSubmit={handleSubmit} className="login-form">
              {isSignUp && (
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {isSignUp && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <button type="submit" className="submit-btn">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>
            
            <div className="form-footer">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  className="switch-btn"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;