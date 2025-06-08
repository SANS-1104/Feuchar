import './HomeCSS.css'
import { useNavigate } from 'react-router-dom';

export default function CourseLive(){
    const navigate = useNavigate();
    return (
        <div className='courseCont'>
                <div className='ballImg'>
                    <img src='/images/ball.png' alt='ball'></img>
                </div>
                <div className='course-content-wrapper'>
                    <div className='leftDesc'>
                        <div className='title'>COURSE - LIVE</div>
                        <div className='info'>
                            <div className='t1'>6000+</div>
                            <div className='t2'>Students Have Taken This Gifted Course</div>
                            <div className='t3'>your estimated earning per month after taking this course - INR 40k to 20L per month</div>
                        </div>
                    </div>
                    {/* <div className='gap'></div> */}
                    <div className='rightDesc'>
                        <div className='upper'>
                            <div className='p1'>Numerology Basic to Advance <br></br> (AI powered) Course</div>
                            <div className='p2'> <i>Equivalent to Diploma + BA + MA</i> </div>
                            <div className='benefits'>
                                <div className='benefitTitle'>Your Pathway To Success Starts Here:</div>
                                <ul>
                                    <li>Get Enrolled</li>
                                    <li>Take classes | Submit assignments | Interact with mentor</li>
                                    <li>Complete course | Get certified | Get onboarded</li>
                                    <li>Earn Unlimited</li>
                                </ul>
                            </div>
                        </div>
                        <div className='price'>
                            <div className='amt'>
                                <div className='t1'>₹ 25000</div>
                                <div className='t2'>₹ 9999/-</div>
                            </div>
                            <button onClick={() => navigate('/login?view=signup')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='starImg'>
                    <img src='/images/star.png' alt='star'></img>
                </div>
        </div>
        
    )
}