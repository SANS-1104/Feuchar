import "./overview.css"
import { FaCirclePlay} from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function OverviewSkillSharp(){
    const navigate = useNavigate();

    const handleJoinNow = () => {
        navigate('/courses');
    };    

    return(
        <div className="OverviewSkillSharp-wrapper">
            <div className="l1">Online Course</div>
            <div className="l2">Sharpen  Your Skills With <br></br>Professional Online Courses</div>
            <div className="l3"><button onClick={handleJoinNow}>Join Now <FaCirclePlay style={{width: "20px", height:"20px", paddingLeft: "4px"}}/></button></div>
        </div>
    )
}