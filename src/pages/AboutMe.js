import AboutMeBio from "../components/about/AboutMeBio";
import projectDirector from "../images/vks.jpg";
import Markdown from "markdown-to-jsx";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients.js";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  let [md, setMd] = useState("");
  useEffect(() => {
    import("../data/team.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMd(res))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio
          picture={projectDirector}
          details={
            <>
              <p className="font-general-medium text-ternary-dark dark:text-ternary-light text-3xl font-bold mb-5">
                Dr. Vishal Krishna Singh
              </p>
              <p className="font-general-medium text-ternary-dark dark:text-ternary-light text-xl">
                Project Director
              </p>
            </>
          }
        />
        {/* <p className="font-general-medium text-ternary-dark dark:text-ternary-light">
          <Markdown className="markdown">{md}</Markdown>
        </p> */}
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
