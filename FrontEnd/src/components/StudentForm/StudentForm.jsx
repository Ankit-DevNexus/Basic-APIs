import React, { useState } from 'react';

function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    phone: '',
    dob: '',
    gender: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Required';
    if (!formData.fatherName) errors.fatherName = 'Required';
    if (!formData.motherName) errors.motherName = 'Required';
    if (!formData.phone) {
      errors.phone = 'Required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone must be 10 digits';
    }
    if (!formData.dob) errors.dob = 'Required';
    if (!formData.gender) errors.gender = 'Required';
    if (!formData.address) errors.address = 'Required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        fatherName: '',
        motherName: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Information Form</h2>

      <div>
        <label>Name:</label>
        <input name="Name" value={formData.name} onChange={handleChange} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>

      <div>
        <label>Father Name:</label>
        <input name="FatherName" value={formData.fatherName} onChange={handleChange} />
        {errors.fatherName && <span style={{ color: 'red' }}>{errors.fatherName}</span>}
      </div>

      <div>
        <label>Mother Name:</label>
        <input name="MotherName" value={formData.motherName} onChange={handleChange} />
        {errors.motherName && <span style={{ color: 'red' }}>{errors.motherName}</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input name="Phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>

      <div>
        <label>Date of Birth:</label>
        <input type="Date" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
      </div>

      <div>
        <label>Gender:</label>
        <select name="Gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
      </div>

      <div>
        <label>Address:</label>
        <textarea name="Address" value={formData.address} onChange={handleChange} />
        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
