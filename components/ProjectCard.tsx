import { Project } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-light-text text-dark-bg rounded-lg p-6 card-hover">
      {/* Project Image */}
      {project.image && (
        <div className="mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.status && (
          <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">
            {project.status}
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-4 text-sm">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-gray-100 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
      >
        View Project
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}
