import HeroSection2 from "./HeroSection2"
import CourseLive2 from "./CourseLive2"
import Features from "./Features";
import Enroll from "./Enroll";
import Gurukul from "./Gurukul";
import Future from "./Future";
import Teachers from "./Teachers";
import StudentSaying from "./StudentSaying";
import Button from "./Button";
import Journey from "./Journey";
import './HeroSection2.css'; 
import './modal.css' ;
import NewModalForm from "./NewModalForm";

import React, { useState } from "react";


export default function Homepage(){
  const [modalOpen, setModalOpen] = useState(false);
    return (
      <div className="max-wdh">
       <HeroSection2 />
        <Journey />
        <CourseLive2 />
        <StudentSaying />
        <div className="home-BookBtn-button-container"><Button data= 'Book a FREE Live Demo Class' onclk={() => setModalOpen(true)}/></div>
        <Features />
        <Enroll/>
        <Gurukul />
        <Teachers />
        <Future />
        <NewModalForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    );
}


