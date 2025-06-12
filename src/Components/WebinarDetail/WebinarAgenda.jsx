import './webinarDetail.css'

export default function WebinarAgenda({webinar}){
    return(
        <div className="WebinarAgenda-wrapper">
            <div className="upper">The Agenda:</div>
            <div className="lower">
                <div className="level">
                    <div className="title">Focus:</div>
                    <div className="desc">{webinar.webinarAgendaFocus}</div>
                </div>
                <div className="level">
                    <div className="title">Challenge Title:</div>
                    <div className="desc">{webinar.webinarAgendaTitle}</div>
                </div>
                <div className="level">
                    <div className="title">Duration:</div>
                    <div className="desc">{webinar.webinarAgendaDuration}</div>
                </div>
                <div className="level">
                    <div className="title">Price:</div>
                    {/* <div className="extra"></div> */}
                    <div className="desc">
                        <div className="a">₹{webinar.newPrice}</div>
                    </div>
                </div>
                <div className="level">
                    <div className="title">Bonus:</div>
                    <div className="desc">{webinar.webinarAgendaBonusA}<br /> {webinar.webinarAgendaBonusB}</div>
                </div>
            </div>
        </div>
    )
}