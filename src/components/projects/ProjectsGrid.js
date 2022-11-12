import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10" id="projectsGrid">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          About
        </p>
        <div className="dark:text-ternary-light text-black mt-6 text-justify">
          The plan is to design and build a low-cost, open-source model of a
          drone or quadcopter that can be connected to any smartphone running
          Android and used to analyse and process photographs and videos of
          agricultural regions. Afterwards, the data processing will be
          completed using an ML algorithm that leverages the smartphone's
          hardware for input, storage, processing, communication, and other
          purposes. Utilizing recycled mobile phones significantly reduces the
          per-unit cost of planned hardware, bringing the price to a level that
          is affordable for individual farmers and village panchayats.
        </div>
      </div>

      <div className="mt-10 sm:mt-16">
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        w-fit
                        m-auto
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Here"
              aria-label="Name"
            />
          </div>

          {/* <ProjectsFilter setSelectProject={setSelectProject} /> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-6 sm:gap-10 lg:gap-32">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                urlId={project.urlId}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                urlId={project.urlId}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                urlId={project.urlId}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
