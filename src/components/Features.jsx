import React from "react";
import { animationWithGsap } from "../utils/animations";
import { useGSAP } from "@gsap/react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause restart reverse",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animationWithGsap("#features_title", { y: 0, opacity: 1 });
    animationWithGsap(
      ".g_grow",
      { ease: "power1", opacity: 1, scale: 1 },
      { scrub: 5.5 }
    );
    animationWithGsap(".g_text", {
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      opacity: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section className="common-padding h-full overflow-hidden relative bg-zinc">
      {/* main div */}
      <div className="screen-max-width ">
        <div className="mb-10 w-full mt-10">
          <h1 id="features_title" className="section-heading ml-5">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden ">
          <div className="mt-32 mb-24 px-24">
            <h2 className="text-5xl lg:text-7xl font-semibold ">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold ">
              Forged in Titanium.
            </h2>
          </div>

          {/* animated videos and images will go here */}
          <div className="flex-center flex-col sm:px-10  ">
            <div className="h-[50vh] relative w-full flex items-center">
              <video
                muted
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                autoPlay
                ref={videoRef}
                style={{ borderRadius: "16px" }}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            {/* another images and videos */}
            <div className="w-full flex flex-col relative px-2">
              <div className="feature-video-container">
                <div className="flex-1 h-[50vh] overflow-hidden rounded-2xl">
                  <img
                    src={explore1Img}
                    alt="Titanium"
                    className="g_grow feature-video"
                  />
                </div>
                <div className="flex-1 h-[50vh] overflow-hidden rounded-2xl">
                  <img
                    src={explore2Img}
                    alt="Titanium"
                    className="g_grow feature-video"
                  />
                </div>
              </div>

              {/* feature text goes here */}
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanum
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strenght-to-weight to ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.{" "}
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
