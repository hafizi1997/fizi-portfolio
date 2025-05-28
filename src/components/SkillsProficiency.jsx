import React from "react";
import ProgressBar from "../ui/ProgressBar";
const SkillsProficiency = ({ skills }) => {
  const listProficiency = skills.map((skill, index) => (
    <div key={index}>
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <ProgressBar level={skill.level} />
    </div>
  ));
  return <>{listProficiency}</>;
};

export default SkillsProficiency;
