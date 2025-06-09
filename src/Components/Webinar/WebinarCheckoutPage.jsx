import './webinar.css';
import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function WebinarCheckoutPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number should be 10 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted", formData);
            // Proceed with API call or other logic
        }
    };

    const basePrice = 99;
    const discount = 70;
    const totalPrice = basePrice - discount;


    return (
        <div className="WebinarCheckoutPage-wrapper">
            <div className="left">
                <div className="l1">Billing Information</div>
                <div className="l2">
                    <form onSubmit={handleSubmit} className="billing-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>* First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter First Name"
                                />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                            </div>
                            <div className="form-group">
                                <label>* Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter Last Name"
                                />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>* Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email Address"
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                />
                                {errors.phone && <p className="error">{errors.phone}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="summary-card">
                    <h2>Numerology Power packed 3 Hour live webinar</h2>
                    <div className="info-row">
                        <FaCalendarAlt className="icon" />
                        <span>June 22, 2025</span>
                    </div>
                    <div className="info-row">
                        <FaMapMarkerAlt className="icon" />
                        <span>Online</span>
                    </div>
                    <hr />
                    <h3>Booking Summary</h3>
                    <div className="summary-row">
                        <span>Numerology Power packed 3 hr live webinar X 1</span>
                        <span>₹{basePrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Discount</span>
                        <span>- ₹{discount.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                        <strong>Total</strong>
                        <strong>₹{totalPrice.toFixed(2)}</strong>
                    </div>
                    <button className="payment-btn">Proceed to Payment</button>
                </div>
            </div>
        </div>
    );
}
