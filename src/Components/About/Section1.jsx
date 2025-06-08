import './about.css'
import RowSection1 from './RowSection1';

export default function Section1(){
    const Rowdata = [
        {
            num: '6000+' ,
            det: 'Students Enrolled'
        },
        {
            num: '600%' ,
            det: 'Return on investment'
        },
        {
            num: '5+' ,
            det: 'Experienced Astro-Gurus'
        },
        {
            num: '200+' ,
            det: '5-star reviews'
        }
    ];
    
    return (
        <div className="outerWrapper">
            <div className="innerWrapper">
                <div className="level1">
                    <div className="top1">About us</div>
                    <div className="top2">
                        <div className='top21'>Our Vision,</div>
                        <div className='top21'>Mission,</div>
                        <div className='top21'>And Impact</div>
                         
                    </div>
                    <div className="top3">
                        <div className='top31'>KNOW - WHO, WHY</div>
                        <div className='top31'>&nbsp; & WHERE WE ARE !!</div>
                    </div>
                </div>
                <div className='secl2'>
                    <div className='aboutImg'>
                        <img src='/images/aboutimg1.jpg' alt='' />
                    </div>
                    <div className='aboutImgDetail'>
                        <div className='detl1'>
                            <div className='t1'>
                                <div className='t1a'>We've helped hundreds of</div>
                                <div className='t1a'>&nbsp;Students to Start Astro-Career</div>
                            </div>
                            <div className='t2'>We're only just getting <br />started on our journey</div>
                        </div>
                        <div className='detl2'>
                            <div className='t3'>
                                <div className='t3a'><RowSection1 num={Rowdata[0].num} det={Rowdata[0].det} /></div>
                                <div className='t3b'><RowSection1 num={Rowdata[2].num} det={Rowdata[2].det} /></div>
                            </div>
                            <div className='t4'>
                                <div className='t4a'><RowSection1 num={Rowdata[1].num} det={Rowdata[1].det} /></div>
                                <div className='t4b'><RowSection1 num={Rowdata[3].num} det={Rowdata[3].det} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secl3'>
                    <div className='secl31'>Occult sciences an ancient yet ever-relevant domain—hold answers to many of life's questions. Whether it's astrology, numerology, palmistry, or tarot, these mystical arts have guided humanity for centuries. Yet, in today's fast-paced world, truly authentic and structured learning in occult sciences remains hard to come by.</div>
                    <div className='secl31'>At our platform, we're on a mission to restore the credibility and  revive the essence of occult sciences. We're building a community of passionate learners, future astrologers, and spiritual seekers people just like you.</div>
                </div>
            </div>
        </div>
    );
}
