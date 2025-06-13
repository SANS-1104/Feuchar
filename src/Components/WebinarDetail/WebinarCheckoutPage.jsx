import './webinarDetail.css';
import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosClient from '../../api/axiosClient';


export default function WebinarCheckoutPage() {
  const location = useLocation();
  const passedWebinar = location.state?.webinar;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.firstName.trim()) {
      toast.error('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Invalid email format');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Phone number must be 10 digits');
      return false;
    }
    return true;
  };

  const basePrice = 99;
  const discount = 70;
  const totalPrice = basePrice - discount;

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!validate()) return;

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      toast.error("Please log in to continue.");
      return;
    }

    const payload = {
      user_id: userId,
      course_id: passedWebinar?.id, 
      course_type: "webinar",
      total_amount: basePrice,          
      discount_amount: discount,
      payable_amount: totalPrice,
      currency: "INR",
      remarks: `Enrolling for webinar ${passedWebinar?.id}`,
    };

    try {
      setLoading(true);
      const res = await axiosClient.post('/payment/create', payload); 

      if (res.data?.payment_link) {
        toast.success("Redirecting to payment...");
        setTimeout(() => {
          window.location.href = res.data.payment_link;
        }, 1000);
      } else {
        toast.error("Payment link not received.");
      }

    } catch (err) {
      toast.error("Payment initiation failed. Please try again.");
      console.error("Payment Error:", err);
    }finally{
      setLoading(false);
    }
  };

  

  return (
    <div className="WebinarCheckoutPage-wrapper">
      <form onSubmit={handleSubmit} className="billing-form">
        <div className="left">
          <div className="l1">Billing Information</div>
          <div className="l2">
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
              </div>
              <div className="form-group">
                <label>* Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="summary-card">
            <h2>{passedWebinar?.webinarHerot2}</h2>
            <div className="info-row">
              <FaCalendarAlt className="icon" />
              <span>{passedWebinar?.dateOfWebinar}</span>
            </div>
            <div className="info-row">
              <FaMapMarkerAlt className="icon" />
              <span>Online</span>
            </div>
            <hr />
            <h3>Booking Summary</h3>
            <div className="summary-row">
              <span>{passedWebinar?.webinarHerot2} X 1</span>
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
            <button type="submit" className="payment-btn">Proceed to Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
}
