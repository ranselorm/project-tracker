import { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <ClientContext.Provider value={{ clients, setClients, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};
