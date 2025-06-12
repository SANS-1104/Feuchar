import './HomeCSS.css'
import { useNavigate } from 'react-router-dom';

export default function Future(){
    const navigate = useNavigate();
    return(
        <div className='Outer-future out-max-wdh'>
            <div className='inner-future max-wdh'>
                <div className='l1'><img src='/images/icon.png' alt=''/></div>
                <div className='l2'>Built for the future. <br></br>Available today.</div>
                <div className='l3'>
                   <div className='avatarImg'><img src='/images/avatar.png' alt=''/></div>
                   <div className='content'><p>More than 6k people trust us</p></div>
                </div>
                <div className='l4'>
                    <button className='explore' onClick={() => navigate('/courses')}>Explore Our Courses</button>
                    <button className='register' onClick={() => navigate('/login?view=signup')}>Register Now</button>
                </div>
            </div>
        </div>
    )
}