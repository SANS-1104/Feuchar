import './about.css'

export default function AboutcourseCardComp({title, desc}){
    return(
        <div className="AboutCourseCardComp-Wrapper">
            <div className='AboutCourseCardCompTitle'>{title} </div>
            <div className='AboutCourseCardCompDesc'>{desc} </div>
        </div>
    );
}