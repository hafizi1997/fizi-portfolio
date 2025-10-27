import React from "react";
import { useEffect, useRef, useState } from "react";
import "../pages/HeroPages.css";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import CodeBox from "../components/CodeBox";
import Button from "../ui/Button";

const HeroPages = () => {
  const user = {
    name: '"Muhammad Hafizi"',
    projects: ['"Anycomp"', '"eMSC"', '"Oceztra"'],
    passion: '"Building beautiful web experiences"',
  };
  const titleRef = useRef(null);
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const animateText = () => {
      title.innerHTML = ""; // Clear existing text
      const letters = "Bringing Ideas to Life Through Code".split(""); // Split into characters

      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.innerText = letter === " " ? "\u00A0" : letter; // Use non-breaking space for gaps
        span.style.animationDelay = `${i * 0.05}s`;
        span.className = "inline-block animate-fade-in";
        title.appendChild(span);
      });
    };

    animateText(); // Run first animation

    const interval = setInterval(() => {
      animateText(); // Restart animation after delay
    }, 3000); // Adjust the delay for a smooth transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5">
            <div className="mb-4 inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm bg-[#111122] border border-[#0080ff]/30 text-[#0080ff]">
                Full Stack Developer
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            ></h1>
            <p className="text-[#f8fafc]/80 text-lg mb-8 max-w-xl leading-relaxed">
              I design and build modern web applications with a focus on user
              experience, performance, and clean code. Let's bring your vision
              to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button primary href="#projects">
                View My Work
              </Button>
              <Button outline href="#contact">
                Contact Me
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-[#f8fafc]/20"></div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/hafizi1997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f8fafc]/60 hover:text-[#0080ff] transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-hafizi-kamal-ariffin-64002a1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f8fafc]/60 hover:text-[#0080ff] transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://x.com/_fiziie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f8fafc]/60 hover:text-[#0080ff] transition-colors"
                >
                  <TwitterIcon size={20} />
                </a>
              </div>
              <div className="h-px w-12 bg-[#f8fafc]/20"></div>
            </div>
          </div>
          <div className="lg:w-2/5 relative">
            <CodeBox user={user} />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="text-[#f8fafc]/60 hover:text-[#0080ff] transition-colors"
          >
            <ArrowDownIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPages;
