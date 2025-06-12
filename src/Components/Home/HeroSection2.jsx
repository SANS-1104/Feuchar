import "./HeroSection2.css"
import Button from "./Button";
import HomeHeroForm from "./HomeHeroForm";
import ModalPopup from "./ModalPopup";
import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function HeroSection2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={`OuterHero-wrapper max-wdh ${isModalOpen ? "blurred" : ""}`}>
          <div className="left-half">
            <div className="layer1">Learn Occult Sciences & Earn UNLIMITED TODAY</div>
            <div className="layer2">
              <div className="layer21">
                <div className="a">
                  <div className="a1">4.9*</div>
                  <div className="a2">Overall customer rating</div>
                </div>
                <div className="a">
                  <div className="a1">6 LPA+</div>
                  <div className="a2">Avg. Package | Max ₹2 Cr</div>
                </div>
              </div>
              <div className="layer21">
                <div className="a">
                  <div className="a1">50+</div>
                  <div className="a2">years of total Experience</div>
                </div>
                <div className="a">
                  <div className="a1">5+</div>
                  <div className="a2">Experienced Astro-Gurus</div>
                </div>
              </div>
            </div>
            <div className="layer3">
              <div className="layer31">
                <Button data="Request Callback" onclk={openModal}/>
              </div>
              <div className='layer32'>
                  <div className='avatarImg'><img src='/images/avatar.png' alt=''/></div>
                  <div className='content'><p>More than 6k people trust us</p></div>
                </div>
            </div>
          </div>
          <div className="right-half">
            <HomeHeroForm />
          </div>
        </div>
        <ModalPopup isOpen={isModalOpen} onClose={closeModal} />
      </>
  );
}


export default HeroSection2;