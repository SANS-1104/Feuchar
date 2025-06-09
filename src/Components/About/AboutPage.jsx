import Future from "../Home/Future";
import AboutCourses from "./AboutCourses";
import FAQ from "./FAQ";
import Section1 from "./Section1";
import Subjects from "./Subjects";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Values from "./Values";



export default function AboutPage(){
    return(
        <div className="max-wdh">
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