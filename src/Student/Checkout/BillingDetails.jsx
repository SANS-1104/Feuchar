import React, { useState } from 'react';
import './checkout.css';
import { toast } from 'react-toastify';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = [];

    if (!formData.fname.trim()) errors.push('First name is required');
    if (!formData.lname.trim()) errors.push('Last name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push('Invalid email address');
    if (!formData.phone.trim()) errors.push('Phone number is required');
    else if (!/^\d{10}$/.test(formData.phone)) errors.push('Phone number must be 10 digits');
    if (!formData.street.trim()) errors.push('Street address is required');
    if (!formData.city.trim()) errors.push('City is required');
    if (!formData.country.trim()) errors.push('Country is required');
    if (!formData.zip.trim()) errors.push('Postcode / Zip is required');

    if (errors.length > 0) {
      errors.forEach(err => toast.error(err));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch('/api/save-billing-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Billing details saved successfully!');
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
      } else {
        const errRes = await res.json().catch(() => ({}));
        toast.error(errRes.message || 'Failed to save billing details.');
      }
    } catch (err) {
      console.error('Network error:', err);
      toast.error('Server not reachable. Try again later.');
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
              required
            />
          </div>
          <div className="billingCheckout-input-field">
            <label htmlFor="lname">Last Name*</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
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
              required
            />
          </div>
          <div className="billingCheckout-input-field">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
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
            required
          />
        </div>

        <div className="billingCheckout-input-field">
          <label htmlFor="city">Town / City*</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="billingCheckout-input-field">
          <label htmlFor="country">Country*</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="billingCheckout-input-field">
          <label htmlFor="zip">Postcode / Zip*</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="checkout-button">
        <button type="submit">Make a payment</button>
      </div>
    </form>
  );
}
