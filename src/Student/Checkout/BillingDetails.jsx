import React, { useState, useContext } from 'react';
import './checkout.css';
import { toast } from 'react-toastify';
import axiosClient from '../../api/axiosClient';
import { CartProvider } from '../../context/CartContext';


export default function BillingDetails() {
  const { cart } = useContext(CartContext);

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

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      toast.error("Please log in first.");
      return;
    }

    if (!cart || cart.length === 0) {
      toast.error("Cart is empty.");
      return;
    }

    // calculate totals
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = 0;
    const payableAmount = totalAmount - discountAmount;

    // prepare course list
    const courseItems = cart.map(item => ({
      course_id: item.productId,
      course_type: "course",
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    const paymentPayload = {
      user_id: userId,
      total_amount: totalAmount,
      discount_amount: discountAmount,
      payable_amount: payableAmount,
      currency: "INR",
      remarks: `Enrolling for ${cart.length} course(s)`,
      first_name: formData.fname,
      last_name: formData.lname,
      email: formData.email,
      phone: formData.phone,
      street_address: formData.street,
      town_city: formData.city,
      country: formData.country,
      postcode: formData.zip,
      courses: courseItems // ✅ array of courses
    };

    try {
      const res = await axiosClient.post("/payment/create", paymentPayload);
      const result = res.data;

      if (res.status === 200 && result.payment_link) {
        toast.success("Redirecting to payment...");
        window.open(result.payment_link, "_blank"); // ✅ open in new tab
      } else {
        toast.error(result.message || "Failed to initiate payment.");
      }
    } catch (err) {
      console.error("Error creating order:", err);
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <form className="cart-summary" onSubmit={handleSubmit}>
      <div className='cart-summar-title'>Billing details</div>
      <div className="billing-form">
        {/* Input fields */}
        {/* same as before... keep your input components here unchanged */}
        {/* Submit Button */}
        <div className="checkout-button">
          <button type="submit">Make a payment</button>
        </div>
      </div>
    </form>
  );
}
