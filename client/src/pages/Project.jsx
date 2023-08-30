import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";
import { AiOutlineEdit } from "react-icons/ai";

const Project = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getProject = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${id}`);
      if (!response.ok) {
        setError(json.error);
        setLoading(false);
      }
      const data = await response.json();
      setProject(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <div className="card w-75 mx-auto p-5">
        <Link
          to="/"
          className="btn rounded-lg bg-[#116A4E] btn-sm w-[200px] hover:bg-[#004526] text-white ms-auto d-inline"
        >
          Back
        </Link>
        {project && (
          <>
            <h2 className="text-[40px] mb-4">{project.name}</h2>
            <p className="text-[18px] mb-4">{project.description}</p>
            <p className="lead text-[18px]">
              Project Status:{" "}
              <span className="text-[16px] font-semibold">
                {project.status}
              </span>
            </p>
            <ClientInfo client={project.client} />
            <div className="flex justify-end gap-x-6 mt-5">
              <button className="bg-[#116A4E] px-2 py-1 text-white transition-all duration-300 hover:bg-[#004526] flex items-center gap-x-2 rounded-lg">
                <AiOutlineEdit /> Update
              </button>
              <DeleteProjectButton projectId={id} />
            </div>
            {/* <EditProjectForm project={project} />
            <DeleteProjectButton projectId={id} /> */}
          </>
        )}
      </div>
    </>
  );
};

export default Project;
