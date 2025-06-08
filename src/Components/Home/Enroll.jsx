import './HomeCSS.css';

export default function Enroll(){
    return(
        <div className='enroll-wrapper'>
            <div className='inner-cont'>
                <h2>Who can Enroll?</h2>
                <div className='enroll-details'>
                    <div className='single-det'>
                        <h3>Uncertified Astrologers</h3>
                        <p>Give Your Service Credibility With Our <br></br>Courses Backed With Certificate of <br></br>Completion and Score Card.</p>
                    </div>
                    <div className='single-det'>
                        <h3>College Students</h3>
                        <p>Grab an Opportunity With Us to Learn a <br></br>Side Subject (Astrology) to Start Earning <br></br>Before Your  Degree comes.</p>
                    </div>
                    <div className='single-det'>
                        <h3>Working Person & Housewife</h3>
                        <p>A Side Hustle To Get Your Extras Fulfilled. A <br></br>Quick Way To Add An Additional Source of <br></br>Income Using Your Free Time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}