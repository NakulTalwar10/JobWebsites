import React from "react";
import "./Fourth.css";

import HandShake from '../../img/cytonn-photography-n95VMLxqM2I-unsplash.jpg'

import video from "../../videos/pexels-tima-miroshnichenko-5442621-3840x2160-25fps.mp4";

const Fourth = () => {
    return (
        <div className="px-4">
            <div className="">
                <h1 className="font-bold text-center text-5xl my-10">CATEGORIES</h1>
                <ul className="flex flex-col md:flex-row justify-center font-bold mb-10">
                    <li className="my-2 md:mx-5">
                        <button className="btn-5">Internship</button>
                    </li>
                    <li className="my-2 md:mx-5">
                        <button className="btn-5">Full-time Job</button>
                    </li>
                    <li className="my-2 md:mx-5">
                        <button className="btn-5">Part-time Job</button>
                    </li>
                    <li className="my-2 md:mx-5">
                        <button className="btn-5">Start-Up Job</button>
                    </li>
                </ul>
            </div>
            <div className="container flex flex-col md:flex-row justify-between mx-auto items-center my-20">
                <div className="text-center md:text-left font-bold mb-10 md:mb-0">
                    <h1 className="font-bold text-4xl">JOB ADVICE</h1>
                    <p className="mt-5 text-lg">
                        Enhance your overall experience as a job seeker!
                    </p>
                </div>
                <div className="video w-full md:w-2/3">
                    <video src={video} autoPlay loop muted></video>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row justify-between mx-auto items-center my-20">
                <div className="text-center md:text-left font-bold mb-10 md:mb-0">
                    <h1 className="font-bold text-4xl">
                        WE TRANSFORM THE WAY CANDIDATES FIND JOBS
                    </h1>
                    <p className="mt-5 text-lg">
                        Your professional profile is used to display your achievements and act as a portfolio of your
                        work- <br /> its also a tool to build your career reputation and create networks. As fresh graduates,
                        you can still <br /> prove yourselves as viable candidates.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <img
                        src={HandShake}
                        alt="placeholder"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Fourth;
