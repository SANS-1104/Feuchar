import './HomeCSS.css';

export default function Enroll(){
    return(
        <div className='enroll-wrapper out-max-wdh'>
            <div className='inner-cont max-wdh'>
                <h2>Who can Enroll?</h2>
                <div className='enroll-details'>
                    <div className='single-det'>
                        <h3>Uncertified Astrologers</h3>
                        <p>Give Your Service Credibility With Our Courses Backed With Certificate of Completion and Score Card.</p>
                    </div>
                    <div className='single-det'>
                        <h3>College Students</h3>
                        <p>Grab an Opportunity With Us to Learn a Side Subject (Astrology) to Start Earning Before Your  Degree comes.</p>
                    </div>
                    <div className='single-det'>
                        <h3>Working Person & Housewife</h3>
                        <p>A Side Hustle To Get Your Extras Fulfilled. A Quick Way To Add An Additional Source of Income Using Your Free Time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}