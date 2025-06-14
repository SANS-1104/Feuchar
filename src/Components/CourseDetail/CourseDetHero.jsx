import './CourseDetail.css';
import CourseDetailHeroPart1 from "./CourseDetailHeroPart1";
import CourseDetailHeroPart3 from "./CourseDetailHeroPart3";
import DotPlot from './DotPlot';


export default function CourseDetHero({course}) {
    return (
        <div className="courseDet-HeroCont-outer">
            <div className="courseDet-HeroCont-inner">
                <div className="courseDet-HeroCont-layer1">
                    <CourseDetailHeroPart1 course={course} />
                </div>
                <div className="courseDet-HeroCont-layer2">
                    <div className="left">
                        <div 
                            className="leftA"  
                            style={{
                                backgroundImage: `url(${course.ytThumbnail})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="img2">
                                <a href={course.ytVideo} target='blank' rel="noopener noreferrer">
                                    <img src="/images/courseDet4.png" alt="YouTube" className="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightA">
                            {/* <img src="/images/courseDet2.jpg" alt="" className="" /> */}
                            <img src='/images/seatsLeft.png' />
                            <div className="desc">Only Few <br></br>Seats Left !!!</div>
                        </div>
                        <div className="rightB">
                            {/* <img src="/images/courseDet3.jpg" alt="" className="" /> */}
                            < DotPlot />
                        </div>
                    </div>
                </div>
                <div className="courseDet-HeroCont-layer3">
                    <CourseDetailHeroPart3 course={course}/>
                </div>
            </div>
        </div>
    )
}