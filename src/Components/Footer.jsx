import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-md font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white text-sm sm:text-base transition-colors duration-200"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-md font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white text-sm sm:text-base transition-colors duration-200"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-md font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white text-sm sm:text-base transition-colors duration-200"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
