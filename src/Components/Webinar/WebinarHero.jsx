import './webinar.css';

export default function WebinarHero(){
    return(
        <div className="WebinarHero-wrapper">
            <div className="Images-Overlay">
                <img src="/images/webinar1.jpg" class="base-img" />
                <img src="/images/webinarOverlay.png" class="overlay-img" />
                <div className="overlayText">
                    <div className="level1">Unlock Life's Secrets with Just Your Numbers</div>
                    <div className="level2">Numerology Power packed 3 Hour live webinar</div>
                    <div className="level3">
                        <div className="timer">
                            <div className="timerTime">31</div>
                            <div className="timerDesc">Days</div>
                        </div>

                        <div className="colon">:</div>

                        <div className="timer">
                            <div className="timerTime">16</div>
                            <div className="timerDesc">Hours</div>
                        </div>

                        <div className="colon">:</div>

                        <div className="timer">
                            <div className="timerTime">20</div>
                            <div className="timerDesc">Mins</div>
                        </div>
                        
                        <div className="colon">:</div>

                        <div className="timer">
                            <div className="timerTime">50</div>
                            <div className="timerDesc">Secs</div>
                        </div>

                        
                    </div>
                    <div className="level4">LEARN NUMEROLOGY TO SOLVE ALL YOUR HEALTH, RELATIONSHIP & CAREER PROBLEMS</div>
                </div>
            </div>
            <div className="ticketBtn"><button>Get Tickets at just ₹99.00</button> </div>
        </div>
    )
}