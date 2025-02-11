import React from "react";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  });

  return (
    <div>
      <section
        id="highlights"
        className="w-screen h-full bg-zinc overflow-hidden common-padding"
      >
        <div className="screen-max-width pl-2">
          <div className="mb-12 md:flex items-end justify-between w-full">
            <h1 id="title" className="section-heading">
              Get the Highlights.
            </h1>

            <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                Watch the film
                <img src={watchImg} alt="watch image" className="ml-2" />
              </p>
              <p className="link">
                Watch the film
                <img src={rightImg} alt="right image" className="ml-2" />
              </p>
            </div>
          </div>

          <VideoCarousel />
        </div>
      </section>
    </div>
  );
};

export default Highlights;
