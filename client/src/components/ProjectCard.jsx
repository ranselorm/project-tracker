import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <>
      <article className="flex flex-wrap justify-start gap-4">
        <div className="rounded-lg h-[300px] xl:w-[270px] w-full shadow-lg overflow-hidden">
          <div
            className={`${
              project.status === "Not Started"
                ? "bg-[#006A4E] text-white"
                : project.status === "Pending"
                ? "bg-[#6B8E23] text-white"
                : "bg-[#008B8B] text-white"
            } text-[16px] py-2 px-3`}
          >
            {project.status}
          </div>
          <div className="p-3 flex flex-col gap-y-4">
            <h1 className="text-xl mt-2">{project.name}</h1>
            <p className="text-[14px] mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              voluptatem facilis placeat, illo, laborum corrupti vitae autem ea
            </p>
            <div className="flex justify-between items-center mt-3">
              <AiOutlineDelete className="text-red-500 text-2xl cursor-pointer" />
              <Link
                to={`/projects/${project._id}`}
                className="border border-black px-3 rounded-md text-sm py-2 hover:bg-black hover:text-white transition-all duration-300 font-semibold"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
