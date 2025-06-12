import React from "react";
import { Helmet } from "react-helmet";
import WebinarSection2 from './WebinarSection2';

export default function CoursePage() {
  return (
    <div className="max-wdh">
      <Helmet>
        <title>Webinar - Learn & Grow with Us</title>
        <meta name="description" content="Join our webinar to learn about latest trends and get insights from industry experts." />
        <meta name="keywords" content="webinar, learning, online course, education" />
        <meta name="author" content="Feuchar" />
      </Helmet>

      <WebinarSection2 />
    </div>
  );
}
