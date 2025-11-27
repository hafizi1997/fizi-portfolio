import PropTypes from "prop-types";
import classNames from "classnames";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const CardImage = ({ project, isActive, setActiveProject }) => {
  return (
    <div
      key={project.id}
      className={classNames(
        "bg-[#111122]/50 backdrop-blur-sm rounded-xl border border-[#f8fafc]/10 overflow-hidden group hover:border-[#0080ff]/50 transition-all duration-300"
      )}
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={`/assets/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[#0080ff]/10 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#111122]/80 flex items-center justify-center text-[#f8fafc] hover:bg-[#0080ff] transition-colors"
            aria-label="View live site"
          >
            <ExternalLinkIcon size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#0080ff] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#f8fafc]/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-[#050510] text-[#f8fafc]/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

CardImage.propTypes = {
  project: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  setActiveProject: PropTypes.func.isRequired,
};

export default CardImage;
