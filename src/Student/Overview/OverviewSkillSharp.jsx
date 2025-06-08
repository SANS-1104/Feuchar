import "./overview.css"
import { FaCirclePlay} from 'react-icons/fa6';



export default function OverviewSkillSharp(){
    return(
        <div className="OverviewSkillSharp-wrapper">
            <div className="l1">Online Course</div>
            <div className="l2">Sharpen  Your Skills With <br></br>Professional Online Courses</div>
            <div className="l3"><button>Join Now <FaCirclePlay style={{width: "20px", height:"20px", paddingLeft: "4px"}}/></button></div>
        </div>
    )
}