import './about.css'
import AboutSubCardComp from './AboutSubCardComp';

export default function Subjects(){
    const astrologyCourses = [
  {
    title: "Vedic Astrology",
    desc: "An Ancient Indian System Of Astrology Based On Planetary Positions In The Sidereal Zodiac. It Focuses On Karma, Destiny, And Life Patterns Using A Birth Chart (Janma Kundali)."
  },
  {
    title: "Numerology",
    desc: "A Belief System That Assigns Mystical Meanings To Numbers Derived From Names And Birth Dates. It Interprets Personality Traits, Life Paths, And Future Possibilities."
  },
  {
    title: "Palmistry",
    desc: "The Art Of Reading The Lines, Shapes, And Mounts On The Palm To Predict A Person’s Character And Future. It Has Roots In Ancient India, China, And Greece."
  },
  {
    title: "Tarot Reading",
    desc: "A Divination Tool Using A Deck Of 78 Symbolic Cards To Offer Insight Into The Past, Present, Or Future. Each Card Reflects Aspects Of Human Experience And Emotions."
  },
  {
    title: "Face Reading",
    desc: "Also Known As Physiognomy, It Analyzes Facial Features And Expressions To Assess Personality Traits And Predict Destiny. Used In Both Eastern And Western Traditions."
  },
  {
    title: "Lal Kitab",
    desc: "A Unique Branch Of Astrology Combining Vedic And Persian Elements, Known For Its Easy-To-Follow Remedies. It Uses A Simplified Planetary Placement System."
  },
  {
    title: "KP Astrology",
    desc: "Krishnamurti Paddhati Is A Modern And Accurate Astrological Method That Uses Precise Timing Through Star-Lord Theory. It Emphasizes Sub-Lords And Ruling Planets."
  },
  {
    title: "Nadi Astrology",
    desc: "An Ancient And Detailed Form Of Astrology That Uses Thumb Impressions To Trace Pre-Written Life Records. Said To Be Inscribed By Sages Thousands Of Years Ago."
  },
  {
    title: "Prashna Kundali",
    desc: "A Form Of Horary Astrology That Answers Specific Questions Based On The Exact Time And Place They Are Asked. No Birth Chart Is Needed."
  },
  {
    title: "Vastu Shastra",
    desc: "An Ancient Indian Science Of Architecture And Spatial Arrangement That Harmonizes Buildings With Natural Elements. It Aims To Bring Health, Wealth, And Peace."
  },
  {
    title: "...And Many More!",
    desc: "Each Course Is Meticulously Crafted By Industry Experts To Offer Both Deep Theoretical Knowledge And Practical Understanding."
  }
];

    return(
        <div className="SubjectsOuterWrapper">
            <div className='SubjectsInnerWrapper'>
                <div className='subHeadingSection'>
                    <div className='t1'>All Subjects Under One Roof</div>
                    <div className='t2'>
                        <div className='a'>We're launching all major subjects of</div>
                        <div className='b'>&nbsp;occult sciences very soon, including:</div>
                    </div>
                </div>
                <div className='cardSection'>
                    {astrologyCourses.map((course, index) => (
                        <AboutSubCardComp key={index} title={course.title} desc={course.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}