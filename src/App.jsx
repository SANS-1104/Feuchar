import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/common_components/Navbar';
import Footer from './Components/common_components/Footer';
import Homepage from './Components/Home/HomePage';
import ContactPage from './Components/Contact/contactPage';
import AboutPage from './Components/About/AboutPage';
import WebinarPage from './Components/Webinar/WebinarPage';
import CoursePage from './Components/Courses/CoursePage';
import AuthContainer from './Components/common_components/AuthContainer';
import { ToastContainer } from "react-toastify";
import { CartProvider } from './context/CartContext';
import CourseDetail from './Components/CourseDetail/CourseDetailPage';

// Dashboard layout and nested components
import Dashboard from './Student/Dashboard/Dashboard';
import Overview from './Student/Dashboard/Overview';
import ExploreCourse from './Student/Dashboard/ExploreCourse';
import MyCourse from './Student/Dashboard/MyCourse';
import Message from './Student/Dashboard/Message';

const App = () => {
  const location = useLocation();

  // Hide Navbar and Footer on /login and all /dashboard/:username/* routes
  const shouldHideLayout = (
    location.pathname.startsWith('/login') ||
    /^\/dashboard\/[^/]+/.test(location.pathname)
  );

  return (
    <CartProvider>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/course/:id" element={<CourseDetail />} />

        {/* Dashboard routes */}
        <Route path="/dashboard/:username" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="explore"  element={<ExploreCourse />} />
          <Route path="messages" element={<Message />} />
          <Route path="mycourse" element={<MyCourse />} />
        </Route>
      </Routes>

      {!shouldHideLayout && <Footer />}

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

export default App;
