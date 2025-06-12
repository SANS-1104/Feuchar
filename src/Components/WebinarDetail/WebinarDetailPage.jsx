import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TestimonialCarousel from './TestimonialCarousel';
import './webinarDetail.css';
import WebinarAbt from './WebinarAbt';
import WebinarAgenda from './WebinarAgenda';
import WebinarCoursePrev from './WebinarCoursePrev';
import WebinarHero from './WebinarHero';
import WebinarLearn from './WebinarLearn';
import WebinarSeats from './WebinarSeats';
import { webinarData } from '../../data/webinarData';

export default function WebinarDetailPage() {
    const { id } = useParams();
    const webinar = webinarData.find((c) => c.id.toString() === id);
    return (
        <div className="webinarPage max-wdh">
            <Helmet>
                <title>Webinar - Learn & Grow with Us</title>
                <meta name="description" content="Join our webinar to learn about latest trends and get insights from industry experts." />
                <meta name="keywords" content="webinar, learning, online course, education" />
                <meta name="author" content="Feuchar" />
            </Helmet>

            <WebinarHero webinar={webinar}/>
            <WebinarAgenda webinar={webinar}/>
            <WebinarLearn webinar={webinar}/>
            <WebinarCoursePrev webinar={webinar}/>
            <TestimonialCarousel webinar={webinar}/>
            <WebinarSeats webinar={webinar}/>
            <WebinarAbt webinar={webinar}/>
        </div>
    );
}
