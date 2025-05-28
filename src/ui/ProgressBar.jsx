import React from "react";

const ProgressBar = ({ level }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          width: `${level}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
