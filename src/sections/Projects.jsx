import { PROJECTS } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      <ul className="projects-grid">
        {PROJECTS.map((project) => {
          const primaryUrl = project.liveUrl || project.repoUrl;

          return (
            <li key={project.id} className="project-card">
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer"
                className="project-media-link"
                tabIndex={-1}
                aria-hidden="true"
              >
                {project.image ? (
                  <img
                    className="project-media"
                    src={project.image}
                    alt=""
                    loading="lazy"
                    style={{
                        objectPosition: project.imagePosition,
                        transformOrigin: project.imagePosition,
                        transform: project.imageZoom ? `scale(${project.imageZoom})` : undefined,
                    }}
                  />
                ) : (
                  <div className="project-media project-media-empty" />
                )}
              </a>

              <div className="project-body">
                <h3 className="project-name">
                  <a href={primaryUrl} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.technologies.join(', ')}</p>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}