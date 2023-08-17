import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { ProjectContext } from "../context/projectsContext";
import toast from "react-hot-toast";

const DeleteProjectButton = ({ projectId }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteProject = async (id) => {
    setLoading(true);
    const response = await fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Something went wrong");
      setLoading(false);
      return;
    }
    const data = await response.json();
    setProjects(projects.filter((project) => project._id !== projectId));
    setLoading(false);

    if (loading) {
      toast.promise("Deleting...");
    }

    setTimeout(() => {
      data &&
        toast.success(
          `${data?.name} successfully deleted. Redirecting please wait...`
        );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1000);
  };
  const { setProjects, projects } = useContext(ProjectContext);
  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        onClick={() => deleteProject(projectId)}
        className="btn btn-danger btn-sm m-2"
      >
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
