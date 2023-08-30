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
    <div className="">
      <button
        onClick={() => deleteProject(projectId)}
        className="flex items-center py-1 px-2 bg-red-700 text-white rounded-lg"
        disabled={loading}
      >
        <FaTrash className="icon" />
        {loading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default DeleteProjectButton;
