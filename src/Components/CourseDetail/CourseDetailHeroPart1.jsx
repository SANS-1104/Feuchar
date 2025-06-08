import HomeHeroForm from "../Home/HomeHeroForm";
import "react-toastify/dist/ReactToastify.css";
import "./CourseDetHero.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CourseDetailHeroPart1({course}) {
  const navigate = useNavigate();
  return (
    <>
      <div className='OuterHero-wrapper-courseDet'>
          <div className="left-half">
            <div className="layer1">
                <div className="title">{course.title}</div>
                <div className="prices">
                    <div className="oldPrice">&#8377; {course.oldPrice}</div>
                    <div className="newPrice">&#8377; {course.newPrice}</div>
                </div>
            </div>
            <div className="layer2">
              <div className="layer21">
                <div className="a">
                  <div className="a1">4.9*</div>
                  <div className="a2">Overall customer rating</div>
                </div>
                <div className="a">
                  <div className="a1">6 LPA+</div>
                  <div className="a2">Avg. Package | Max ₹2 Cr</div>
                </div>
              </div>
              <div className="layer21">
                <div className="a">
                  <div className="a1">50+</div>
                  <div className="a2">years of total Experience</div>
                </div>
                <div className="a">
                  <div className="a1">5+</div>
                  <div className="a2">Experienced Astro-Gurus</div>
                </div>
              </div>
            </div>
            <div className="layer3">
              <div className="layer31">
                <button onClick={() => navigate('/login?view=signup')}><FaShoppingCart /> Add to Cart</button>
              </div>
              <div className='layer32'>
                  <div className='avatarImg'><img src='/images/avatar.png' alt=''/></div>
                  <div className='content'><p>More than 6k people trust us</p></div>
                </div>
              <div className="layer32">
              </div>
            </div>
          </div>
          <div className="right-half">
            <HomeHeroForm />
          </div>
        </div>
      </>
  );
}


export default CourseDetailHeroPart1;