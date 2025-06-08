import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Footer from '../Components/common_components/Footer';
import Homepage from '../Components/Home/HomePage';
import ContactPage from '../Components/Contact/contactPage';
import AboutPage from '../Components/About/AboutPage';
import WebinarPage from '../Components/Webinar/WebinarPage';
import CoursePage from '../Components/Courses/CoursePage';
import AuthContainer from '../Components/common_components/AuthContainer';
import { ToastContainer } from "react-toastify";
import { CartProvider } from '../context/CartContext';
import Dashboard from '../Student/Dashboard/Dashboard';
import OverviewPage from '../Student/Overview/OverviewPage';
import ExploreCoursePage from '../Student/ExploreCourse/ExploreCoursePage';
import MyCoursePage from '../Student/MyCourse/MyCoursePage';
import MessagePage from '../Student/Message/MessagePage';
import UpdateProfilePage from '../Student/UpdateProfile/UpdateProfilePage';
import SignUp from '../Components/common_components/SignUp';
import BecomeTutorPage from '../Components/Tutor/BecomeTutorPage';
import VerifyOtp from '../Components/common_components/VerifyOTP';
import CartPage from '../Student/Cart/CartPage';
import CheckoutPage from '../Student/Checkout/CheckoutPage';
import ResetPass from '../Components/common_components/ForgetPassword/ResetPass';
import ForgetPassVerifyOTP from '../Components/common_components/ForgetPassword/ForgetPassVerifyOTP';
import ForgetPass from '../Components/common_components/ForgetPassword/ForgetPass';
import MainNavbar from '../Components/common_components/Navbar/MainNavbar';
import ProtectedRoute from './ProtectedRoute';
import CourseDetailPage from '../Components/CourseDetail/CourseDetailPage';

const AllRoutes = () => {
  const location = useLocation();

  const shouldHideLayoutNavbar = (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/verify-otp' ||
    location.pathname === '/forgetPass-verify-otp' ||
    location.pathname === '/resetPass' ||
    /^\/dashboard\/[^/]+/.test(location.pathname)
  );

  const shouldHideLayoutFooter = (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/verify-otp' ||
    location.pathname === '/forgetPass-verify-otp' ||
    location.pathname === '/resetPass' ||
    location.pathname === '/cart' ||
    location.pathname === '/checkout' ||
    /^\/dashboard\/[^/]+/.test(location.pathname)
  );

  return (
    <CartProvider>
      {!shouldHideLayoutNavbar && <MainNavbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgetPass-verify-otp" element={<ForgetPassVerifyOTP />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/tutor" element={<BecomeTutorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/resetPass" element={<ResetPass />} />

        {/* Dashboard routes - protected */}
        <Route
          path="/dashboard/:name"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Redirect from /dashboard/:name → /dashboard/:name/overview */}
          <Route index element={<Navigate to="overview" replace />} />

          <Route path="overview" element={<OverviewPage />} />
          <Route path="explorecourse" element={<ExploreCoursePage />} />
          <Route path="mycourse" element={<MyCoursePage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="updateprofile" element={<UpdateProfilePage />} />
        </Route>
      </Routes>

      {!shouldHideLayoutFooter && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </CartProvider>
  );
};

export default AllRoutes;
