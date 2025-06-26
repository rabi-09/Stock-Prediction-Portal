import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
        if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form Submitted:', formData);
            alert('Form submitted successfully!');
            setFormData({ username: '', email: '', password: '' }); // Reset form
        }
    };

    return (
        <div className="container p-4" style={{ maxWidth: 500, marginTop: '8%',marginBottom: '8%', border: '1px solid white', borderRadius: '15px' }}>
            <h2 className="mb-4 d-flex justify-content-center">Registration Form</h2>

            <form onSubmit={handleSubmit} noValidate>
                {/* Username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success w-100 mt-3 mb-3">Register</button>
            </form>
        </div>
    );
};

export default Register;
