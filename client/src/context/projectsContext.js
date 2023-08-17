import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  return (
    <ProjectContext.Provider value={{ projects, setProjects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
