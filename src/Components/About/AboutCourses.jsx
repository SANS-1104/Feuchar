import './about.css'
import AboutcourseCardComp from './AboutcourseCardComp';

export default function AboutCourses(){
    const astrologyCourses = [
  {
    title: "Affordable Pricing",
    desc: "Was Rs. 24,999 → Now only Rs. 9,999\nExtra 50% OFF for college students — Just Rs. 4,999"
  },
  {
    title: "Bilingual Learning",
    desc: "Class notes available in both Hindi and English."
  },
  {
    title: "Professional Educators",
    desc: "We provide mentorship with weekly celebrated veterans of the field having years of experience."
  },
  {
    title: "Short Course Duration",
    desc: "Course length between 3 to 4 months, designed to help you learn fast, earn faster."
  },
  {
    title: "Live & Interactive",
    desc: "Daily live classes with real-time doubt solving and live chat."
  },
  {
    title: "Extensive Learning Hours",
    desc: "100+ hours of professional, in-depth live and recorded video lectures."
  },
  {
    title: "Practice-Oriented Learning",
    desc: "Post-lecture practice sessions, weekly tests, and exams for mastery."
  },
  {
    title: "Mentorship Matters",
    desc: "Get personal mentorship for one-on-one support and guidance."
  },
  {
    title: "Perfect for Everyone",
    desc: "Ideal for working professionals, housewives, college students, or uncertified astrologers looking to build a career in astrology."
  },
  {
    title: "Community Support",
    desc: "Group chat and activities to build professional networks and connect with fellow learners."
  },
  {
    title: "Lifetime Access",
    desc: "All recorded videos and learning material available forever."
  },
  {
    title: "Get Certified & Placed",
    desc: "Suited for existing astrologers or passionate learners who want to become certified and start earning."
  },
  {
    title: "Self-Study Friendly",
    desc: "Want to learn for personal knowledge only? You’ll still get lifetime access to the entire module."
  },
  {
    title: "Free Platform Access",
    desc: "Upon completing the course, you get free access to our astrology service platform (worth Rs. 5000), where you can work as an astrologer, numerologist, tarot expert, etc., and earn without limits."
  }
];

    return(
        <div className="SubjectsOuterWrapper">
            <div className='SubjectsInnerWrapper'>
                <div className='subHeadingSection'>
                    <div className='t1'>Course Highlights: Why We're Different</div>
                    <div className='t2'>
                        <div className='a'>A Closer Look at Our </div>
                        <div className='b'>&nbsp;Unique Learning Approach</div>
                    </div>
                </div>
                <div className='cardSectionCourse'>
                    {astrologyCourses.map((course, index) => (
                        <AboutcourseCardComp key={index} title={course.title} desc={course.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}