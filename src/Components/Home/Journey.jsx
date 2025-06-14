import { FaArrowRight } from 'react-icons/fa'
import './HomeCSS.css'

export default function Journey(){
    return(
        <div className="outerJourney-wrapper max-wdh">
                <div className="journey-heading">Your Journey at Feuchar</div>
                <div className='journey-data'>
                    <div className='journey-card'>
                        <img src='/images/journey1.png' alt='Journey Step 1' />
                        <div className='journey-text'>Enroll & Complete <br></br>Training</div>
                    </div>
                    <div className='journey-arrow'><FaArrowRight /></div>
                    <div className='journey-card'>
                        <img src='/images/journey2.png' alt='Journey Step 2' />
                        <div className='journey-text'>Certificate + Platform Earning Access</div>
                    </div>
                    <div className='journey-arrow'><FaArrowRight /></div>
                    <div className='journey-card'>
                        <img src='/images/journey3.png' alt='Journey Step 3' />
                        <div className='journey-text'>Earn upto ₹2 Cr Working from Anywhere</div>
                    </div>
                </div>
        </div>
    )
}