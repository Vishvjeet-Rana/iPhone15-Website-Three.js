import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="py-5 sm:py-10 px-5">
        <div className="screen-max-width">
          <div>
            <p className="text-center font-semibold text-gray text-xs">
              More ways to shop:{" "}
              <span className="text-blue underline">Find an Apple Store </span>{" "}
              or <span className="text-blue underline">other retailer </span>{" "}
              near you.
            </p>

            <p className="text-center font-semibold text-gray text-xs">
              Or call 000-018001800-9000
            </p>
          </div>
        </div>

        {/* this div represents horizontal line  */}
        <div className="h-[1px] bg-neutral-700 my-5 w-full " />

        <div className="flex md:flex-row flex-col md:items-center justify-around ">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex mt-1">
            {footerLinks.map((link, index) => (
              <p key={link} className="font-semibold text-gray text-xs flex">
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
