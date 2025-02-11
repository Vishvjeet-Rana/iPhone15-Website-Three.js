import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );

  // now here we are adding a function for setting video source according to the window width
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };

  // it handles the video source on window resize
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    // it is always important to remove event listeners when they are not needed because they can cause memory leaks
    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#heroTitle", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative overflow-hidden">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="heroTitle" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* iphone video goes here */}
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            playsInline={true}
            muted
            autoPlay
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* this div is for prices and stuff after iphone video */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
