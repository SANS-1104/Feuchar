import React from 'react';
import './CourseDetail.css';
import { FaShoppingCart } from "react-icons/fa";
import RatingBars from './RatingBars';
import { useNavigate } from 'react-router-dom';


export default function CourseDetailHeroPart3({course}) {
    const handleDownloadClick = () => {
        const token = localStorage.getItem('token'); // adjust key based on your auth logic

        if (token) {
            // User is logged in, trigger download
            const syllabusURL = "/files/syllabus.pdf"; // Update with actual path
            const link = document.createElement('a');
            link.href = syllabusURL;
            link.download = 'syllabus.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            //  User not logged in: open your form popup
            const popupEvent = new CustomEvent('openSyllabusForm');
            window.dispatchEvent(popupEvent);
        }
    };
    const navigate = useNavigate();
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
                            <div className="t7">Harness the power of numbers to create a fulfilling career! Our full Numerology Course teaches students and working professionals how to analyze life paths, uncover hidden patterns, and offer personalized guidance. Learn practical techniques to build a side income or a sustainable career. Enroll now and turn numerology into your success story!</div>
                        </div>
                        <div className="t8"><button onClick={handleDownloadClick}>Download Full Syllabus</button> </div>
                    </div>
                </div>
                <div className="left-half-layer2 w100 ">
                    <div className="t9">
                        <div className="t10"> Materials Included </div>
                        <div className="t11">
                            <ul>
                                <li>Get enrolled</li>
                                <li>Take classes | Submit assignments | Interact with mentor</li>
                                <li>Complete course | Get certified | Get onboarded</li>
                                <li>Earn unlimited</li>
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
                            <li>Decode life through ancient number systems</li>
                            <li>Calculate and interpret personal core numbers</li>
                            <li>Correct name vibrations for success</li>
                            <li>Forecast events using predictive numerology</li>
                            <li>Analyze compatibility in love and business</li>
                            <li>Discover remedies through number energies</li>
                            <li>Explore medical and mobile number numerology</li>
                            <li>Learn Mahadasha and pinnacle number insights</li>
                            <li>Identify strengths with arrows and elements</li>
                            <li>Align house and mobile numbers for harmony</li>
                            <li>Get certified and start earning online</li>
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
                        <div className="t20"><button onClick={() => navigate('/login?view=signup')}><FaShoppingCart />Buy Now</button> </div>
                    </div>
                </div>


                <div className="right-half-layer3 w100 brdr-btm w100 ">
                    <div className="t22">
                        <div className="t22a">Astro-Guru (Teacher)</div>
                        <div className="t22b">Sanjay Sehgal</div>
                    </div>
                    <div className="t22">
                        <div className="t22a">Duration</div>
                        <div className="t22b">100 Hours</div>
                    </div>
                    <div className="t22">
                        <div className="t22a">Certificate</div>
                        <div className="t22b">Yes</div>
                    </div>
                </div>
                <div className="right-half-layer4 w100 ">
                    <div className="t23">Ratings & Review</div>
                    <div className="t24">
                        <div className="t25">
                            <div className="t25a">4.9</div>
                            <div className="t25b">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <div className="t25c">221 Ratings</div>
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