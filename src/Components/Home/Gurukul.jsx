import './HomeCSS.css'


export default function Gurukul(){
    return(
        <div className='gurukul-outer-wrapper'>
            <div className='gurukul-inner-wrapper'>
                <div className='guruImg'>
                    <img src='/images/gurukul.png' alt=''/>
                </div>
                <div className='right'>
                    <div className='rightTitle'>Re-Inventing Gurukul Culture in Kaliyuga</div>
                    <p className='rightTitleP'>Get in touch with your guru ji for doubt solving even after class...</p>
                    <div className='guruRight'>
                        <div className='rightImg'>
                            <img src='/images/guru1.png' alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Get on call or message your Guru Ji anytime</h3>
                            <p>We Have Brought Experienced Experts of Astro-space <br></br>To Pass This Magical Divine Knowledge To You. </p>
                        </div>
                    </div>
                    <div className='guruRight'>
                        <div className='rightImg'>
                            <img src='/images/guru2.png' alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Become an Astro-Guru and Enlighten others</h3>
                            <p>Join the team of path-providers and Guide aspiring <br></br>astrologers to achieve their fate !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}