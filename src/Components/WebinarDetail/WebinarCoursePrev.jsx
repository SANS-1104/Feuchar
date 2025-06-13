import './webinarDetail.css'

export default function WebinarCoursePrev({webinar}){
    return(
        <div className="WebinarCoursePrev-wrapper">
            <div className="upper">Why join this webinar ?</div>
            <div className="lower">
                <div className="vid">
                    <a href={webinar.webinarVideoLink} target='blank' rel="noopener noreferrer">
                        <img src="/images/courseDet4.png" alt="YouTube" className="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

