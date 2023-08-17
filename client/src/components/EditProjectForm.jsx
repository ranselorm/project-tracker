import React, { useState, useContext } from "react";
import { ProjectContext } from "../context/projectsContext";
import toast from "react-hot-toast";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { addProject } = useContext(ProjectContext);
  const projectId = project._id;

  async function postData(url, urlData) {
    setLoading(true);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urlData),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      setError("Something went wrong");
      setLoading(false);
    }
    const data = await response.json();
    // addProject(data);
    setLoading(false);
    setError(false);
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("All fields must be filled!");
    }
    const projectData = {
      name,
      description,
      status,
    };
    postData(`/api/projects/${projectId}`, projectData);

    toast.success(`${name} successfully updated`);
    setName("");
    setDescription("");
    setStatus("new");
  }

  return (
    <div className="mt-5">
      <h3>Update Projects Details</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label mx-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            name="status"
            className="form-select"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-info" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
