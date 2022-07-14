import Cards from "../Cards";

const Projects = (props) => {
  return (
    <div className="min-h-3/4 grid place-content-center">
       <h4
        id="projetos"
        className="flex p-6 justify-center m-10 text-3xl text-opacity-50 min-h-full"
      >
         Projetos que participei ou desenvolvi:
         </h4>
      <div className="grid place-items-center grid-flow-row ">
      <Cards className="" />
      </div>
    </div>
  );
};

export default Projects;
