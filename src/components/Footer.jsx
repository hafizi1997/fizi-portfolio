import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-6">
              Creating innovative web solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hafizi1997"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hafizi-kamal-ariffin-64002a1b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://x.com/_fiziie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hafizikamal8@gmail.com</li>
              <li>+(60) 198176949</li>
              <li>Selangor, Malaysia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hafizi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Hasta luego! ❤️</p>
        </div>
      </div>
    </footer>
  );
};
