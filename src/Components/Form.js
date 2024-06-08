import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharRegex = /^[0-9]{12}$/;

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.pan) {
      errors.pan = 'PAN number is required';
    } else if (!panRegex.test(formData.pan)) {
      errors.pan = 'Invalid PAN number';
    }
    if (!formData.aadhar) {
      errors.aadhar = 'Aadhar number is required';
    } else if (!aadharRegex.test(formData.aadhar)) {
      errors.aadhar = 'Aadhar number must be 12 digits';
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="form-container">
    <div className='p-10'>
        <h1 className='text-center'>Form Validation</h1>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
          <button className='showbtn' type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
        <label>Phone Number</label>
          <div className="countryPhone">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.country === 'India' && (
              <>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </>
            )}
            {formData.country === 'USA' && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </>
            )}
            {formData.country === 'UK' && (
              <>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
              </>
            )}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>PAN Number</label>
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
          {errors.pan && <span className="error">{errors.pan}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} />
          {errors.aadhar && <span className="error">{errors.aadhar}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
