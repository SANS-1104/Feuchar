import HomeHeroForm from "../Home/HomeHeroForm";
import "react-toastify/dist/ReactToastify.css";
import "./CourseDetHero.css";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify"; 
import { useCart } from "../../context/CartContext";


function CourseDetailHeroPart1({course}) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const cartItem = {
      productId: course.id,  
      name: course.title,
      price: course.newPrice,
      image: course.image || '/images/default-course.png' ,
    };
    addToCart(cartItem);
    toast.success("Course added to cart!");
  };
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
                  <div className="a1">{course.rating}*</div>
                  <div className="a2">Overall customer rating</div>
                </div>
                <div className="a">
                  <div className="a1">{course.avgPkg} LPA+</div>
                  <div className="a2">Avg. Package | Max ₹2 Cr</div>
                </div>
              </div>
              <div className="layer21">
                <div className="a">
                  <div className="a1">{course.totalExp}+</div>
                  <div className="a2">years of total Experience</div>
                </div>
                <div className="a">
                  <div className="a1">{course.astroExp}+</div>
                  <div className="a2">Experienced Astro-Gurus</div>
                </div>
              </div>
            </div>
            <div className="layer3">
              <div className="layer31">
                <button onClick={handleAddToCart}><FaShoppingCart /> Add to Cart</button>
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