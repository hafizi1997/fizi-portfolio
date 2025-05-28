import React from "react";
import AboutBoxes from "../components/AboutBoxes";
import AboutSkills from "../components/AboutSkills";
import { UserIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import myimage from "../assets/myimage9.png";

export const AboutPages = () => {
  const aboutData = {
    personal: {
      icon: <UserIcon className="text-[#0080ff]" size={24} />,
      title: "Personal",
      content: "Creative problem-solver with attention to detail",
      elaborate:
        "I enjoy breaking down complex problems into simple, efficient solutions. I focus on writing clean, maintainable code and always strive to improve my problem-solving skills.",
    },
    experience: {
      icon: <BriefcaseIcon className="text-[#0080ff]" size={24} />,
      title: "Experience",
      content: " 2 years building modern web applications",
      elaborate:
        "I have worked on multiple projects, building and refining applications that are both functional and user-friendly. My experience includes working at Webgeaz Sdn Bhd as a Software Developer and as a Trainee under Yayasan Pahang LAUNCHPAD 360 by TalentCorp",
    },
    education: {
      icon: <GraduationCapIcon className="text-[#0080ff]" size={24} />,
      title: "Education",
      content: "Bachelor's in Nuclear Engineering",
      elaborate:
        "Though my degree is in Nuclear Engineering, my passion for coding led me to transition into software development. My engineering background has strengthened my analytical and problem-solving skills, which I apply in every project I work on.",
    },
  };
  const aboutSkills = [
    "HTML",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Tailwind CSS",
    "React",
    "NextJs",
    "Angular",
    "Python",
    "Node.js",
    "MySQL",
    "MSSQL",
    "PostgresSQL",
  ];
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text  text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0080ff] to-[#9333ea] mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0080ff] to-[#9333ea] rounded-xl opacity-30 blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-[#f8fafc]/10">
                <img
                  src={myimage}
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-[#f8fafc]/80 mb-6 leading-relaxed">
              I'm a Full Stack Software Developer with 2 years of experience in
              building and maintaining web applications. Passionate about
              solving real-world problems with modern web technologies, I craft
              responsive, accessible, and performant applications that solve
              real-world problems..
            </p>
            <p className="text-[#f8fafc]/80 mb-8 leading-relaxed">
              My journey into coding started with a deep curiosity about how
              websites and applications work. I began exploring programming on
              my own, building small projects, and quickly developed a passion
              for creating interactive and user-friendly applications. Over
              time, I honed my skills, worked on multiple projects, and focused
              on developing efficient and well-structured software solutions. I
              enjoy tackling challenges, refining my problem-solving skills, and
              mastering the technologies I work with until I achieve a high
              level of expertise
            </p>
            <AboutBoxes aboutData={aboutData} />
            <AboutSkills aboutSkills={aboutSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};
