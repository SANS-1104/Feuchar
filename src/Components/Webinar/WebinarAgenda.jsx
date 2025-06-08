import './webinar.css'

export default function WebinarAgenda(){
    return(
        <div className="WebinarAgenda-wrapper">
            <div className="upper">The Agenda:</div>
            <div className="lower">
                <div className="level">
                    <div className="title">Focus:</div>
                    <div className="desc">Numerology</div>
                </div>
                <div className="level">
                    <div className="title">Challenge Title:</div>
                    <div className="desc">Change Your Luck Challenge</div>
                </div>
                <div className="level">
                    <div className="title">Duration:</div>
                    <div className="desc">3 Hours &nbsp;on&nbsp; 30th June</div>
                </div>
                <div className="level">
                    <div className="title">Price:</div>
                    {/* <div className="extra"></div> */}
                    <div className="desc">
                        <div className="a">₹99.00</div>
                        <div className="b">Bonus: Online software to <br></br>help you in numerology. <br></br> + <br></br> Exclusive Plateform Discount</div>
                    </div>
                </div>
            </div>
        </div>
    )
}