// import React, { useState, useContext } from "react";
// import { ProjectContext } from "../context/projectsContext";
// import toast from "react-hot-toast";

// const EditProjectForm = ({ project }) => {
//   const [name, setName] = useState(project.name);
//   const [description, setDescription] = useState(project.description);
//   const [status, setStatus] = useState(project.status);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const { addProject } = useContext(ProjectContext);
//   const projectId = project._id;

//   async function postData(url, urlData) {
//     setLoading(true);
//     const options = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(urlData),
//     };

//     const response = await fetch(url, options);
//     if (!response.ok) {
//       setError("Something went wrong");
//       setLoading(false);
//     }
//     const data = await response.json();
//     // addProject(data);
//     setLoading(false);
//     setError(false);
//   }

//   async function submitHandler(e) {
//     e.preventDefault();
//     if (name === "" || description === "" || status === "") {
//       return alert("All fields must be filled!");
//     }
//     const projectData = {
//       name,
//       description,
//       status,
//     };
//     postData(`/api/projects/${projectId}`, projectData);

//     toast.success(`${name} successfully updated`);
//     setName("");
//     setDescription("");
//     setStatus("new");
//   }

//   return (
//     <div className="mt-5">
//       <h3>Update Projects Details</h3>
//       <form onSubmit={submitHandler}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             id="name"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea
//             id="description"
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label className="form-label mx-2">Status</label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             name="status"
//             className="form-select"
//           >
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>
//         <button className="btn btn-info" type="submit">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProjectForm;

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaList } from "react-icons/fa";
import { ProjectContext } from "../context/projectsContext";
import { ClientContext } from "../context/clientsContext";
import { AiOutlineEdit } from "react-icons/ai";

const EditProjectModal = ({ project }) => {
  const { addProject } = useContext(ProjectContext);
  const { clients } = useContext(ClientContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);

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
      setLoading(false);
    }
    const data = await response.json();
    // setPro(data);

    setError(false);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const projectData = {
      name,
      description,
      status,
    };

    postData(`/api/projects/${project._id}`, projectData);

    toast.success(`Project (${project.name}) updated successfully`);
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <button
          className="bg-[#116A4E] px-2 py-1 text-white transition-all duration-300 hover:bg-[#004526] flex items-center gap-x-2 rounded-lg"
          data-bs-toggle="modal"
          data-bs-target="#addProjectModal"
        >
          <AiOutlineEdit /> Update
        </button>
      </div>

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
                Edit Project
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
                <div class="flex gap-x-4">
                  <button
                    type="button"
                    className="border border-black px-3 rounded-md text-sm py-2 hover:bg-black hover:text-white transition-all duration-300 font-semibold"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    className="bg-[#006A4E] text-white px-3 rounded-md text-sm py-2  transition-all duration-300 font-semibold"
                    onClick={submitHandler}
                  >
                    Edit Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProjectModal;
