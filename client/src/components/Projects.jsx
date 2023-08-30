import { useState, useEffect, useContext } from "react";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../context/projectsContext";

const Projects = () => {
  const { projects, setProjects } = useContext(ProjectContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        setLoading(false);
        setError(error);
      }
      const data = await response.json();
      setProjects(data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, [setProjects]);

  if (loading)
    return (
      <section>
        <Spinner />
      </section>
    );

  if (error)
    return (
      <section className="flex items-center ">
        Something went wrong. Try again!
      </section>
    );

  return (
    <>
      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <div className="mt-5 flex flex-wrap gap-4 xl:pl-[50px] pl-0">
          {projects &&
            projects.map((project) => (
              <div className="">
                <ProjectCard key={project._id} project={project} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Projects;
