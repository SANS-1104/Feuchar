import './CourseDetail.css';

export default function CourseDetInstructor({course}){
    return (
        <div className="courDetIns-outer">
            <div className="courDetIns-inner">
                <div className="courseDetIns-title">Your Instructor</div>
                <div className="courseDetIns-nameImg">
                    <div className="courseDetIns-img">
                        <img src={course.tutor[0].tutorImg}  alt="Instructor" />
                    </div>
                    <div className="courseDetIns-name">
                        <div className="courseDetIns-nameText">{course.tutor[0].name} </div>
                        <div className="courseDetIns-nameSubText">{course.tutor[0].expertise}</div>
                    </div>
                </div>
                <div className="courseDetIns-desc">{course.tutor[0].detail}</div>
            </div>
        </div>
    )
}       