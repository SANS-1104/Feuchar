import './webinar.css'

export default function WebinarAbt(){
    return(
        <div className="WebinarAbt-wrapper">
            <div className="left">
                <div className="title">About Feuchar</div>
                <div className="content">Feuchar is India’s leading digital platform dedicated to the study and teaching of occult sciences—including numerology, astrology, tarot, and more. Our mission is to bring clarity, confidence, and empowerment into people’s lives through ancient wisdom, presented in a modern, practical way. We offer expert-led courses, live webinars, certified programs, and a vibrant community of learners and mentors. </div>
                <div className="getBtn"><button>Get Tickets Now</button></div>
            </div>
            <div className="right">
                <div className="l1"><img src='/images/webinar6.png' alt='' /></div>
                <div className="l3">
                    <div className="a">46+</div>
                    <div className="b">Webinar In The Last Year</div>
                </div>
            </div>
        </div>
    )
}