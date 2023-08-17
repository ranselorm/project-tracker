import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";

const Project = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  //   console.log(project);

  const getProject = async () => {
    setLoading(true);
    const response = await fetch(`/api/projects/${id}`);
    if (!response.ok) {
      setError("Something went wrong");
      setLoading(false);
    }
    const data = await response.json();
    setProject(data);
    setLoading(false);
  };

  useEffect(() => {
    getProject();
  });

  return (
    <>
      <div className="card w-75 mx-auto p-5">
        <Link to="/" className="btn btn-light btn-sm w-25 ms-auto d-inline">
          Back
        </Link>

        {project && (
          <>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <h5 className="mt-3">Project Status</h5>
            <p className="lead">{project.status}</p>
            <ClientInfo client={project.client} />
            <EditProjectForm project={project} />
            <DeleteProjectButton projectId={id} />
          </>
        )}
      </div>
    </>
  );
};

export default Project;
