import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Footer from '../Components/common_components/Footer';
import Homepage from '../Components/Home/HomePage';
import ContactPage from '../Components/Contact/contactPage';
import AboutPage from '../Components/About/AboutPage';
import WebinarDetailPage from '../Components/WebinarDetail/WebinarDetailPage';
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
import "../App.css"
import PrivacyPolicyPage from '../Components/ExtraPages/PrivacyPolicyPage';
import ToS from '../Components/ExtraPages/ToS';
import RefundPolicy from '../Components/ExtraPages/RefundPolicy';
import WebinarCheckoutPage from '../Components/WebinarDetail/WebinarCheckoutPage';
import AdminLogin from '../ADMIN/AdminLogin';
import AdminDashboard from '../ADMIN/AdminDashboard';
import AdminStudentDetails from '../ADMIN/AdminStudentDetails';
import AdminWebinarDetails from '../ADMIN/AdminWebinarDetails';
import AdminCourseDetails from '../ADMIN/AdminCourseDetails';
import AdminDash from '../ADMIN/AdminDash';
import WebinarPage from '../Components/Webinar/WebinarPage';

const AllRoutes = () => {
  const location = useLocation();

  const shouldHideLayoutNavbar = (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/verify-otp' ||
    location.pathname === '/forgetPass-verify-otp' ||
    location.pathname === '/resetPass' ||
    location.pathname === '/admin-login' ||
    location.pathname === '/admin-dashboard' ||
    location.pathname ==='/admin-dashboard/studentDet' ||
    location.pathname ==='/admin-dashboard/courseDet' ||
    location.pathname ==='/admin-dashboard/webinarDet' ||
    location.pathname ==='/admin-dashboard/dash' ||
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
    location.pathname === '/admin-login' ||
    location.pathname === '/admin-dashboard' ||
    location.pathname ==='/admin-dashboard/studentDet' ||
    location.pathname ==='/admin-dashboard/courseDet' ||
    location.pathname ==='/admin-dashboard/webinarDet' ||
    location.pathname ==='/admin-dashboard/dash' ||
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
        <Route path="/webinar/:id" element={<WebinarDetailPage />} />
        <Route path="/webinar-tickets/:id" element={<WebinarCheckoutPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetPass" element={<ForgetPass />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgetPass-verify-otp" element={<ForgetPassVerifyOTP />} />
        <Route path="/tutor" element={<BecomeTutorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/resetPass" element={<ResetPass />} />
        <Route path="/privacy-Policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<ToS />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

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


        {/* ADMIN DASHBOARD ROUTES */}

          {/* <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="overview" replace />} />

          <Route path="overview" element={<OverviewPage />} />
          <Route path="explorecourse" element={<ExploreCoursePage />} />
          <Route path="mycourse" element={<MyCoursePage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="updateprofile" element={<UpdateProfilePage />} />
        </Route> */}


        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="dash" element={<AdminDash />} />
          <Route path="studentDet" element={<AdminStudentDetails />} />
          <Route path="courseDet" element={<AdminCourseDetails />} />
          <Route path="webinarDet" element={<AdminWebinarDetails />} />
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
        theme="light"
      />
    </CartProvider>
  );
};

export default AllRoutes;
