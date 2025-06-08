import "./CourseDetail.css"
import { useNavigate } from 'react-router-dom';

export default function CourseDetLast(){
    const navigate = useNavigate();
    return(
        <div className="CourseDetLast-outer-wrapper">
            <div className="CourseDetLast-inner-wrapper">
                <div className="b1">
                    <div className="b2">Unlock the Power of Numbers in Your Life</div>
                    <div className="b3">Master numerology from basics to advanced. Transform lives including your own through certified knowledge and real-world practice.</div>
                </div>
                <div className="b4">
                    <button onClick={() => navigate('/login?view=signup')}>
                        Enroll Now & Start Your Journey   <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 4.09863L16.25 4.09863C16.4158 4.09863 16.5747 4.16448 16.6919 4.28169C16.8092 4.3989 16.875 4.55787 16.875 4.72363V14.0986C16.875 14.4438 16.5952 14.7236 16.25 14.7236C15.9048 14.7236 15.625 14.4438 15.625 14.0986V6.23252L4.19194 17.6656C3.94786 17.9097 3.55214 17.9097 3.30806 17.6656C3.06398 17.4215 3.06398 17.0258 3.30806 16.7817L14.7411 5.34863L6.875 5.34863C6.52982 5.34863 6.25 5.06881 6.25 4.72363C6.25 4.37846 6.52982 4.09863 6.875 4.09863Z" fill="#F8B919"/>
                        </svg>
                    </button> 
                </div>
            </div>
            
        </div>
    )
}