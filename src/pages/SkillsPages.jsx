import React from "react";
import SkillsProficiency from "../components/SkillsProficiency";
import AboutSkills from "../components/AboutSkills";
import Card from "../ui/Card";

const skills = [
  { name: "React", level: 95 },
  { name: "NextJs", level: 90 },
  { name: "NextJs", level: 90 },
  { name: "Laravel", level: 70 },
  { name: "Angular", level: 65 },
  { name: "flutter", level: 45 },
  { name: "JavaScript & jQuery", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Python", level: 75 },
  { name: "Java", level: 45 },
  { name: "Node.js", level: 80 },
  { name: "SOAD", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 70 },
  { name: "MYSQL & MSSQL", level: 75 },
  { name: "PostgresSQL", level: 70 },
  { name: "PostgresSQL", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "MS Azure", level: 55 },
  { name: "Ubuntu", level: 60 },
  { name: "Git", level: 65 },
];

const technologies = [
  "React",
  "NextJs",
  "Laravel",
  "Angular",
  "Flutter",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Node.js",
  "SOAD",
  "MongoDB",
  "PostgresSQL",
  "MYSQL",
  "MSSQL",
  "PostgresSQL",
  "MYSQL",
  "MSSQL",
  "MS Azure",
  "Figma",
  "Ubuntu",
  "Git",
  "Magic Patterns",
  "UI/UX design",
];

export const SkillsPages = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit includes a wide range of modern technologies
            and frameworks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Technical Proficiency
            </h3>
            <div className="space-y-5">
              <SkillsProficiency skills={skills} />
            </div>
          </div>
          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              <AboutSkills aboutSkills={technologies} />
            </div>
            <Card className="mt-12">
              <h4 className="text-lg font-medium text-white mb-4">
                Continuous Learning
              </h4>
              <p className="text-gray-400">
                I'm constantly expanding my skillset and staying up-to-date with
                the latest technologies. Currently exploring machine learning
                and how to implement into development product.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
