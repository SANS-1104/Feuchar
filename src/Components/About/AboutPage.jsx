import React from "react";
import { Helmet } from "react-helmet";

import Future from "../Home/Future";
import AboutCourses from "./AboutCourses";
import FAQ from "./FAQ";
import Section1 from "./Section1";
import Subjects from "./Subjects";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Values from "./Values";

export default function AboutPage() {
  return (
    <div className="max-wdh">
      <Helmet>
        <title>About Us - Feuchar</title>
        <meta name="description" content="Learn about Feuchar’s mission, courses, expert team, and student testimonials." />
      </Helmet>

      <Section1 />
      <Values />
      <Subjects />
      <AboutCourses />
      <Team />
      <Testimonial />
      <FAQ />
      <Future />
    </div>
  );
}
