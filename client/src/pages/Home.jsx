import React from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <div className="flex gap-x-6 mx-10">
        {/* <AddClientModal />
        <AddProjectModal /> */}
      </div>
      <Projects />
      {/* <Clients /> */}
    </>
  );
};

export default Home;
