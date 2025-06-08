import React from 'react';
import ValueCardComponent from './ValueCardComponent';
import './about.css';

export default function Values() {
    const valuesData = [
        {
            icon: '/images/value1.png',
            title: 'Trust',
            desc: 'The market is flooded with self-proclaimed astrologers, spreading misinformation and damaging the reputation of this divine field. So, we are here to train and create genuine astrologers for astrology market world.'
        },
        {
            icon: '/images/value2.png',
            title: 'Excellence with Affordability',
            desc: 'Current course offerings in the market are highly priced but often incomplete, unverified, and poorly organized, leaving learners confused and disheartened. We create best courses in lowest Pocket size.'
        },
        {
            icon: '/images/value3.png',
            title: 'Student-Centric',
            desc: 'Your dreams and needs are at the center of our universe. We listen, understand and adapt as per your requirements.'
        },
        {
            icon: '/images/value1.png',
            title: 'Our Commitment',
            desc: 'We are dedicated to providing you with the highest level of professional education, which will make you market ready to earn more.'
        },
    ];

    return (
        <div className='Values-OuterSection'>
            <div className="Values-section">
                <div className="Values-left">
                    <h2>Our Values</h2>
                    <div className='Values-left-desc'>
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams,
                        determined to create an extra-ordinary platform which can solve all problems of an aspiring or practicing astrologer.
                    </div>
                </div>
                <div className="Values-right">
                    <div className="t3">
                        <div className="t3a">
                            <ValueCardComponent 
                                icon={valuesData[0].icon} 
                                title={valuesData[0].title} 
                                desc={valuesData[0].desc} 
                            />
                        </div>
                        <div className="t3b">
                            <ValueCardComponent 
                                icon={valuesData[1].icon} 
                                title={valuesData[1].title} 
                                desc={valuesData[1].desc} 
                            />
                        </div>
                    </div>
                    <div className="t4">
                        <div className="t4a">
                            <ValueCardComponent 
                                icon={valuesData[2].icon} 
                                title={valuesData[2].title} 
                                desc={valuesData[2].desc} 
                            />
                        </div>
                        <div className="t4b">
                            <ValueCardComponent 
                                icon={valuesData[3].icon} 
                                title={valuesData[3].title} 
                                desc={valuesData[3].desc} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
