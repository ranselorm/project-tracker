import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaList } from "react-icons/fa";
import { ProjectContext } from "../context/projectsContext";
import { ClientContext } from "../context/clientsContext";

const AddProjectModal = () => {
  const { addProject, setProjects } = useContext(ProjectContext);
  const { clients } = useContext(ClientContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [client, setClient] = useState("");

  async function postData(url, urlData) {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urlData),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      setLoading(false);
    }
    const data = await response.json();
    addProject(data);

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
      client,
    };
    postData("/api/projects", projectData);

    toast.success(`${name} added as a project`);
    setName("");
    setDescription("");
    setStatus("Not Started");
    setClient("");
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addProjectModalLabel">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                <div className="mb-3">
                  <label className="form-label mx-2">Client</label>
                  <select
                    className="form-select"
                    id="clientId"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  >
                    <option value="">Select Client</option>
                    {clients?.map((client, index) => (
                      <option value={client._id} key={index}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
