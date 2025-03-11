import React from "react";

const AboutSkills = ({ aboutSkills }) => {
  const listSkills = aboutSkills.map((skill) => (
    <span
      key={skill}
      className="px-4 py-2 rounded-full text-sm bg-[#111122] border border-[#f8fafc]/10 text-[#f8fafc]/80 hover:border-[#0080ff]/50 hover:text-[#0080ff] transition-all duration-300"
    >
      {skill}
    </span>
  ));
  return <div className="flex flex-wrap gap-3">{listSkills}</div>;
};

export default AboutSkills;
