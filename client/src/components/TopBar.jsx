import AddClientModal from "./AddClientModal";
import AddProjectModal from "./AddProjectModal";
import { AiOutlineSearch } from "react-icons/ai";
const TopBar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center gap-x-4">
          <form>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Project Name"
                className="outline-none w-[300px] border rounded-lg border-gray-100 py-1 px-4"
              />
              <AiOutlineSearch className="text-xl cursor-pointer font-semibold absolute right-2 text-[#008B8B]" />
            </div>
          </form>
          <div>
            <span className="mx-2">Filter:</span>
            <select
              name=""
              id=""
              className="outline-none w-[300px] border rounded-lg border-gray-100 py-1 px-4"
            >
              <option value="">Not Started</option>
              <option value="">In Progress</option>
              <option value="">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <AddClientModal />
          <AddProjectModal />
        </div>
      </div>
    </>
  );
};

export default TopBar;
