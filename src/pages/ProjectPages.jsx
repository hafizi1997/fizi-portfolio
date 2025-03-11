import React, { useState } from "react"; // Removed Component import as it's not used
import ProjectImages from "../components/ProjectImages";
import Button from "../ui/Button";
import emscimage from "../assets/emsc.png";
import ezbook from "../assets/ezapp_book.png";
import oceztra from "../assets/oceztra.png";

export const ProjectsPages = () => {
  const projects = [
    {
      id: 1,
      title: "eMSC Sirim Malaysia",
      description:
        "I developed a scheduling module that synchronized with existing internal systems and external APIs, reducing assignment conflicts and improving auditor utilization rates.",
      image: emscimage,
      tags: ["SOAD", "JavaScript", "Python", "Java", "MSSQL"],
      liveUrl: "https://emsc.sirim.my/t/emsc/login",
    },
    {
      id: 2,
      title: "Oceztra",
      description:
        "I built a task management system that enabled multi-role users to create, edit, and track tasks for both individuals and teams, enhancing task visibility and workflow efficiency.",
      image: oceztra,
      tags: ["SOAD", "JavaScript", "Python", "Java", "MYSQL"],
      liveUrl: "https://oceztra.com/",
    },
    {
      id: 3,
      title: "EzApp",
      description:
        "I developed key features including room management, user booking, user profiles, user registration, and organization dashboard functionality to ensure secure and efficient user interactions.",
      image: ezbook,
      tags: ["React", "Redux", "Node.js", "MYSQL"],
      liveUrl: "https://ezapp.sufia.online/ezapp",
    },
    {
      id: 4,
      title: "DrGuild",
      description: "My own project about tracking personal growth",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text  text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0080ff] to-[#9333ea] mx-auto mb-6"></div>
          <p className="text-[#f8fafc]/80 max-w-2xl mx-auto">
            Explore my recent work and discover the projects I've built using
            modern technologies.
          </p>
        </div>
        <ProjectImages projects={projects} />
        <div className="text-center mt-12">
          <Button
            href="#project"
            outline
            className="inline-block px-6 py-3 rounded-lg bg-[#111122] text-white font-medium border border-[#f8fafc]/10 hover:border-[#0080ff]/50 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
