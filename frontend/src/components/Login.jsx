import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Logging in with:', formData);
      setSubmitted(true);
      // Simulate login or call API here
    }
  };

  return (
    <div className="container p-4" style={{ maxWidth: 500, marginTop: '8%',marginBottom: '8%', border: '1px solid white', borderRadius: '15px' }}>
      <h2 className="mb-4 d-flex justify-content-center">Login Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-info w-100 my-3">Login</button>

        {/* Success Message */}
        {submitted && (
          <div className="alert alert-success mt-3">
            Login successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
