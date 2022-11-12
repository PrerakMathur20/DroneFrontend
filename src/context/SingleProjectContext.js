import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ id, children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson.find(({ id: projectId }) => projectId === id)
  );

  console.log({ singleProjectData, singleProjectDataJson });

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
