import React, { useRef } from "react";
import { animationWithGsap, chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "play pause restart reverse",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
        end: "20% top", // ✅ Triggers again when scrolling back up
        toggleActions: "play none none reverse", // ✅ Ensures smooth re-animation
      },
      opacity: 0,
      ease: "power2.inOut",
      duration: 2,
      scale: 2,
    });

    animationWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding overflow-hidden ">
      <div className="screen-max-width">
        <div id="chip" className="w-full my-20 flex-center">
          <img src={chipImg} alt="chip image" height={180} width={180} />
        </div>

        {/* headings goes here */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A27 Pro chip.
            <br />A monster win for gaming.
          </h2>

          <p className="hiw-subtitle px-1">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* the gaming video goes here */}
        <div className="mt-10 mb-14 md:mt-15">
          <div className="relative h-full flex center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame image for gaming video"
                className="bg-transparent relative z-10 w-full h-auto"
              />
            </div>

            {/* video */}
            <div className="hiw-video">
              <video
                id="frameVideo"
                playsInline
                muted
                className="pointer-events-none w-full h-full object-cover"
                preload="none"
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray text-center font-semibold mt-3">
            Honkai: Star Rail.
          </p>
        </div>

        <div className="hiw-text-container px-3">
          <div className="flex-1 flex-col justify-center flex">
            <p className="feature-text g_fadeIn">
              A17 pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far.
              </span>
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immerisve{" "}
              </span>
              , will incredibly detailed enviroments and characters.
            </p>
          </div>

          {/* core detail section  */}
          <div className="flex flex-1 justify-center flex-col g_fadeIn px-3 mb-5 bg-zinc w-full rounded-xl">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
