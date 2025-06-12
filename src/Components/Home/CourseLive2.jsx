import './courseLive2.css'
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';
import { projects } from '../../data/courseData';

export default function CourseLive2(){
    // const { id } = useParams();
    // const course = projects.find((c) => c.id.toString() === 1);
    const course = projects.find((c) => c.id === 1); // ✅ Correct
    const navigate = useNavigate();
    const { addToCart } = useCart(); 
    const token = localStorage.getItem('token');

    const handleBuyNow = () => {
        if (!token) {
            toast.warn('Please log in first to proceed to checkout.');
            return;
        }

        if (!course) {
            toast.error('Course not found.');
            return;
        }

        const newItem = {
            productId: course.id,
            name: course.title,
            price: course.newPrice,
            image: course.image,
        };

        addToCart(newItem);              
        toast.success('Proceed to Checkout!!');
        navigate('/checkout');
    };

    return(
        <div className="courseLive2-outer out-max-wdh">
            <div className="layer1"> <img src='/images/ball.png' alt='' /> </div>
            <div className="courseLive2-inner">
                
                <div className="layer2 max-wdh">                
                    <div className="courseLive2-left">
                        <div className="courseLive2-title">COURSE - LIVE</div>
                        <div className="courseLive2-info">
                            <div className="courseLive2-t1">6000+</div>
                            <div className="courseLive2-t2">Students Have Taken This Gifted Course</div>
                            <div className="courseLive2-t3">Your estimated earning per month after taking this course -<span className='bolding'>INR 40k to 20L per month</span></div>
                        </div>
                    </div>
                    <div className="courseLive2-right">
                        <div className="courseLive2-upper">
                            <div className="upperTitle">
                                <div className="courseLive2-p1">Numerology Basic to Advance (AI powered) Course</div>
                                <div className="courseLive2-p2"><i>Equivalent to Diploma + BA + MA</i></div>
                            </div>
                            <div className="courseLive2-benefits">
                                <div className="courseLive2-benefitTitle">Your Pathway To Success Starts Here:</div>
                                <ul>
                                    <li>Get Enrolled</li>
                                    <li>Take classes | Submit assignments | Interact with mentor</li>
                                    <li>Complete course | Get certified | Get onboarded</li>
                                    <li>Earn Unlimited</li>
                                </ul>
                            </div>
                        </div>
                        <div className="courseLive2-price">
                            <div className="courseLive2-amt">
                                <div className="courseLive2-t1">₹ 25000</div>
                                <div className="courseLive2-t2">₹ 9999/-</div>
                            </div>
                            <button onClick={handleBuyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layer3"><img src='/images/star.png' alt='' /></div>
        </div>
    )
}