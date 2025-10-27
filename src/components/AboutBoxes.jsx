import { useState } from "react";
import { UserIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import Card from "../ui/Card";
import "./AboutBoxes.css";

const AboutBoxes = ({ aboutData }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const cards = Object.values(aboutData).map((about, index) => (
    <div className="card-wrapper" key={index}>
      <div
        className={`card-flipper ${flippedIndex === index ? "flipped" : ""}`}
        onClick={() => handleFlip(index)}
      >
        {/* Front Side */}
        <div className="front">
          <Card className="hover:border-[#0080ff]/50 transition-all duration-300 group flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-[#0080ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#0080ff]/20 transition-colors beep">
              {about.icon}
            </div>
            <h4 className="font-bold mb-2">{about.title}</h4>
            <p className="text-[#f8fafc]/70 text-sm">{about.content}</p>
          </Card>
        </div>
        {/* Back Side */}
        <div className="back">
          <p className="text-[#f8fafc]/70 text-sm">{about.elaborate}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">{cards}</div>
  );
};

export default AboutBoxes;
