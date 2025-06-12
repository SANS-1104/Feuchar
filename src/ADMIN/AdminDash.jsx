import "./admin.css"

export default function AdminDash(){
    return (
        <div className="AdminDash-outer-wrapper">
            <div className="AdminDash-inner-wrapper">
                {/* row 1 */}
                <div className="a">
                    <div className="a1">
                        <div className="l1">Total Registrations</div>
                        <div className="l2">50</div>
                    </div>
                    <div className="a1">
                        <div className="l1">Total Webinar Attendees</div>
                        <div className="l2">400</div>
                    </div>
                </div>
                {/* row 2 */}
                <div className="a">
                    <div className="a1">
                        <div className="l1">Students Buying Course</div>
                        <div className="l2">20</div>
                    </div>
                    <div className="a1">
                        <div className="l1">Students Buying Course</div>
                        <div className="l2">50</div>
                    </div>
                </div>
            </div>
        </div>
    )
}