import React, { useState, useRef, useEffect } from "react";
import "./Codebox.css";

const CodeBox = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const codeBoxRef = useRef(null);
  const taskbarItemRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false); // Trigger minimize animation
  };

  const handleOpen = () => {
    setIsOpen(true); // Trigger restore animation
  };

  return (
    <div className="relative w-full aspect-square max-w-md">
      {/* Desktop Background (visible when CodeBox is minimized) */}
      <div className="desktop-view absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-end custom-bg">
          {/* Taskbar (Dock) */}
          <div className="taskbar h-16 bg-[#2d3748]/80 backdrop-blur-lg border-t border-[#f8fafc]/10 flex justify-center items-center">
            <div
              ref={taskbarItemRef}
              className="taskbar-item w-12 h-12 bg-[#111122] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#0080ff]/50 transition-all duration-300 transform hover:scale-110"
              onClick={handleOpen}
              title="Open VsCode"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                alt="VS Code Logo"
                className="w-8 h-8 beep"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CodeBox Window */}
      <div
        ref={codeBoxRef}
        className={`code-box absolute inset-0 bg-[#111122] rounded-2xl border border-[#f8fafc]/10 backdrop-blur-sm overflow-hidden ${
          isOpen ? "open-genie" : "close-genie"
        }`}
      >
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#0080ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#9333ea]/20 rounded-full blur-3xl"></div>
        {/* Code editor-like design */}
        <div className="absolute inset-4 bg-[#050510] rounded-lg overflow-hidden">
          <div className="h-6 bg-[#111122] flex items-center px-3 gap-1.5">
            <div className="relative w-2.5 h-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full bg-[#f87171] cursor-pointer hover:bg-red-500 transition-colors close-button"
                onClick={handleClose}
                title="Close"
              >
                <span className="close-icon text-white text-[8px] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
                  X
                </span>
              </div>
            </div>
            <div
              className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] cursor-pointer hover:bg-yellow-500 transition-colors close-button"
              onClick={handleClose}
              title="Minimize"
            >
              <span className="close-icon text-white text-[8px] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
                -
              </span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#34d399]"></div>
          </div>
          <div className="p-4 font-mono text-sm">
            <p>
              <span className="text-[#9333ea]">const</span>{" "}
              <span className="text-[#0080ff]">DEVELOPER</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-[#f7b955]"></span>
            </p>
            <p className="pl-6">
              <span className="text-[#0080ff]">name</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#34d399]">{user?.name}</span>
              <span className="text-white">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#0080ff]">projects</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#f7b955]">[</span>
              {user.projects.map((project, index) => (
                <React.Fragment key={index}>
                  <span className="text-[#34d399]">{project}</span>
                  {index !== user.projects.length - 1 && (
                    <span className="text-white">, </span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-[#f7b955]">]</span>
              <span className="text-white">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#0080ff]">passion</span>
              <span className="text-white">:</span>{" "}
              <span className="text-[#34d399]">{user?.passion}</span>
            </p>
            <p>
              <span className="text-[#f7b955]"></span>
              <span className="text-white">;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
