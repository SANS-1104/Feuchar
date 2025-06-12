import React from "react";
import { Helmet } from "react-helmet";

import CourseTitle from './CourseTitle';
import CourseSection2 from './CourseSection2';

export default function CoursePage() {
  return (
    <div className="max-wdh">
      <Helmet>
        <title>Courses - Feuchar</title>
        <meta name="description" content="Explore our wide range of courses designed to help you excel and achieve your goals." />
      </Helmet>

      <CourseTitle />
      <CourseSection2 />
    </div>
  );
}
