import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ClientContext } from "../context/clientsContext";

const ClientRow = ({ client }) => {
  const { clients, setClients, removeClient } = useContext(ClientContext);
  const id = client._id;

  const deleteClient = async (id) => {
    const response = await fetch(`/api/clients/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Something went wrong with the deletion");
      return;
    }
    setClients(clients.filter((client) => client._id !== id));
  };

  return (
    <tr>
      <td className="text-capitalize">{client.name}</td>
      <td>{client.email.toLowerCase()}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteClient(id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
