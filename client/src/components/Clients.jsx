import { useEffect, useState, useContext } from "react";

import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { ClientContext } from "../context/clientsContext";

const Clients = () => {
  // const [clients, setClients] = useState([]);
  const { clients, setClients } = useContext(ClientContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    setLoading(true);
    const response = await fetch("/api/clients");
    if (!response.ok) {
      setLoading(false);
      setError(error);
    }
    const data = await response.json();
    setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    getClients();
  }, [setClients]);

  if (loading) return <section>Loading...</section>;

  return (
    <div>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <span className="">No client yet? Add Client</span>
          ) : (
            clients?.map((client, index) => {
              return <ClientRow key={index} client={client} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
