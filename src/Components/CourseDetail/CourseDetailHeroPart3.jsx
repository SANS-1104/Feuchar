import React from 'react';
import './CourseDetail.css';
import { FaShoppingCart } from "react-icons/fa";
import RatingBars from './RatingBars';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CourseDetailHeroPart3({course}) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const handleDownloadClick = () => {
        if (token) {
            const syllabusURL = course.syllabus; 
            const link = document.createElement('a');
            link.href = syllabusURL;
            link.download = course.syllabus;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            const popupEvent = new CustomEvent('openSyllabusForm');
            window.dispatchEvent(popupEvent);
        }
    };

    const handleBuyNow = () => {
        if (!token) {
            toast.warn('Please log in first to proceed to checkout.');
            return;
        }
        const newItem = {
            productId: course.id,
            name: course.title,
            price: course.newPrice,
            image: course.image || '/images/default-course.jpg', // optional fallback
        };
        addToCart(newItem);          //  Reactively adds to cart via context
        toast.success('Proceed to Checkout!');
        navigate('/checkout');       //  No need for reload
    };


    return (
        <div className="courseDetHero-wrapper">
            <div className="left-half w100">
                <div className="left-half-layer1  w100 brdr-btm">
                    <div className="t1">Description</div>
                    <div className="t2">
                        <div className="t3">
                            <div className="t4">
                                <div className="t5">Your pathway to success starts here:</div>
                                <div className="t6">
                                    <ul>
                                        <li>Get enrolled</li>
                                        <li>Take classes | Submit assignments | Interact with mentor</li>
                                        <li>Complete course | Get certified | Get onboarded</li>
                                        <li>Earn unlimited</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="t7">{course.courseDescription[0].para} </div>
                        </div>
                        <div className="t8"><button onClick={handleDownloadClick}>Download Full Syllabus</button> </div>
                    </div>
                </div>
                <div className="left-half-layer2 w100 ">
                    <div className="t9">
                        <div className="t10"> Materials Included </div>
                        <div className="t11">
                            <ul>
                                <li>Live classes</li>
                                <li>Recording of live classes</li>
                                <li>Study material pdf</li>
                                <li>Class notes</li>
                                <li>Class ppt</li>
                                <li>Relevant books pdf</li>
                                <li>Online powerful softwares</li>
                                <li>Access to our premium group of expert professionals</li>
                                <li>Free Access to our earning platform (Worth ₹5000)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="t12"><img src='/images/courseDet5.jpg' alt='' /></div>
                </div>
            </div>

            <div className="right-half w100">

                <div className="right-half-layer1 brdr-btm w100 ">
                    <div className="t13">What you will learn?</div>
                    <div className="t14">
                        <ul>
                            {course.learnLi?.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="right-half-layer2 brdr-btm w100 ">
                    <div className="t15">Price</div>
                    <div className="t16">
                        <div className="t17">
                            <div className="t18">&#8377;{course.newPrice}</div>
                            <div className="t19">(&#8377;{course.oldPrice})</div>
                        </div>
                        <div className="t20"><button onClick={handleBuyNow}><FaShoppingCart />Buy Now</button> </div>
                    </div>
                </div>


                <div className="right-half-layer3 w100 brdr-btm w100 ">
                    <div className="t22">
                        <div className="t22a">Astro-Guru (Teacher)</div>
                        <div className="t22b">{course.tutor[0].name} </div>
                    </div>
                    <div className="t22">
                        <div className="t22a">Duration</div>
                        <div className="t22b">{course.tutor[0].duration} Hours</div>
                    </div>
                    <div className="t22">
                        <div className="t22a">Certificate</div>
                        <div className="t22b">{course.tutor[0].certificate}</div>
                    </div>
                </div>
                <div className="right-half-layer4 w100 ">
                    <div className="t23">Ratings & Review</div>
                    <div className="t24">
                        <div className="t25">
                            <div className="t25a">{course.courseRating}</div>
                            <div className="t25b">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <div className="t25c">{course.totalRatings} Ratings</div>
                        </div>
                        <div className="t26">
                            <RatingBars />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}