import TestimonialCarousel from './TestimonialCarousel';
import './webinar.css';
import WebinarAbt from './WebinarAbt';
import WebinarAgenda from './WebinarAgenda';
import WebinarCoursePrev from './WebinarCoursePrev';
import WebinarHero from './WebinarHero';
import WebinarLearn from './WebinarLearn';
import WebinarSeats from './WebinarSeats';



export default function WebinarPage() {
    return(
        <div className="webinarPage">
            <WebinarHero/>
            <WebinarAgenda />
            <WebinarLearn />
            <WebinarCoursePrev />
            <TestimonialCarousel />
            <WebinarSeats />
            <WebinarAbt />
        </div>
    )
}