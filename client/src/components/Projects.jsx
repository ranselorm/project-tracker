import { useState, useEffect, useContext } from "react";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../context/projectsContext";

const Projects = () => {
  const { projects, setProjects } = useContext(ProjectContext);
  // const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    const response = await fetch("/api/projects");
    if (!response.ok) {
      setLoading(false);
      setError(error);
    }
    const data = await response.json();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, [setProjects]);

  if (loading) return <section>Loading...</section>;

  return (
    <>
      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <div className="row mt-5">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      )}
    </>
  );
};

export default Projects;
