import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import TutorForm from "./TutorForm";


export default function BecomeTutorPage(){
    return(
        <div className="BecomeTutorPage-wrapper max-wdh">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <TutorForm />            
        </div>
    )
}