import React, { useState } from 'react';
import './checkout.css'; // Ensure you have the correct CSS file for styling

export default function BillingDetails({ cart }) {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    country: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = 'First name is required';
    if (!formData.lname.trim()) newErrors.lname = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.zip.trim()) newErrors.zip = 'Postcode/Zip is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // Replace with your actual backend endpoint
      const res = await fetch('/api/save-billing-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Billing details saved successfully!');
        // Optionally reset form
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          street: '',
          city: '',
          country: '',
          zip: '',
        });
        setErrors({});
      } else {
        alert('Failed to save billing details.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while saving billing details.');
    }
  };

  return (
    <form className="cart-summary" onSubmit={handleSubmit}>
  <div className='cart-summar-title'>Billing details</div>

  <div className="billing-form">
    <div className="form-row">
      <div className="billingCheckout-input-field">
        <label htmlFor='fname'>First Name*</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        {errors.fname && <small className="error">{errors.fname}</small>}
      </div>

      <div className="billingCheckout-input-field">
        <label htmlFor="lname">Last Name*</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        {errors.lname && <small className="error">{errors.lname}</small>}
      </div>
    </div>

    <div className="form-row">
      <div className="billingCheckout-input-field">
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>

      <div className="billingCheckout-input-field">
        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>
    </div>

    <div className="billingCheckout-input-field">
      <label htmlFor="street">Street Address*</label>
      <input
        type="text"
        id="street"
        name="street"
        value={formData.street}
        onChange={handleChange}
      />
      {errors.street && <small className="error">{errors.street}</small>}
    </div>

    <div className="billingCheckout-input-field">
      <label htmlFor="city">Town / City*</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      {errors.city && <small className="error">{errors.city}</small>}
    </div>

    <div className="billingCheckout-input-field">
      <label htmlFor="country">Country*</label>
      <input
        type="text"
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      {errors.country && <small className="error">{errors.country}</small>}
    </div>

    <div className="billingCheckout-input-field">
      <label htmlFor="zip">Postcode / Zip*</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
      />
      {errors.zip && <small className="error">{errors.zip}</small>}
    </div>
  </div>
  <div className="checkout-button">
    <button className="">Make a payment</button>
  </div>
</form>

  );
}
