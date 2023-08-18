import React from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      {/* <div className="flex gap-x-6 mx-10">

        <div>
          <AddClientModal />
          <AddProjectModal />
        </div>
      </div> */}
      <TopBar />
      <Projects />
      {/* <Clients /> */}
    </>
  );
};

export default Home;
