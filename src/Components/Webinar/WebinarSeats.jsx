import './webinar.css'

export default function WebinarSeats(){
    return(
        <div className="WebinarSeats-wrapper">
            <div className="upper">
                <div className="left">ONLY FEW <br></br>SEATS LEFT</div>
                <div className="right">Secure your spot at the Power-<br></br>Packed Numerology Webinar <br></br>and unlock the secrets to health, <br></br>wealth, and success.</div>
            </div>
            <div className="lower">
                <div className="left">
                    <div className="a">Early Bird Pricing Ends In:</div>
                    <div className="b">
                        <div className="timer">
                            <div className="timerNum">12</div>
                            <div className="timerDesc">DAYS</div>
                        </div>
                        <div className="colon">:</div>
                        <div className="timer">
                            <div className="timerNum">05</div>
                            <div className="timerDesc">HOURS</div>
                        </div>
                        <div className="colon">:</div>
                        <div className="timer">
                            <div className="timerNum">30</div>
                            <div className="timerDesc">MINUTES</div>
                        </div>
                    </div>
                </div>
                <div className="right"><img src='/images/webinar3.png' alt='' /> </div>
            </div>
        </div>
    )
}