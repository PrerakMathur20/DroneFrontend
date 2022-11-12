import Markdown from "markdown-to-jsx";
import { useContext, useEffect, useState } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  let [md, setMd] = useState("");

  useEffect(() => {
    if (singleProjectData.ProjectInfo?.projectDescription) {
      console.log(
        `../../data/${singleProjectData.ProjectInfo?.projectDescription}`
      );
      import(`../../data/${singleProjectData.ProjectInfo?.projectDescription}`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setMd(res))
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14 pb-4">
      {/*  Single project right section */}
      <div className="w-full text-left mt-10 sm:mt-0">
        {singleProjectData?.ProjectInfo?.ProjectDetailsHeading ? (
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {singleProjectData?.ProjectInfo?.ProjectDetailsHeading}
          </p>
        ) : (
          ""
        )}
        <div className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
          <Markdown className="markdown text-justify">{md}</Markdown>
        </div>

        {singleProjectData.ProjectInfo?.list ? (
          <ul className="list-disc">
            {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
              return (
                <li
                  key={details.id}
                  className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                >
                  {details.details}
                </li>
              );
            })}
          </ul>
        ) : (
          singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light text-justify"
              >
                {details.details}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
