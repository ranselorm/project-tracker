import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { ClientContext } from "../context/clientsContext";

const AddClientModal = () => {
  const { addClient } = useContext(ClientContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    addClient(data);
    setError(false);
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      return alert("All fields must be filled!");
    }
    const clientData = {
      name,
      email,
      phone,
    };
    postData("/api/clients", clientData);

    toast.success(`${name} added as a client`);
    setName("");
    setEmail("");
    setPhone("");
  }
  return (
    <>
      <button
        type="button"
        className="bg-[#006A4E] p-2 rounded-lg text-white flex items-center"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModal"
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModalLabel">
                Add Client
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
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
                    type="button"
                    className="bg-[#006A4E] text-white px-3 rounded-md text-sm py-2  transition-all duration-300 font-semibold"
                    onClick={submitHandler}
                  >
                    Add Client
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

export default AddClientModal;
